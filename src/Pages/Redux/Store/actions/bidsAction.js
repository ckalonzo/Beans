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

//   return dispatch => {
//     dispatch({
//       type: ACTIONS.BIDS_GROUP.ADD_BIDS,
//       totalBids
//     });
//   };
// }

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
export function addBidsAction(totalBids) {
  console.log("addBidsAction");
  console.log(totalBids);
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("contractorProfile")
      .update({
        bids: totalBids.bids
      })
      .then(() => {
        dispatch({
          type: ACTIONS.BIDS_GROUP.ADD_BID_SUCCESS
        });
      })
      .catch(err => {
        dispatch({
          type: ACTIONS.BIDS_GROUP.ADD_BID_ERR,
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
