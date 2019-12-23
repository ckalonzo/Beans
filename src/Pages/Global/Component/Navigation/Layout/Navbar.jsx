import React from "react";
import { NavLink, Link } from "react-router-dom";
import ProviderSignedInLinks from "./ProviderSignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";
import Logo from "../Component/logo";
import NotificationHeader from "../Component/notificationHeader";
import BidsHeader from "../Component/bidsHeader";
import Message from "../Component/message";
import ShoppingCartHeader from "../Component/shoppingCartHeader";
import SideMenuDesktop from "../Component/sideMenuDesktop";
import SideMenuMobile from "../Component/sideMenuMobile";
const Navbar = props => {
  const { auth, profile } = props;
  // display links if user is signed in or out
  const links = auth.uid ? (
    <ProviderSignedInLinks profile={profile} />
  ) : (
    <SignedOutLinks />
  );
  return (
    <div class="menu-area nav-section">
      <div class="top-menu-area sticky-top ">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12 -ta_px-0">
              <div class=" menu-fullwidth">
                <div class="logo-wrapper ">
                  <div class="logo">
                    <Logo />
                  </div>
                </div>
                {links}
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
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    ctr: state.counter
  };
};
export default connect(mapStateToProps)(Navbar);
