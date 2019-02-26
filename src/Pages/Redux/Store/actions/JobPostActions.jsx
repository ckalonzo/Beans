export const CreatePost = (jobs) => {
    return (dispatch, getState) => {
        // make async call to database
        dispatch({ type: 'CREATE_POST', jobs })


    }

}; 