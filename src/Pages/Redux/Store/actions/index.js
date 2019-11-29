import { PROFILE_GROUP } from "./actionTypes/ta-actionTypes";

export const updateProfile = (id, value) => {
  console.log("updating profile value");
  return {
    type: PROFILE_GROUP.UPDATE_PROFILE_VALUE,
    payload: {
      id: id,
      value: value
    }
  };
};

export const beginValidatingProfileValue = id => {
  return {
    type: PROFILE_GROUP.BEGIN_VALIDATING_PROFILE_VALUE,
    payload: {
      id: id
    }
  };
};
