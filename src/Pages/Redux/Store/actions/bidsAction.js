import { ACTION } from "./actionTypes/ta-actionTypes";
export const fetchBids = () => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const bids = document.querySelector("#bids");

    function renderBids(doc) {}
    return firestore
      .collection("Bids")
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          let bids = doc.data().bids;

          //   /* Make data suitable for rendering */
          bids = JSON.stringify(bids);
          dispatch({ type: ACTION.FETCH_BIDS, payload: bids });
          /* Update the components state with query result */
          // this.setState({ bids : bids })
        });
      });
  };
};
