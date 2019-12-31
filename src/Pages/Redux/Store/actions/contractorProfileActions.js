import { ACTIONS } from "./actionTypes/ta-actionTypes";

export function addContractorProfileAction(newUser) {
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
            email: "",
            phone: "",
            address: "",
            bids: "",
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
}

export function addContractorProfileSuccessAction() {
  return {
    type: ACTIONS.CONTRACTOR_GROUP.ADD_CONTRACTOR_PROFILE_SUCCESS
  };
}

export function addContractorProfileFailAction() {
  return {
    type: ACTIONS.CONTRACTOR_GROUP.ADD_CONTRACTOR_PROFILE_FAIL
  };
}
export function fetchContractorProfileAction() {
  return {
    type: ACTIONS.CONTRACTOR_GROUP.FETCH_CONTRACTOR_PROFILE
  };
}

export function fetchContractorProfileSuccessAction() {
  return {
    type: ACTIONS.CONTRACTOR_GROUP.FETCH_CONTRACTOR_PROFILE_SUCCESS
  };
}

export function fetchContractorProfileFailAction() {
  return {
    type: ACTIONS.CONTRACTOR_GROUP.FETCH_CONTRACTOR_PROFILE_FAIL
  };
}

export const submitProfile = () => {
  console.log("submitting profile ");
  return {
    type: ACTIONS.PROFILE_GROUP.SUBMIT_PROFILE
  };
};
export const updateProfile = (id, value) => {
  console.log("updating profile value");
  return {
    type: ACTIONS.CONTRACTOR_GROUP.UPDATE_FULL_CONTRACTOR_PROFILE,
    payload: {
      id: id,
      value: value
    }
  };
};
