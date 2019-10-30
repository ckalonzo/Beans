import React from "react";
import "../css/Navbar.scss";
import { Link } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <ul className="navbar-nav w-100 justify-content-center nav-section">
      <li className="nav-item dropdown">
        <Link
          className="nav-link chg-text moveline dropdown-toggle"
          id="dropdown08"
          to="#"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Customer
        </Link>
        <div className="dropdown-menu rmv-border" aria-labelledby="dropdown08">
          <Link className="dropdown-item chg-text moveline" to="/SignUp/SignUp">
            Sign Up
          </Link>
          <Link
            className="dropdown-item chg-text moveline"
            to="/CustomerLogin/CustomerLogin"
          >
            LogIn
          </Link>
        </div>
      </li>
      <li className="nav-item">
        <Link
          className="nav-link chg-text moveline"
          to="/Membership/Membership"
        >
          Membership
        </Link>
      </li>
      <li className="nav-item dropdown">
        <Link
          className="nav-link  chg-text moveline dropdown-toggle"
          to="#"
          id="dropdown09"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Contractor
        </Link>
        <div className="dropdown-menu rmv-border" aria-labelledby="dropdown09">
          <Link
            className="dropdown-item chg-text moveline"
            to="/SignUp/Contractor-Create-Account"
          >
            Sign Up
          </Link>
          <Link
            className="dropdown-item chg-text moveline"
            to="/ContractorLogin/ContractorLogin"
          >
            LogIn
          </Link>
        </div>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
