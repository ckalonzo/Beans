import { ACTION } from "./actionTypes/ta-actionTypes";

export function fetchContractorProfileAction(History, Rating) {
  return {
    type: ACTION.FETCH_CONTRACTOR_PROFILE,
    payload: {
      History: History,
      Rating: Rating
    }
  };
}

export function fetchContractorProfileSuccessAction() {
  return {
    type: ACTION.FETCH_CONTRACTOR_PROFILE_SUCCESS
  };
}

export function fetchContractorProfileFailAction() {
  return {
    type: ACTION.FETCH_CONTRACTOR_PROFILE_FAIL
  };
}
