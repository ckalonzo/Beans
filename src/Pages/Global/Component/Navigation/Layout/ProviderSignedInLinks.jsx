import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.scss";
import { connect } from "react-redux";
import { signOut } from "../../../../Redux/Store/actions/authActions";
import { addToCart } from "../../../../Redux/Store/actions/cartActions";

const ProviderSignedInLinks = props => {
  return (
    <React.Fragment>
      <ul className="navbar-nav w-100 justify-content-center nav-section">
        <li className="nav-item">
          <NavLink
            className="nav-link chg-text moveline"
            to="../../../../108_Browse/ProjectDashboard"
          >
            Browse
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link chg-text moveline"
            to="/105_Dashboard/Dashboard"
          >
            Dashboard
          </NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink
            className="nav-link chg-text moveline"
            to="/103_Membership/Membership"
          >
            Notifications
          </NavLink>
        </li> */}
        <li className="nav-item">
          <NavLink
            className="nav-link chg-text moveline"
            to="/103_Membership/Membership"
          >
            Membership
          </NavLink>
        </li>
      </ul>
      <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
        <li>
          <NavLink to="/103_Membership/component/cart">
            <ul className="navbar-right">
              <li className="ovr-chartContainer">
                <a href="#" className="ta-shoppingChart" id="cart">
                  <span className="fa-stack fa-1x has-badge" data-count="5">
                    {/* <i className="fa fa-circle fa-stack-2x" /> */}
                    <i className="fas fa-shopping-cart fa-stack-2x " />
                  </span>
                </a>
              </li>
            </ul>
          </NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink
            to="#"
            className="nav-link avatarlink dropdown-toggle nav-avatar"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="false"
            aria-expanded="false"
          >
            {props.profile.initials}
          </NavLink>
          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a className="dropdown-item nav-link" href="/Profile/Layout/Profile">
              Profile
            </a>
            <a
              className="dropdown-item nav-link chg-text"
              href="#"
              onClick={props.signOut}
            >
              Log Out
            </a>
            <a className="dropdown-item nav-link" href="#">
              Something else here
            </a>
          </div>
        </li>
      </ul>
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut()),
    addToCart: id => {
      dispatch(addToCart(id));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ProviderSignedInLinks);
