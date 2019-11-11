import { UPDATE_PROFILE_SUCCESS } from "./actionTypes/ta-actionTypes";

export const createProfile = (uid, userdata) => {
  // console.log(uid, userData);
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("contractorProfile")
      .doc(uid)
      .add({
        // firstName: userData.firstName,
        // lastName: userData.lastName,
        // initials: userData.firstName[0] + userData.lastName[0],
        // email: userData.email,
        // phone: userData.phone,
        // address1: userData.address1,
        // address2: userData.address2,
        // city: userData.city,
        // state: userData.state,
        // zip: userData.zip,
        // bio: userdata.bio,
        // companyName: userdata.companyName
      })
      .then(() => {
        dispatch({ type: "CREATE_PROFILE_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROFILE_ERROR", err });
      });
  };
};

export const updateProfile = (uid, userData) => {
  console.log(uid, userData);
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    //console.log(firestore)
    firestore
      .collection("contractorProfile")
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
        bio: userData.bio,
        companyName: userData.companyName
      })
      .then(res => {
        console.log(res);
        dispatch({ type: "UPDATE_PROFILE_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "UPDATE_PROFILE_ERROR", err });
      });
  };
};
export const userDataCollection = userDataCollection => {
  return {
    type: UPDATE_PROFILE_SUCCESS,
    payload: userDataCollection
  };
};
