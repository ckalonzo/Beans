import React, { Fragment, Component } from "react";
import { NavLink, Link } from "react-router-dom";
import "../css/Navbar.scss";
import { connect } from "react-redux";
import { signOut } from "../../../../Redux/Store/actions/authActions";
import { fetchBids } from "../../../../Redux/Store/actions/bidsAction";
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
    counter: state.cart.counter,
    auth: state.firebase.auth,
    authError: state.auth,
    bids: state.bids
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut()),
    addToCart: (id, counter) => {
      dispatch(addToCart(id, counter));
    },
    fetchBids: uid => dispatch(fetchBids(uid))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProviderSignedInLinkstest);
