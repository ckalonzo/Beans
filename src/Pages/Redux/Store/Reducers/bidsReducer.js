import { ACTIONS } from "./../actions/actionTypes/ta-actionTypes";
import {
  fetchBidsSuccessAction,
  fetchBidsFailAction
} from "../actions/bidsAction";
import { fetchBidsAPI } from "../actions/FirebaseApiCalls";

const initialState = {};

const BidsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.BIDS_GROUP.FETCH_BIDS: {
      fetchBidsAPI(action.bids, action.uid)
        .then(json =>
          action.asyncDispatch(
            fetchBidsSuccessAction(json.data, action.bids, action.uid)
          )
        )
        .catch(err => action.asyncDispatch(fetchBidsFailAction(err)));
    }

    default:
      return state;
  }
};

export default BidsReducer;
