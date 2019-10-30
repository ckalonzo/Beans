const initState = {

}

const deleteJobReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_PROJECT':
            console.log("post deleted", action.project);
            return state;
        case 'DELETE_PROJECT_ERROR':
            console.log("DELETE project Error", action.err);
            return state;
        default:
            return state;
    }
}


export default deleteJobReducer;