const initState = {
  bkcheck_Completed: false,
  profile_Completed: false
};

const EnrollmentReducer = (state = initState, action, type, payload) => {
  switch (action.type) {
    case "CREATE_PROFILE":
      return {
        ...state
      };
    default:
      return state;
  }
};

export default EnrollmentReducer;
