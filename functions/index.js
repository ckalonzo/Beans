const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
const express = require("express");
const cors = require("cors")({ origin: true });
const app = express();
const FBAuth = require("./util/fbAuth");
const { db } = require("./util/admin");

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello Trucked Away!");
});

const {
  getAllProjects,
  postOneProject,
  getProject,
  commentOnProject,
  likeProject,
  unlikeProject,
  deleteProject
} = require("./handlers/projects");
const {
  signup,
  login,
  uploadImage,
  addUserDetails,
  getAuthenticatedUser,
  getUserDetails,
  markNotificationsRead
} = require("./handlers/contractorProfile");

// Scream routes
app.get("/projects", getAllScreams);
app.post("/project", FBAuth, postOneProject);
app.get("/project/:projectId", getProject);
app.delete("/project/:projectId", FBAuth, deleteProject);
app.get("/project/:projectId/like", FBAuth, likeProject);
app.get("/project/:projectId/unlike", FBAuth, unlikeProject);
app.post("/project/:projectId/comment", FBAuth, commentOnProject);

// users routes
app.post("/signup", signup);
app.post("/login", login);
app.post("/user/image", FBAuth, uploadImage);
app.post("/user", FBAuth, addUserDetails);
app.get("/user", FBAuth, getAuthenticatedUser);
app.get("/user/:handle", getUserDetails);
app.post("/notifications", FBAuth, markNotificationsRead);

exports.api = functions.region("europe-west1").https.onRequest(app);

exports.createNotificationOnBid = functions
  .region("europe-west1")
  .firestore.document("bids/{id}")
  .onCreate(snapshot => {
    return db
      .doc(`/projectss/${snapshot.data().projectId}`)
      .get()
      .then(doc => {
        if (
          doc.exists &&
          doc.data().userHandle !== snapshot.data().userHandle
        ) {
          return db.doc(`/notifications/${snapshot.id}`).set({
            createdAt: new Date().toISOString(),
            recipient: doc.data().userHandle,
            sender: snapshot.data().userHandle,
            type: "bid",
            read: false,
            projectId: doc.id
          });
        }
      })
      .catch(err => console.error(err));
  });

exports.deleteNotificationOnBid = functions
  .region("europe-west1")
  .firestore.document("bids/{id}")
  .onDelete(snapshot => {
    return db
      .doc(`/notifications/${snapshot.id}`)
      .delete()
      .catch(err => {
        console.error(err);
        return;
      });
  });

exports.createNotificationOnReview = functions
  .region("europe-west1")
  .firestore.document("reviews/{id}")
  .onCreate(snapshot => {
    return db
      .doc(`/reviews/${snapshot.data().reviewId}`)
      .get()
      .then(doc => {
        if (
          doc.exists &&
          doc.data().userHandle !== snapshot.data().userHandle
        ) {
          return db.doc(`/notifications/${snapshot.id}`).set({
            createdAt: new Date().toISOString(),
            recipient: doc.data().userHandle,
            sender: snapshot.data().userHandle,
            type: "comment",
            read: false,
            screamId: doc.id
          });
        }
      })
      .catch(err => {
        console.error(err);
        return;
      });
  });

exports.onUserImageChange = functions
  .region("europe-west1")
  .firestore.document("/contractor/{userId}")
  .onUpdate(change => {
    console.log(change.before.data());
    console.log(change.after.data());
    if (change.before.data().imageUrl !== change.after.data().imageUrl) {
      console.log("image has changed");
      const batch = db.batch();
      return db
        .collection("projects")
        .where("userHandle", "==", change.before.data().handle)
        .get()
        .then(data => {
          data.forEach(doc => {
            const project = db.doc(`/projects/${doc.id}`);
            batch.update(project, { userImage: change.after.data().imageUrl });
          });
          return batch.commit();
        });
    } else return true;
  });

//   exports.onScreamDelete = functions
//   .region('europe-west1')
//   .firestore.document('/screams/{screamId}')
//   .onDelete((snapshot, context) => {
//     const screamId = context.params.screamId;
//     const batch = db.batch();
//     return db
//       .collection('comments')
//       .where('screamId', '==', screamId)
//       .get()
//       .then((data) => {
//         data.forEach((doc) => {
//           batch.delete(db.doc(`/comments/${doc.id}`));
//         });
//         return db
//           .collection('likes')
//           .where('screamId', '==', screamId)
//           .get();
//       })
//       .then((data) => {
//         data.forEach((doc) => {
//           batch.delete(db.doc(`/likes/${doc.id}`));
//         });
//         return db
//           .collection('notifications')
//           .where('screamId', '==', screamId)
//           .get();
//       })
//       .then((data) => {
//         data.forEach((doc) => {
//           batch.delete(db.doc(`/notifications/${doc.id}`));
//         });
//         return batch.commit();
//       })
//       .catch((err) => console.error(err));
//   });

// TODO: Remember to set token using >> firebase functions:config:set stripe.token="SECRET_STRIPE_TOKEN_HERE"
const stripe = require("stripe")(functions.config().stripe.token);

function charge(req, res) {
  const body = JSON.parse(req.body);
  const token = body.token.id;
  const amount = body.charge.amount;
  const currency = body.charge.currency;

  // Charge card
  stripe.charges
    .create({
      amount,
      currency,
      description: "Firebase Example",
      source: token
    })
    .then(charge => {
      send(res, 200, {
        message: "Success",
        charge
      });
    })
    .catch(err => {
      console.log(err);
      send(res, 500, {
        error: err.message
      });
    });
}

function send(res, code, body) {
  res.send({
    statusCode: code,
    headers: { "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify(body)
  });
}

app.use(cors);
app.post("/", (req, res) => {
  // Catch any unexpected errors to prevent crashing
  try {
    charge(req, res);
  } catch (e) {
    console.log(e);
    send(res, 500, {
      error: `The server received an unexpected error. Please try again and contact the site admin if the error persists.`
    });
  }
});

exports.charge = functions.https.onRequest(app);
