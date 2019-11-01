import * as actionTypes from "../actions/actionTypes/ta-actionTypes";

const initState = {
  userData: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    rating: "",
    reviews: [],
    skills: [],
    activeMember: "",
    bio: "",
    numberOfJobs: "",
    typeOfJobs: [],
    years: "",
    bkcheck: false,
    basicinfochk: false,
    companyName: "",
    history: "",
    bids: ""
  }
};

const ProfileReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_PROFILE_START:
      return {};
    case actionTypes.CREATE_PROFILE_ERR:
      console.log("created profile ERR", action.err);
      return state;
    case actionTypes.CREATE_PROFILE_SUCCESS:
      const createProfileSuccess = action.createProfile;
      return {
        ...state,
        [createProfileSuccess.firstName]: createProfileSuccess.value
      };
    default:
      return state;
  }
};

export default ProfileReducer;
