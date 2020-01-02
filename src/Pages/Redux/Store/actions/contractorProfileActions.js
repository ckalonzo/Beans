import { ACTIONS } from "./actionTypes/ta-actionTypes";

export function addContractorProfileAction(payload) {
  console.log("addContractorProfileAction");
  console.log(payload);
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("contractorProfile")
      .add({
        firstName: payload.firstName,
        lastName: payload.lastName,
        zipCode: payload.zipCode,
        email: payload.email,
        phone: payload.phone,
        address: payload.address,
        bids: payload.bids,
        Rating: payload.Rating,
        Reviews: payload.Reviews,
        Skills: payload.Skills,
        activeMember: true,
        bio: payload.bio,
        city: payload.city,
        companyName: payload.companyName,
        numberOfJobs: payload.numberOfJobs,
        state: payload.state,
        typeOfJobs: payload.typeOfJobs,
        years: payload.years,
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
