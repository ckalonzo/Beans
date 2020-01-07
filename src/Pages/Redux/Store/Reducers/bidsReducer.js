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
    case ACTIONS.BIDS_GROUP.ADD_BID_SUCCESS: {
      return {
        ...state
      };
    }
    case ACTIONS.BIDS_GROUP.ADD_BID_ERR: {
      return {
        ...state
      };
    }

    default:
      return state;
  }
};

export default BidsReducer;
