const initState = {

}

const deleteJobReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log("post created", action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log("CREATE project Error", action.err);
            return state;
        case 'REMOVE_PROJECT':
            console.log('Removed Project')
            return state
        case 'REMOVE_PROJECT_ERROR':
            console.log('Removed Project Error', action.err)
            return state
        default:
            return state;
    }
}


export default JobPostReducer;