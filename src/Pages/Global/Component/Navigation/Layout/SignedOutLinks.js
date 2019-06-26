import React from "react";
import "../css/Navbar.scss";
import { Link } from "react-router-dom";
import { MDBBadge, MDBIcon } from "mdbreact";

const Navbar = props => {
  return (
    <React.Fragment>
      <ul class="navbar-nav w-100 justify-content-center nav-section">
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
              href="/104_SignUp/SignUp"
            >
              Sign Up
            </a>
            <a
              className="dropdown-item chg-text moveline"
              href="/101_CustomerLogin/CustomerLogin"
            >
              LogIn
            </a>
          </div>
        </li>
        <li className="nav-item">
          <a
            className="nav-link chg-text moveline"
            href="/103_Membership/Membership"
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
              href="/104_SignUp/Contractor-Create-Account"
            >
              Sign Up
            </a>
            <a
              className="dropdown-item chg-text moveline"
              href="/102_ContractorLogin/ContractorLogin"
            >
              LogIn
            </a>
          </div>
        </li>
        <li>
          <Link to="/103_Membership/component/cart">
            <ul class="navbar-right ta-list">
              <li>
                <a href="#" className="ta-shoppingChart" id="cart">
                  <span class="fa-stack fa-1x has-badge" data-count="5">
                    {/* <i class="fa fa-circle fa-stack-2x" /> */}
                    <i class="fas fa-shopping-cart fa-stack-2x " />
                  </span>
                </a>
              </li>
            </ul>
          </Link>
        </li>
      </ul>
    </React.Fragment>
  );
};
export default Navbar;
