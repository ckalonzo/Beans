import { ACTIONS } from "./actionTypes/ta-actionTypes";

export function fetchBidsAction(bids, uid, items) {
  return dispatch => {
    dispatch({
      type: ACTIONS.BIDS_GROUP.FETCH_BIDS,
      bids,
      uid
    });
  };
}

export function fetchBidsSuccessAction(payload, bids, uid) {
  return dispatch => {
    dispatch({
      type: ACTIONS.BIDS_GROUP.FETCH_BIDS_SUCCESS,
      bids,
      uid,
      payload
    });
  };
}
export function fetchBidsFailAction() {
  return {
    type: ACTIONS.BIDS_GROUP.FETCH_BIDS.FAIL
  };
}
