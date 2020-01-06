import { ACTIONS } from "./actionTypes/ta-actionTypes";

export function addContractorProfileAction(newContractor) {
  console.log("addContractorProfileAction");
  console.log(newContractor);
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("contractorProfile")
      .add({
        firstName: newContractor.firstName,
        lastName: newContractor.lastName,
        zipCode: newContractor.zipCode,
        initials: newContractor.firstName[0] + newContractor.lastName[0],
        email: newContractor.email,
        address1: newContractor.address1,
        address2: newContractor.address2,
        phoneNumber: newContractor.phoneNumber,
        bids: newContractor.bids,
        state: newContractor.state,
        Rating: null,
        Reviews: [],
        Skills: [],
        activeMember: true,
        bio: newContractor.bio,
        city: newContractor.city,
        companyName: newContractor.companyName,
        numberOfJobs: 0,
        state: newContractor.state,
        typeOfJobs: newContractor.typeOfJobs,
        years: 0,
        contractorUID: authorId,
        createdAt: new Date()
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
  console.log("action");
  return {
    type: ACTIONS.CONTRACTOR_GROUP.FETCH_CONTRACTOR_PROFILE
  };
}

export function fetchContractorProfileSuccessAction(items) {
  return {
    type: ACTIONS.CONTRACTOR_GROUP.FETCH_CONTRACTOR_PROFILE_SUCCESS,
    payload: items
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
export const updateProfileValue = (id, value) => {
  console.log("updating profile value");
  return {
    type: ACTIONS.CONTRACTOR_GROUP.UPDATE_CONTRACTOR_PROFILE_VALUE,
    payload: {
      id: id,
      value: value
    }
  };
};
