export const deleteJob = (id) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('projects').delete({
            ...id
        }).then(() => {
            dispatch({ type: 'DELETE_JOB', id: id });
        }).catch((err) => {
            dispatch({ type: 'DELETE_JOB_ERROR', err });
        })
        
    }   
};
