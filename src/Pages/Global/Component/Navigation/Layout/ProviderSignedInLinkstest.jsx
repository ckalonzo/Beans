import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../css/Navbar.scss";
import { connect } from "react-redux";
import { signOut } from "../../../../Redux/Store/actions/authActions";
import { addToCart } from "../../../../Redux/Store/actions/cartActions";

const ProviderSignedInLinks = props => {
  return (
    <React.Fragment>
      <ul class="navbar-nav">
        <li class="has_dropdown">
          <NavLink
            className="nav-link chg-text moveline"
            to="../../../../Browse/ProjectDashboard"
          >
            Browse
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-link chg-text moveline"
            to="/Dashboard/ContractorDashboard"
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-link chg-text moveline"
            to="/Membership/Membership"
          >
            Membership
          </NavLink>
        </li>
      </ul>
      <div class="author-menu">
        <div class="author-area">
          <div class="author__notification_area">
            <ul>
              <li class="has_dropdown">
                <div class="icon_wrap">
                  <span class="icon-bell"></span>
                  <span class="notification_status noti"></span>
                </div>
              </li>

              <li class="has_dropdown">
                <div class="icon_wrap">
                  <span class="icon-envelope-open"></span>
                  <span class="notification_status msg"></span>
                </div>

                <div class="dropdown messaging--dropdown">
                  <div class="dropdown_module_header">
                    <h6>My Messages</h6>
                  </div>

                  <div class="messages">
                    <a href="message.html" class="message recent">
                      <div class="message__actions_avatar">
                        <div class="avatar">
                          <img src="img/notification_head4.png" alt="" />
                        </div>
                      </div>
                      {/* <!-- end /.actions --> */}

                      <div class="message_data">
                        <div class="name_time">
                          <div class="name">
                            <p>NukeThemes</p>
                            <span class="icon-envelope"></span>
                          </div>

                          <span class="time">Just now</span>
                          <p>Hello John Smith! Nunc placerat mi ...</p>
                        </div>
                      </div>
                      {/* <!-- end /.message_data --> */}
                    </a>
                    {/* <!-- end /.message --> */}

                    <a href="message.html" class="message recent">
                      <div class="message__actions_avatar">
                        <div class="avatar">
                          <img src="img/notification_head5.png" alt="" />
                        </div>
                      </div>
                      {/* <!-- end /.actions --> */}

                      <div class="message_data">
                        <div class="name_time">
                          <div class="name">
                            <p>Crazy Coder</p>
                            <span class="icon-envelope"></span>
                          </div>

                          <span class="time">Just now</span>
                          <p>Hi! Nunc placerat mi id nisi interum ...</p>
                        </div>
                      </div>
                      {/* <!-- end /.message_data --> */}
                    </a>
                    {/* <!-- end /.message --> */}

                    <a href="message.html" class="message">
                      <div class="message__actions_avatar">
                        <div class="avatar">
                          <img src="img/notification_head2.png" alt="" />
                        </div>
                      </div>
                      {/* <!-- end /.actions --> */}

                      <div class="message_data">
                        <div class="name_time">
                          <div class="name">
                            <p>Hybrid Insane</p>
                          </div>

                          <span class="time">Just now</span>
                          <p>Hi! Nunc placerat mi id nisi interum ...</p>
                        </div>
                      </div>
                      {/* <!-- end /.message_data --> */}
                    </a>
                    {/* <!-- end /.message --> */}

                    <a href="message.html" class="message">
                      <div class="message__actions_avatar">
                        <div class="avatar">
                          <img src="img/notification_head3.png" alt="" />
                        </div>
                      </div>
                      {/* <!-- end /.actions --> */}

                      <div class="message_data">
                        <div class="name_time">
                          <div class="name">
                            <p>ThemeXylum</p>
                          </div>

                          <span class="time">Just now</span>
                          <p>Hi! Nunc placerat mi id nisi interum ...</p>
                        </div>
                      </div>
                      {/* <!-- end /.message_data --> */}
                    </a>
                    {/* <!-- end /.message --> */}

                    <a href="message.html" class="message">
                      <div class="message__actions_avatar">
                        <div class="avatar">
                          <img src="img/notification_head4.png" alt="" />
                        </div>
                      </div>
                      {/* <!-- end /.actions --> */}

                      <div class="message_data">
                        <div class="name_time">
                          <div class="name">
                            <p>NukeThemes</p>
                            <span class="icon-envelope"></span>
                          </div>

                          <span class="time">Just now</span>
                          <p>Hello John Smith! Nunc placerat mi ...</p>
                        </div>
                      </div>
                      {/* <!-- end /.message_data --> */}
                    </a>
                    {/* <!-- end /.message --> */}
                  </div>
                  <div class="text-center m-top-30 m-bottom-30 p-left-20 p-right-20">
                    <a
                      href="message.html"
                      class="btn btn-primary btn-md btn-block"
                    >
                      View All
                    </a>
                  </div>
                </div>
              </li>
              <li class="has_dropdown">
                <div class="icon_wrap">
                  <span class="icon-basket-loaded"></span>
                  <span class="notification_count purch">2</span>
                </div>

                <div class="dropdown dropdown--cart">
                  <div class="cart_area">
                    <div class="cart_list">
                      <div class="cart_product">
                        <div class="product__info">
                          <div class="thumbn">
                            <img
                              src="img/capro1.jpg"
                              alt="cart product thumbnail"
                            />
                          </div>

                          <div class="info">
                            <a class="title" href="single-product.html">
                              Finance and Consulting Business Theme
                            </a>
                            <div class="cat">
                              <a href="#">
                                <img src="img/catword.png" alt="" />
                                Wordpress
                              </a>
                            </div>
                          </div>
                        </div>

                        <div class="product__action">
                          <a href="#">
                            <span class="icon-trash"></span>
                          </a>
                          <p>$60</p>
                        </div>
                      </div>
                      <div class="cart_product">
                        <div class="product__info">
                          <div class="thumbn">
                            <img
                              src="img/capro2.jpg"
                              alt="cart product thumbnail"
                            />
                          </div>

                          <div class="info">
                            <a class="title" href="single-product.html">
                              Flounce - Multipurpose OpenCart Theme
                            </a>
                            <div class="cat">
                              <a href="#">
                                <img src="img/catword.png" alt="" />
                                Wordpress
                              </a>
                            </div>
                          </div>
                        </div>

                        <div class="product__action">
                          <a href="#">
                            <span class="icon-trash"></span>
                          </a>
                          <p>$60</p>
                        </div>
                      </div>
                    </div>
                    <div class="total">
                      <p>
                        <span>Total :</span>$80
                      </p>
                    </div>
                    <div class="cart_action">
                      <a class="btn btn-primary" href="cart.html">
                        View Cart
                      </a>
                      <a class="btn btn-secondary" href="checkout.html">
                        Checkout
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* <!--start .author-author__info--> */}
          <div class="author-author__info has_dropdown">
            <div class="author__avatar online">
              <img
                src="img/user-avater.png"
                alt="user avatar"
                class="rounded-circle"
              />
            </div>

            <div class="dropdown dropdown--author">
              <div class="author-credits d-flex">
                <div class="author__avatar">
                  <img
                    src="img/user-avater.png"
                    alt="user avatar"
                    class="rounded-circle"
                  />
                </div>
                <div class="autor__info">
                  <p class="name">Chris Bent</p>
                  <p class="amount">$20.45</p>
                </div>
              </div>
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
          </div>
          {/* <!--end /.author-author__info--> */}
        </div>
        {/* <!-- end .author-area --> */}

        {/* <!-- author area restructured for mobile --> */}
        <div class="mobile_content ">
          <span class="icon-user menu_icon"></span>

          {/* <!-- offcanvas menu --> */}
          <div class="offcanvas-menu closed">
            <span class="icon-close close_menu"></span>
            <div class="author-author__info">
              <div class="author__avatar v_middle">
                <img src="img/user-avater.png" alt="user avatar" />
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
        {/* <!-- end /.mobile_content --> */}
      </div>
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
