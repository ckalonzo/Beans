import React, { Component } from "react";
import Logo from "../Component/logo";
import ProviderSignedInLinkstest from "./ProviderSignedInLinkstest";
import SignedOutLinkstest from "./SignedOutLinkstest";
import { connect } from "react-redux";
import "../css/Navbar.scss";

class Layout2 extends Component {
  render() {
    const { auth, profile } = this.props;
    // display links if user is signed in or out
    const links = auth.uid ? (
      <ProviderSignedInLinkstest profile={profile} />
    ) : (
      <SignedOutLinkstest />
    );
    return (
      <div class="menu-area nav-section">
        <div class="top-menu-area">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12">
                <div class="menu-fullwidth">
                  <div class="logo-wrapper">
                    <Logo />
                    <div class="logo logo-top">
                      <a href="index.html">
                        <img
                          src="img/logo.png"
                          alt="logo image"
                          class="img-fluid"
                        />
                      </a>
                    </div>
                  </div>
                  {links}
                  {/* NAV COMPONENT */}
                </div>
              </div>
            </div>
            {/* <!-- end /.row --> */}
          </div>
          {/* <!-- end /.container --> */}
        </div>
        {/* <!-- end  --> */}
      </div>
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
export default connect(mapStateToProps)(Layout2);
