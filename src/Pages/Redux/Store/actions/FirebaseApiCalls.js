import { ACTIONS } from "./actionTypes/ta-actionTypes";

export const addCustomerProfileAPI = () => {};

export const addContractorProfileAPI = newUser => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(resp => {
        return firestore
          .collection("contractorProfile")
          .doc(resp.user.uid)
          .set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            zipCode: newUser.zipCode,
            initials: newUser.firstName[0] + newUser.lastName[0],
            Rating: "0",
            Reviews: [],
            Skills: [],
            activeMember: true,
            bio: "",
            city: "",
            companyName: "",
            numberOfJobs: "",
            state: "",
            typeOfJobs: [],
            years: ""
            // uid: firebase.auth.uid
          });
      })
      .then(() => {
        dispatch({
          type: ACTIONS.CONTRACTOR_GROUP.ADD_CONTRACTOR_PROFILE_SUCCESS
        });
      })
      .catch(err => {
        dispatch({
          type: ACTIONS.CONTRACTOR_GROUP.ADD_CONTRACTOR_PROFILE_FAIL,
          err
        });
      });
  };
};

export const addBidsAPI = () => {};

export const addNotificationAPI = () => {};

export const addAllJobsAPI = () => {};

export const fetchCustomerProfileAPI = () => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const uid = getState().firebase.auth.uid;
    return firestore
      .collection("customerProfile")
      .doc(uid)
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          let items = doc.data();

          //   /* Make data suitable for rendering */
          items = JSON.stringify(items);
          dispatch({
            type: ACTIONS.PROFILE_GROUP.FETCH_CUSTOMER_PROFILE,
            payload: items
          });
          /* Update the components state with query result */
        });
      });
  };
};

export const fetchContractorProfileAPI = () => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const uid = getState().firebase.auth.uid;
    return firestore
      .collection("contractorProfile")
      .doc(uid)
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          let items = doc.data();

          //   /* Make data suitable for rendering */
          items = JSON.stringify(items);
          dispatch({
            type: ACTIONS.CONTRACTOR_GROUP.FETCH_CONTRACTOR_PROFILE,
            payload: items
          });
          /* Update the components state with query result */
        });
      });
  };
};

export const fetchBidsAPI = () => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const uid = getState().firebase.auth.uid;
    return firestore
      .collection("Bids")
      .doc(uid)
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          let items = doc.data();

          //   /* Make data suitable for rendering */
          items = JSON.stringify(items);
          dispatch({ type: ACTIONS.BIDS_GROUP.FETCH_BIDS, payload: items });
          /* Update the components state with query result */
        });
      });
  };
};

export const fetchNotificationAPI = () => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const uid = getState().firebase.auth.uid;
    return firestore
      .collection("notifications")
      .doc(uid)
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          let items = doc.data();

          //   /* Make data suitable for rendering */
          items = JSON.stringify(items);
          dispatch({
            type: ACTIONS.NOTIFICATIONS.FETCH_NOTIFICATIONS,
            payload: items
          });
          /* Update the components state with query result */
        });
      });
  };
};

export const fetchAllJobsAPI = () => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    return firestore
      .collection("projects")
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          let items = doc.data();

          //   /* Make data suitable for rendering */
          items = JSON.stringify(items);
          dispatch({
            type: ACTIONS.PROJECTS_GROUP.FETCH_PROJECTS,
            payload: items
          });
          /* Update the components state with query result */
        });
      });
  };
};

export const fetchMyJobsAPI = () => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const uid = getState().firebase.auth.uid;
    return firestore
      .collection("projects")
      .doc(uid)
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          let items = doc.data();

          //   /* Make data suitable for rendering */
          items = JSON.stringify(items);
          dispatch({
            type: ACTIONS.PROJECTS_GROUP.FETCH_MY_PROJECTS,
            payload: items
          });
          /* Update the components state with query result */
        });
      });
  };
};

export const updateUser = (uid, userData) => {
  console.log(uid, userData);
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    //console.log(firestore)
    firestore
      .collection("users")
      .doc(uid)
      .set({
        firstName: userData.firstName,
        lastName: userData.lastName,
        initials: userData.firstName[0] + userData.lastName[0],
        email: userData.email,
        phone: userData.phone,
        address1: userData.address1,
        address2: userData.address2,
        city: userData.city,
        state: userData.state,
        zip: userData.zip,
        paymentType: "50"
      })
      .then(res => {
        console.log(res);
        dispatch({
          type: ACTIONS.CONTRACTOR_GROUP.UPDATE_FULL_CONTRACTOR_PROFILE
        });
      })
      .catch(err => {
        dispatch({ type: "UPDATE_PROFILE_ERROR", err });
      });
  };
};

export const customerSignUpAPI = newCustomer => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    firebase
      .auth()
      .createUserWithEmailAndPassword(newCustomer.email, newCustomer.password)
      .then(resp => {
        return firestore
          .collection("CustomerProfile")
          .doc(resp.user.uid)
          .set({
            firstName: newCustomer.firstName,
            lastName: newCustomer.lastName,
            zipCode: newCustomer.zipCode,
            initials: newCustomer.firstName[0] + newCustomer.lastName[0]
          })
          .then(() => {
            dispatch({ type: ACTIONS.PROFILE_GROUP.CUSTOMER_SIGNUP_START });
          })
          .then(() => {
            dispatch({ type: ACTIONS.PROFILE_GROUP.CUSTOMER_SIGNUP_SUCCESS });
          })
          .catch(err => {
            dispatch({
              type: "ACTIONS.PROFILE_GROUP.CUSTOMER_SIGNUP_FAIL",
              err
            });
          });
      });
  };
};

export const Contractor_LoginAPI = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};
export const signOutAPI = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGNOUT_SUCCESS" });
      });
  };
};
