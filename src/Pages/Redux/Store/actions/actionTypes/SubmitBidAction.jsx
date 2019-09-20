export const SubmitBids = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    const numberofBids = getState()
      .firebase.firestore.collection("projects")
      .update({
        ...project,
        customerFirstName: profile.firstName,
        customerLastName: profile.lastName,
        customerId: authorId,
        numberofBids: numberOfBids,
        price: price,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "SUBMIT_BID", project });
      })
      .catch(err => {
        dispatch({ type: "SUBMIT_BIDS_ERR", err });
      });
  };
};
