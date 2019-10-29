import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";

import React from "react";

const CustomerSignedInLinks = () => {
  return (
    <div>
      <div className="container">
        <nav className="navbar navbar-expand-md navbar-dark bg-light hover-underline-menu">
          <div className="navbar-collapse collapse" id="collapsingNavbar">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link moveline dropdown-toggle"
                  to="#"
                  id="dropdown08"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Customer
                </Link>
                <div className="dropdown-menu" aria-labelledby="dropdown08">
                  <NavLink
                    className="dropdown-item moveline"
                    to="/SignUp/SignUp"
                  >
                    Sign Up
                  </NavLink>
                  <NavLink
                    className="dropdown-item moveline"
                    to="/CustomerLogin/CustomerLogin"
                  >
                    LogIn
                  </NavLink>
                </div>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link moveline"
                  to="/Membership/Membership"
                >
                  Membership
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link moveline dropdown-toggle"
                  to="#"
                  id="dropdown08"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Contractor
                </Link>
                <div className="dropdown-menu" aria-labelledby="dropdown08">
                  <NavLink
                    className="dropdown-item moveline"
                    to="/ContractorSignUp"
                  >
                    Sign Up
                  </NavLink>
                  <NavLink
                    className="dropdown-item moveline"
                    to="/ContractorLogin/ContractorLogin"
                  >
                    LogIn
                  </NavLink>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default CustomerSignedInLinks;
