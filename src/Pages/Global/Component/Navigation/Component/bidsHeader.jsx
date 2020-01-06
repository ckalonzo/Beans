import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { fetchBidsAction } from "../../../../Redux/Store/actions/bidsAction";
import firebase from "../../../../../Config/Firebase";

class BidsHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bids: null
    };
  }
  componentDidMount() {
    // this.props.fetchBidsAction();
    firebase
      .firestore()
      .collection("Bids") //pointing to bids collection
      .get() // getting/fetching data
      .then(snapshot => {
        const bids = []; //set array to get bids
        snapshot.forEach(doc => {
          const data = doc.data().bids; //get data from each document in the bids collection
          bids.push(data); // once I have data push it to the bids array
        });
        this.setState({ bids: bids });
        console.log(bids);
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <Fragment>
        <li class="has_dropdown ticket">
          <div class="icon_wrap">
            <span class="fas fa-ticket-alt"></span>
            <span class="notification_count msg " id="bids">
              {" "}
              {this.state.bids}
            </span>
          </div>

          <div class="dropdown messaging--dropdown">
            <div class="dropdown_module_header">
              <h6>My Bids</h6>
              <span>{this.state.bids}</span>
            </div>
          </div>
        </li>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    authError: state.auth,
    bids: state.bids
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchBidsAction: uid => dispatch(fetchBidsAction(uid))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BidsHeader);
