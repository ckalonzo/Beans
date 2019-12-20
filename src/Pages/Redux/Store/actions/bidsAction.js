import { ACTIONS } from "./actionTypes/ta-actionTypes";

export function fetchBids() {
  return {
    type: ACTIONS.BIDS_GROUP.FETCH_BIDS
  };
}

export function fetchBidsSuccess() {
  return {
    type: ACTIONS.BIDS_GROUP.FETCH_BIDS_SUCCESS
  };
}
export function fetchBidsFail() {
  return {
    type: ACTIONS.BIDS_GROUP.FETCH_BIDS.FAIL
  };
}
