export const CreateProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            customerFirstName: 'Brandon',
            customerLastName: 'Stinson',
            customerId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERR', err });
        })



    }

}; 