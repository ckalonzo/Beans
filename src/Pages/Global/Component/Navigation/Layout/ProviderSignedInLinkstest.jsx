import React, { Fragment, Component } from "react";
import { NavLink, Link } from "react-router-dom";
import "../css/Navbar.scss";
import { connect } from "react-redux";
import { signOutAction } from "../../../../Redux/Store/actions/authActions";
import { fetchBidsAction } from "../../../../Redux/Store/actions/bidsAction";
import { addToCart } from "../../../../Redux/Store/actions/cartActions";
import firebase from "../../../../../Config/Firebase";

class ProviderSignedInLinkstest extends Component {
  render() {
    return <Fragment></Fragment>;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    counter: state.cartReducer.counter,
    auth: state.firebase.auth,
    authError: state.auth,
    bids: state.bids
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signOutAction: () => dispatch(signOutAction()),
    addToCart: (id, counter) => {
      dispatch(addToCart(id, counter));
    },
    fetchBidsAction: uid => dispatch(fetchBidsAction(uid))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProviderSignedInLinkstest);
