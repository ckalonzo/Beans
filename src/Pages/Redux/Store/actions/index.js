import { ACTIONS } from "./actionTypes/ta-actionTypes";

export const beginValidatingProfileValue = id => {
  return {
    type: ACTIONS.PROFILE_GROUP.BEGIN_VALIDATING_PROFILE_VALUE,
    payload: {
      id: id
    }
  };
};
