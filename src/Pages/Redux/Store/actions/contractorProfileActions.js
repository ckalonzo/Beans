import { ACTIONS } from "./actionTypes/ta-actionTypes";

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
