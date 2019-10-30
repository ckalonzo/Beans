export const createProfile = (profile) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('contractorProfile').add({
  ...profile
})
      .then(() => {
        dispatch({ type: "UPDATED-PROFILE_SUCCESS", profile });
      })
      .catch(err => {
        dispatch({ type: "UPDATED-PROFILE_ERROR", err });
      });
  };
};
