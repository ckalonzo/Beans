const { db } = require("../util/admin");

exports.getAllProjects = (req, res) => {
  db.collection("projects")
    .orderBy("createdAt")
    .get()
    .then(data => {
      let projects = [];
      data.forEach(doc => {
        projects.push({
          address: doc.data().address,
          budget: doc.data().budget,
          city: doc.data().city,
          createdAt: doc.data().createdAt,
          customerFirstName: doc.data().customerFirstName,
          customerId: doc.data().customerId,
          customerLastName: doc.data().customerLastName,
          email: doc.data().email,
          flightOfStairs: doc.data().flightOfStairs,
          imageURL: doc.data().imageURL,
          largeItems: doc.data().largeItems,
          numberOfBids: doc.data().numberOfBids,
          selectedDate: doc.data().selectedDate,
          selectedTime: doc.data().selectedTime,
          service: doc.data().service,
          specialInstructions: doc.data().specialInstructions,
          state: doc.data().state,
          step: doc.data().step,
          truckLoads: doc.data().truckLoads,
          typeOfTruck: doc.data().typeOfTruck,
          url: doc.data().url,
          zipCode: doc.data().zipCode
        });
      });
      return res.json(projects);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: err.code });
    });
};
exports.postOneProject = (req, res) => {
  if (req.body.body.trim() === "") {
    return res.status(400).json({ body: "Body must not be empty" });
  }

  const newProject = {
    body: req.body.body,
    ...project,
    customerFirstName: profile.firstName,
    customerLastName: profile.lastName,
    customerId: authorId,
    createdAt: new Date(),
    userImage: req.project.imageUrl
  };

  db.collection("projects")
    .add(newProject)
    .then(doc => {
      const resProject = newProject;
      resProject.ProjectId = doc.id;
      res.json(resProject);
    })
    .catch(err => {
      res.status(500).json({ error: "something went wrong" });
      console.error(err);
    });
};

// Fetch one Project
exports.getProject = (req, res) => {
  let projectData = {};
  db.doc(`/projects/${req.params.projectId}`)
    .get()
    .then(doc => {
      if (!doc.exists) {
        return res.status(404).json({ error: "project not found" });
      }
      projectData = doc.data();
      projectData.projectId = doc.id;
      return db
        .collection("comments")
        .orderBy("createdAt", "desc")
        .where("screamId", "==", req.params.screamId)
        .get();
    })
    .then(data => {
      screamData.comments = [];
      data.forEach(doc => {
        screamData.comments.push(doc.data());
      });
      return res.json(screamData);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: err.code });
    });
};

// Comment on a comment
exports.commentOnScream = (req, res) => {
  if (req.body.body.trim() === "")
    return res.status(400).json({ comment: "Must not be empty" });

  const newComment = {
    body: req.body.body,
    createdAt: new Date().toISOString(),
    screamId: req.params.screamId,
    userHandle: req.user.handle,
    userImage: req.user.imageUrl
  };
  console.log(newComment);

  db.doc(`/screams/${req.params.screamId}`)
    .get()
    .then(doc => {
      if (!doc.exists) {
        return res.status(404).json({ error: "Scream not found" });
      }
      return doc.ref.update({ commentCount: doc.data().commentCount + 1 });
    })
    .then(() => {
      return db.collection("comments").add(newComment);
    })
    .then(() => {
      res.json(newComment);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Something went wrong" });
    });
};
// Like a scream
exports.likeScream = (req, res) => {
  const likeDocument = db
    .collection("likes")
    .where("userHandle", "==", req.user.handle)
    .where("screamId", "==", req.params.screamId)
    .limit(1);

  const screamDocument = db.doc(`/screams/${req.params.screamId}`);

  let screamData;

  screamDocument
    .get()
    .then(doc => {
      if (doc.exists) {
        screamData = doc.data();
        screamData.screamId = doc.id;
        return likeDocument.get();
      } else {
        return res.status(404).json({ error: "Scream not found" });
      }
    })
    .then(data => {
      if (data.empty) {
        return db
          .collection("likes")
          .add({
            screamId: req.params.screamId,
            userHandle: req.user.handle
          })
          .then(() => {
            screamData.likeCount++;
            return screamDocument.update({ likeCount: screamData.likeCount });
          })
          .then(() => {
            return res.json(screamData);
          });
      } else {
        return res.status(400).json({ error: "Scream already liked" });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: err.code });
    });
};

exports.unlikeScream = (req, res) => {
  const likeDocument = db
    .collection("likes")
    .where("userHandle", "==", req.user.handle)
    .where("screamId", "==", req.params.screamId)
    .limit(1);

  const screamDocument = db.doc(`/screams/${req.params.screamId}`);

  let screamData;

  screamDocument
    .get()
    .then(doc => {
      if (doc.exists) {
        screamData = doc.data();
        screamData.screamId = doc.id;
        return likeDocument.get();
      } else {
        return res.status(404).json({ error: "Scream not found" });
      }
    })
    .then(data => {
      if (data.empty) {
        return res.status(400).json({ error: "Scream not liked" });
      } else {
        return db
          .doc(`/likes/${data.docs[0].id}`)
          .delete()
          .then(() => {
            screamData.likeCount--;
            return screamDocument.update({ likeCount: screamData.likeCount });
          })
          .then(() => {
            res.json(screamData);
          });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: err.code });
    });
};
// Delete a project
exports.deleteProject = (req, res) => {
  const document = db.doc(`/projects/${req.params.projectId}`);
  document
    .get()
    .then(doc => {
      if (!doc.exists) {
        return res.status(404).json({ error: "Project not found" });
      }
      if (doc.data().userHandle !== req.user.handle) {
        return res.status(403).json({ error: "Unauthorized" });
      } else {
        return document.delete();
      }
    })
    .then(() => {
      res.json({ message: "Project deleted successfully" });
    })
    .catch(err => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
};
