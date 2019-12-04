export const fetchCustomerProfile = () => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    return firestore
      .collection("contractorProfile")
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          let items = doc.data();

          /* Make data suitable for rendering */
          items = JSON.stringify(items);
          dispatch({ type: ACTION.FETCH_USER_SUCCESS, payload: items });
          /* Update the components state with query result */
          // this.setState({ items : items })
        });
      });
  };
};
