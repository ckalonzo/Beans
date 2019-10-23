const initState = {
  test: ""
};

const ProfileReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROFILE":
      console.log("created profile", action.profile);
      return state;
    case "CREATE_PROFILE_ERR":
      console.log("created profile ERR", action.err);
      return state;
    default:
      return state;
  }
};

export default ProfileReducer;
