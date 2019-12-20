import React from "react";
import "../css/Navbar.scss";
import { Link } from "react-router-dom";

const SignedOutLinks = () => {
  return (
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

          <div
            class="navbar-collapse collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="navbar-nav w-75 justify-content-center nav-section">
              <li class="has_dropdown">
                <Link
                  className=" nav-link chg-text"
                  id="dropdown08"
                  to="#"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Customer
                </Link>
                <i class="-ta_pl-5 fas fa-chevron-down"></i>
                <div class="dropdown dropdown--menu">
                  <ul>
                    <li>
                      <a
                        className="dropdown-item nav-link chg-text"
                        href="/SignUp/SignUp"
                      >
                        Sign Up
                      </a>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item nav-link chg-text"
                        to="/CustomerLogin/CustomerLogin"
                      >
                        LogIn
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link chg-text" to="/">
                  Blog
                </Link>
              </li>
              <li class="has_dropdown">
                <Link
                  className="nav-link  chg-text"
                  to="#"
                  id="dropdown09"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Contractor
                </Link>
                <i class="-ta_pl-5 fas fa-chevron-down"></i>
                <div class="dropdown dropdown--menu">
                  <ul>
                    <li>
                      <a
                        className="dropdown-item nav-link chg-text"
                        href="/SignUp/Contractor-Create-Account"
                      >
                        Sign Up
                      </a>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item nav-link chg-text"
                        to="/ContractorLogin/ContractorLogin"
                      >
                        LogIn
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SignedOutLinks;
