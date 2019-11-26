import React, { Component } from "react";
import Logo from "../Component/logo";
import ProviderSignedInLinks from "./ProviderSignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";
class Layout2 extends Component {
  render() {
    const { auth, profile } = this.props;
    // display links if user is signed in or out
    const links = auth.uid ? (
      <ProviderSignedInLinks profile={profile} />
    ) : (
      <SignedOutLinks />
    );
    return (
      <div class="menu-area">
        <div class="top-menu-area">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12">
                <div class="menu-fullwidth">
                  {/* logo component */}
                  <Logo />
                  <div class="menu-container">
                    <div class="d_menu">
                      <nav class="navbar navbar-expand-lg mainmenu__menu">
                        <button
                          class="navbar-toggler"
                          type="button"
                          data-toggle="collapse"
                          data-target="#bs-example-navbar-collapse-1"
                          aria-controls="bs-example-navbar-collapse-1"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                        >
                          <span class="navbar-toggler-icon icon-menu"></span>
                        </button>
                        {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                        <div
                          class="collapse navbar-collapse"
                          id="bs-example-navbar-collapse-1"
                        >
                          {/*  */}
                          {links}
                        </div>
                        {/* <!-- /.navbar-collapse --> */}
                      </nav>
                    </div>
                  </div>
                  {/* <!-- end of nav  --> */}
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
