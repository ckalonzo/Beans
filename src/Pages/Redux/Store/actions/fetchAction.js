import { ACTION } from "./actionTypes/ta-actionTypes";

export function fetchCustomerProfile() {
  return {
    type: ACTION.FETCH_CUSTOMER_PROFILE
  };
}

export function fetchCustomerProfileSuccess() {
  return {
    type: ACTION.FETCH_CUSTOMER_PROFILE_SUCCESS
  };
}
export function fetchCustomerProfileFail() {
  return {
    type: ACTION.FETCH_CUSTOMER_PROFILE_FAIL,
    error: error
  };
}
