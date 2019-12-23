import { ACTIONS } from "./../actions/actionTypes/ta-actionTypes";

const initState = {
  authError: null,
  resetPassword: false,
  loginSuccess: false
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTIONS.EMAIL.RESET_EMAIL_LINK_SENT:
      return {
        ...state,
        authError: action.authError,
        resetPassword: true
      };
    case ACTIONS.EMAIL.RESET_EMAIL_LINK_SENT_FAIL:
      return {
        ...state,
        authError: action.authError
      };
    case ACTIONS.PROFILE_GROUP.LOGIN_ERROR:
      console.log("login error");
      return {
        ...state,
        authError: "Login failed"
      };
    case ACTIONS.PROFILE_GROUP.LOGIN_SUCCESS:
      console.log("login success");
      return {
        authError: null
      };
    case "SIGNOUT_SUCCESS":
      console.log("signout success");
      return state;

    case "SIGNUP_SUCCESS":
      console.log("signup success");
      return {
        ...state,
        authError: null
      };

    case "SIGNUP_ERROR":
      console.log("signup error");
      return {
        ...state,
        authError: action.err.message
      };

    default:
      return state;
  }
};

export default authReducer;
