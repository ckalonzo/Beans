import { ACTION } from "./../actions/actionTypes/ta-actionTypes";

const initialState = {
  bids: 23
};

const BidsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.FETCH_BIDS:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default BidsReducer;
