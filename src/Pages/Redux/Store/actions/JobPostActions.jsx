export const CreateProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('projects').add({
            ...project,
            customerFirstName: profile.firstName,
            customerLastName: profile.lastName,
            customerId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERR', err });
        })



    }

}; 