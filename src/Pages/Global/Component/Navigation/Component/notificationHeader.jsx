import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
//import { fetchBids } from "../../../../Redux/Store/actions/bidsAction";
import firebase from "../../../../../Config/Firebase";
class NotificationHeader extends Component {
  render() {
    return (
      <Fragment>
        <li class="has_dropdown">
          <div class="icon_wrap">
            <span class="far fa-bell"></span>
            <span class="notification_count noti">
              {this.props.notification}
            </span>
          </div>

          <div class="dropdown notification--dropdown">
            <div class="dropdown_module_header">
              <h6>My Notifications</h6>
            </div>

            <div class="notifications_module">
              <div class="notification">
                <div class="notification__info">
                  <div class="info_avatar">
                    <img src="img/notification_head.png" alt="" />
                  </div>
                  <div class="info">
                    <p>
                      <span>Anderson</span> added to Favourite
                      <a href="#">Mccarther Coffee Shop</a>
                    </p>
                    <p class="time">Just now</p>
                  </div>
                </div>

                <div class="notification__icons ">
                  <span class="icon-heart loved noti_icon"></span>
                </div>
              </div>

              <div class="notification">
                <div class="notification__info">
                  <div class="info_avatar">
                    <img src="img/notification_head2.png" alt="" />
                  </div>
                  <div class="info">
                    <p>
                      <span>Michael</span> commented on
                      <a href="#">DigiPro Extension Bundle</a>
                    </p>
                    <p class="time">Just now</p>
                  </div>
                </div>

                <div class="notification__icons ">
                  <span class="icon-bubble commented noti_icon"></span>
                </div>
              </div>

              <div class="notification">
                <div class="notification__info">
                  <div class="info_avatar">
                    <img src="img/notification_head3.png" alt="" />
                  </div>
                  <div class="info">
                    <p>
                      <span>Khamoka </span>purchased
                      <a href="#"> Visibility Manager Subscriptions</a>
                    </p>
                    <p class="time">Just now</p>
                  </div>
                </div>

                <div class="notification__icons ">
                  <span class="icon-basket-loaded purchased noti_icon"></span>
                </div>
              </div>

              <div class="notification">
                <div class="notification__info">
                  <div class="info_avatar">
                    <img src="img/notification_head4.png" alt="" />
                  </div>
                  <div class="info">
                    <p>
                      <span>Anderson</span> added to Favourite
                      <a href="#">Mccarther Coffee Shop</a>
                    </p>
                    <p class="time">Just now</p>
                  </div>
                </div>

                <div class="notification__icons ">
                  <span class="icon-star reviewed noti_icon"></span>
                </div>
              </div>
              <div class="text-center m-top-30 p-left-20 p-right-20">
                <a
                  href="notification.html"
                  class="btn btn-primary btn-md btn-block"
                >
                  View All
                </a>
              </div>
            </div>
          </div>
        </li>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    notification: state.notificationsReducer.notification,
    auth: state.firebase.auth,
    authError: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  // return {
  //   addToCart: (id, notification) => {
  //     dispatch(addToCart(id, notification));
  //   }
  // };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationHeader);
