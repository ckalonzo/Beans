import { ACTIONS } from "./../actions/actionTypes/ta-actionTypes";
import { fetchContractorProfileAction } from "../actions/contractorProfileActions";
import { fetchContractorProfileAPI } from "../actions/FirebaseApiCalls";

const initialState = {};

export default function contractorProfileReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.CONTRACTOR_GROUP.FETCH_CONTRACTOR_PROFILE: {
      fetchContractorProfileAPI()
        .then(json => action.asyncDispatch(fetchContractorProfileAction(json)))
        .catch();
    }
    case ACTIONS.CONTRACTOR_GROUP.FETCH_CONTRACTOR_PROFILE_SUCCESS: {
      return {
        ...state
      };
    }
    case ACTIONS.CONTRACTOR_GROUP.FETCH_CONTRACTOR_PROFILE_FAIL: {
      return {
        ...state
      };
    }
    default:
      return state;
  }
}
