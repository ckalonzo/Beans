const initState = {
  bids: [
    {id: '1', numberOfBids: '10'}
  ]
};

const SubmitBidReducer = (state = initState, action) => {
  switch (action.type) {
    case "SUBMIT_BID":
      console.log("bid Submitted", action.project);
      return state;
    case "SUBMIT_BID_ERROR":
      console.log("SUBMIT BID Error", action.err);
      return state;
    default:
      return state;
  }
};

export default SubmitBidReducer;
