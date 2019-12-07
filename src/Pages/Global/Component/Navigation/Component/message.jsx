import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
//import { fetchBids } from "../../../../Redux/Store/actions/bidsAction";
import firebase from "../../../../../Config/Firebase";
export default class Message extends Component {
  render() {
    return (
      <Fragment>
        <li class="has_dropdown">
          <div class="icon_wrap">
            <span class="far fa-envelope-open"></span>
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
              <a href="message.html" class="btn btn-primary btn-md btn-block">
                View All
              </a>
            </div>
          </div>
        </li>
      </Fragment>
    );
  }
}
