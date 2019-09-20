export const deleteJob = (updatedProjects) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.data.collection('projects').delete({
            ...updatedProjects
        }).then(() => {
            dispatch({ type: 'DELETE_JOB', updatedProjects: updatedProjects });
        }).catch((err) => {
            dispatch({ type: 'DELETE_JOB_ERROR', err });
        })
        
    }   
};
