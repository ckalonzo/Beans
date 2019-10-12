import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProviderSignedInLinks from "./ProviderSignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";
// import {
//   removeItem,
//   addQuantity,
//   subtractQuantity
// } from "../../Redux/Store/actions/cartActions";
class Navbar extends Component {
  render() {
    const { auth, profile, ctr } = this.props;
    // display links if user is signed in or out
    const links = auth.uid ? (
      <ProviderSignedInLinks profile={profile} />
    ) : (
      <SignedOutLinks />
    );
    return (
      <nav className="navbar navbar-light sticky-top navbar-expand-md bg-faded justify-content-center nav-section hover-underline-menu">
        <div className="container">
          <Link to="/" className="navbar-brand d-flex w-50 mr-auto" />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsingNavbar3"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="navbar-collapse collapse w-100"
            id="collapsingNavbar3"
          >
            {links}
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    ctr: state.counter
  };
};

export default connect(mapStateToProps)(Navbar);
