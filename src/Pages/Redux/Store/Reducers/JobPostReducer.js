const initState = {
  error: null,
  loading: false,
  deleteProject: {
    error: null,
    loading: false
  }
};

const JobPostReducer = (state = initState, action, type, payload) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("post created", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("CREATE project Error", action.err);
      return state;
    case "REMOVE_PROJECT":
      console.log("Removed Project");
      return state;
    case "REMOVE_PROJECT_ERROR":
      console.log("Removed Project Error", action.err);
      return state;
    case "DELETE_PROJECT_START":
      return {
        ...state,
        deleteProject: { ...state.deleteProject, loading: true }
      };

    case "DELETE_PROJECT_SUCCESS":
      return {
        ...state,
        deleteProject: { ...state.deleteProject, loading: false, error: false }
      };

    case "DELETE_PROJECT_FAIL":
      return {
        ...state,
        deleteProject: {
          ...state.deleteProject,
          loading: false,
          error: payload
        }
      };
    default:
      return state;
  }
};

export default JobPostReducer;
