import React, { Fragment, Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { signOut } from "../../../../Redux/Store/actions/authActions";
import { connect } from "react-redux";
export default class SideMenuMobile extends Component {
  render() {
    const props = this.props;
    return (
      <Fragment>
        <div class="mobile_content ">
          <span class="fas fa-user menu_icon "></span>

          {/* <!-- offcanvas menu --> */}
          <div class="offcanvas-menu closed ">
            <span class="far fa-times-circle close_menu"></span>
            <div class="author-author__info">
              <div class="author__avatar v_middle">
                <NavLink
                  to="#"
                  className="nav-link avatarlink dropdown-toggle nav-avatar"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="false"
                  aria-expanded="false"
                >
                  {/* {props.profile.initials} */}
                </NavLink>
              </div>
            </div>
            {/* <!--end /.author-author__info--> */}

            <div class="author__notification_area">
              <ul>
                <li>
                  <a href="notification.html">
                    <div class="icon_wrap">
                      <span class="icon-bell"></span>
                      <span class="notification_count noti">25</span>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="message.html">
                    <div class="icon_wrap">
                      <span class="icon-envelope"></span>
                      <span class="notification_count msg">6</span>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="cart.html">
                    <div class="icon_wrap">
                      <span class="icon-basket"></span>
                      <span class="notification_count purch">2</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            {/* <!--start .author__notification_area --> */}

            <div class="dropdown dropdown--author">
              <ul>
                <li>
                  <a href="author.html">
                    <span class="icon-user"></span>Profile
                  </a>
                </li>
                <li>
                  <a href="dashboard.html">
                    <span class="icon-home"></span> Dashboard
                  </a>
                </li>
                <li>
                  <a href="dashboard-setting.html">
                    <span class="icon-settings"></span> Setting
                  </a>
                </li>
                <li>
                  <a href="cart.html">
                    <span class="icon-basket"></span>Purchases
                  </a>
                </li>
                <li>
                  <a href="favourites.html">
                    <span class="icon-heart"></span> Favourite
                  </a>
                </li>
                <li>
                  <a href="dashboard-add-credit.html">
                    <span class="icon-credit-card"></span>Add Credits
                  </a>
                </li>
                <li>
                  <a href="dashboard-statement.html">
                    <span class="icon-chart"></span>Sale Statement
                  </a>
                </li>
                <li>
                  <a href="dashboard-upload.html">
                    <span class="icon-cloud-upload"></span>Upload Item
                  </a>
                </li>
                <li>
                  <a href="dashboard-manage-item.html">
                    <span class="icon-notebook"></span>Manage Item
                  </a>
                </li>
                <li>
                  <a href="dashboard-withdrawal.html">
                    <span class="icon-briefcase"></span>Withdrawals
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="icon-logout"></span>Logout
                  </a>
                </li>
              </ul>
            </div>

            <div class="text-center">
              <a href="signup.html" class="author-area__seller-btn inline">
                Become a Seller
              </a>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
