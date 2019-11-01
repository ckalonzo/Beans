import React from "react";
import { NavLink, Link } from "react-router-dom";
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
        {/* <li className="nav-item">
          <NavLink
            className="nav-link chg-text moveline"
            to="/Membership/Membership"
          >
            Notifications
          </NavLink>
        </li> */}
        <li className="nav-item">
          <NavLink
            className="nav-link chg-text moveline"
            to="/Membership/Membership"
          >
            Membership
          </NavLink>
        </li>
      </ul>
      <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
        <li>
          <NavLink to="/Membership/component/cart">
            <ul className="navbar-right">
              <li className="ovr-chartContainer">
                <a to="#" className="ta-shoppingChart" id="cart">
                  <span
                    className="fa-stack fa-2x has-badge"
                    data-count={props.counter}
                  >
                    <i class="fas fa-shopping-basket"></i>
                    {/* <i className="fa fa-circle fa-stack-2x" /> */}
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
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <Link
              className="dropdown-item nav-link"
              to="/Profile/Layout/Profile"
            >
              Profile
            </Link>
            <Link
              className="dropdown-item nav-link chg-text"
              to="#"
              onClick={props.signOut}
            >
              Log Out
            </Link>
            <Link className="dropdown-item nav-link" to="#">
              Something else here
            </Link>
          </div>
        </li>
      </ul>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    counter: state.cart.counter
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
