import React, { Component, Fragment } from "react";
import "../css/Navbar.scss";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <Fragment>
        <ul className="navbar-nav w-100 justify-content-center nav-section">
          <li className="nav-item dropdown">
            <a
              className="nav-link chg-text moveline dropdown-toggle"
              href="#"
              id="dropdown08"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Customer
            </a>
            <div
              className="dropdown-menu rmv-border"
              aria-labelledby="dropdown08"
            >
              <a
                className="dropdown-item chg-text moveline"
                href="/SignUp/SignUp"
              >
                Sign Up
              </a>
              <a
                className="dropdown-item chg-text moveline"
                href="/CustomerLogin/CustomerLogin"
              >
                LogIn
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link chg-text moveline"
              href="/Membership/Membership"
            >
              Membership
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link  chg-text moveline dropdown-toggle"
              href="#"
              id="dropdown09"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Contractor
            </a>
            <div
              className="dropdown-menu rmv-border"
              aria-labelledby="dropdown09"
            >
              <a
                className="dropdown-item chg-text moveline"
                href="/SignUp/Contractor-Create-Account"
              >
                Sign Up
              </a>
              <a
                className="dropdown-item chg-text moveline"
                href="/ContractorLogin/ContractorLogin"
              >
                LogIn
              </a>
            </div>
          </li>
          <li>
            <Link to="/Membership/component/cart">
              <ul className="navbar-right ta-list">
                <li>
                  <a href="#" className="ta-shoppingChart" id="cart">
                    <span className="fa-stack fa-1x has-badge" data-count="5">
                      {/* <i className="fa fa-circle fa-stack-2x" /> */}
                      <i className="fas fa-shopping-cart fa-stack-2x " />
                    </span>
                  </a>
                </li>
              </ul>
            </Link>
          </li>
        </ul>
      </Fragment>
    );
  }
}
export default Navbar;
