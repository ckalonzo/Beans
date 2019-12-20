import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../css/Navbar.scss";
import { connect } from "react-redux";
import { signOut } from "../../../../Redux/Store/actions/authActions";
import { addToCart } from "../../../../Redux/Store/actions/cartActions";
import NotificationHeader from "../Component/notificationHeader";
import BidsHeader from "../Component/bidsHeader";
import Message from "../Component/message";
import ShoppingCartHeader from "../Component/shoppingCartHeader";
import SideMenuDesktop from "../Component/sideMenuDesktop";
import SideMenuMobile from "../Component/sideMenuMobile";

const ProviderSignedInLinks = props => {
  return (
    <React.Fragment>
      <div class="menu-container">
        <div class="d_menu">
          <nav class="navbar navbar-expand-lg mainmenu__menu">
            <button
              class="navbar-toggler collapsed"
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
              class="navbar-collapse collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="navbar-nav w-100 justify-content-center nav-section">
                <li className="nav-item">
                  <NavLink
                    className="nav-link chg-text moveline"
                    to="../../../../Browse/ProjectDashboard"
                  >
                    Browse
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link chg-text moveline"
                    to="/Dashboard/ContractorDashboard"
                  >
                    Dashboard
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className="nav-link chg-text moveline"
                    to="/Membership/Membership"
                  >
                    Membership
                  </NavLink>
                </li>
              </ul>
            </div>
            {/* <!-- /.navbar-collapse --> */}
          </nav>
        </div>
      </div>

      <div class="author-menu">
        {/* <!-- start .author-area --> */}
        <div class="author-area">
          <div class="author__notification_area">
            <ul>
              <NotificationHeader />
              <BidsHeader />
              <Message />
              <ShoppingCartHeader />
            </ul>
          </div>
          {/* <!--start .author-author__info--> */}
          <SideMenuDesktop />
          {/* <!--end /.author-author__info--> */}
        </div>
        {/* <!-- end .author-area --> */}

        {/* <!-- author area restructured for mobile --> */}
        <SideMenuMobile />
        {/* <!-- end /.mobile_content --> */}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    counter: state.cartReducer.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut()),
    addToCart: (id, counter) => {
      dispatch(addToCart(id, counter));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProviderSignedInLinks);
