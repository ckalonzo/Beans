export const deleteJob = (deleteProjects) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('projects').doc("id").delete()
            
            .then(() => {
            dispatch({ type: 'DELETE_JOB', deleteProjects: deleteProjects });
        }).catch((err) => {
            dispatch({ type: 'DELETE_JOB_ERROR', err });
        })
        
    }   
};
