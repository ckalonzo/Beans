import { ACTIONS } from "./../actions/actionTypes/ta-actionTypes";

const initialState = {};

const BidsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.BIDS_GROUP.FETCH_BIDS: {
    }

    default:
      return state;
  }
};

export default BidsReducer;
