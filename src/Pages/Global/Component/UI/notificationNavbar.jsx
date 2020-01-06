import React, { Component } from "react";

export default class notificationNavbar extends Component {
  render() {
    return (
      <div class="dropdown notification--dropdown">
        <div class="dropdown_module_header">
          <h6>My Notifications</h6>
        </div>

        <div class="notifications_module">
          <div class="notification">
            <div class="notification__info">
              {/* <!-- notifications component--> */}
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
            {/* <!-- end /.notifications --> */}

            <div class="notification__icons ">
              <span class="icon-heart loved noti_icon"></span>
            </div>
            {/* <!-- end /.notifications --> */}
          </div>
          {/* <!-- end /.notifications --> */}

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
            {/* <!-- end /.notifications --> */}

            <div class="notification__icons ">
              <span class="icon-bubble commented noti_icon"></span>
            </div>
            {/* <!-- end /.notifications --> */}
          </div>
          {/* <!-- end /.notifications --> */}

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
            {/* <!-- end /.notifications --> */}

            <div class="notification__icons ">
              <span class="icon-basket-loaded purchased noti_icon"></span>
            </div>
            {/* <!-- end /.notifications --> */}
          </div>
          {/* <!-- end /.notifications --> */}

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
            {/* <!-- end /.notifications --> */}

            <div class="notification__icons ">
              <span class="icon-star reviewed noti_icon"></span>
            </div>
            {/* <!-- end /.notifications --> */}
          </div>
          {/* <!-- end /.notifications --> */}
          <div class="text-center m-top-30 p-left-20 p-right-20">
            <a
              href="notification.html"
              class="btn btn-primary btn-md btn-block"
            >
              View All
            </a>
          </div>
          {/* <!-- end /.notifications --> */}
        </div>
        {/* <!-- end /.dropdown --> */}
      </div>
    );
  }
}
