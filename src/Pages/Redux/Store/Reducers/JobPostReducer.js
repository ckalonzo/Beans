const initState = {

}

const JobPostReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log("post created", action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log("CREATE project Error", action.err);
            return state;
        default:
            return state;
    }
}


export default JobPostReducer;