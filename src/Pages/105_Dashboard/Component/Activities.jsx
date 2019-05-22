import React, { Component } from "react";
import "../Css/dashboard.scss";
import ChatModule from "../../Chat/Chat-module";
import Notification from "./Notifications";
import Currentbids from "../../105_Dashboard/Component/currentbids";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class Activities extends Component {
  state = {
    activeItemClassicTabs1: "1",
    pastBidsCounter: 5,
    messagesCounter: 10,
    currentBidsCounter: 20,
    notificationsCounter: 50,
    activeJobs: 1,
    show: true,
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  toggleClassicTabs1 = tab => () => {
    if (this.state.activeItemClassicTabs1 !== tab) {
      this.setState({
        activeItemClassicTabs1: tab
      });
    }
  };

  render() {
    console.log(this, "======>");
    console.log(`activity${this.props}`);
    const { notifications } = this.props;
    const { projects } = this.props;
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className="col-12">
        <div className="container">
          <ul class="tabs-bar">
            <li id="tab1" class="tab tab-active">
              Current Bids
            </li>
            <li id="tab2" class="tab">
              Conversation
            </li>
            <li id="tab3" class="tab">
              Notification
            </li>
            <li id="tab4" class="tab">
              {" "}
              Active Jobs
            </li>
          </ul>

          <div class="content-container">
            <div class="content content-tab1 content-active">
              <Currentbids projects={projects} />
            </div>
            <div class="content content-tab2">
              <ChatModule />
            </div>
            <div class="content content-tab3">
              <Notification notifications={notifications} />
            </div>
            <p class="content content-tab4">Active Jobs</p>
          </div>
        </div>
        ); }
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    notifications: state.firestore.ordered.notifications
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "projects" },
    { collection: "notifications", limit: 3 }
  ])
)(Activities);
