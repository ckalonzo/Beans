import { ACTIONS } from "./actionTypes/ta-actionTypes";

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
    const uid = getState().firebase.auth.uid;
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

export const addCustomerProfileAPI = () => {};

export const addContractorProfileAPI = () => {};

export const addBidsAPI = () => {};

export const addNotificationAPI = () => {};

export const addAllJobsAPI = () => {};

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
