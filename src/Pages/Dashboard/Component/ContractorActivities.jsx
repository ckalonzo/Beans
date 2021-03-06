import React, { Component } from "react";
import "../Css/dashboard.scss";
import MainChat from "../../Chat/mainChat";
import Notification from "./ContractorNotifications";
import Currentbids from "./ContractorCurrentbids";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
//import { Link } from "react-router-dom";

class ContractorActivities extends Component {
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
    // console.log(this, "======>");
    // console.log(`activity${this.props}`);
    const { notifications } = this.props;
    const { projects } = this.props;
    return (
      <div className="col-12">
        <div className="container">
          <ul className="nav nav-tabs ta-tabs" id="myTabMD" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="ta-CurrentBids-tab-cust"
                data-toggle="tab"
                href="#ta-CurrentBids-cust"
                role="tab"
                aria-controls="home-md"
                aria-selected="true"
              >
                Current Bids
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="ta-conversation-tab-cust"
                data-toggle="tab"
                href="#ta-conversation-cust"
                role="tab"
                aria-controls="ta-conversation-cust"
                aria-selected="false"
              >
                Conversation
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="ta-Notification-tab-cust"
                data-toggle="tab"
                href="#ta-Notification-cust"
                role="tab"
                aria-controls="ta-Notification-tab-cust"
                aria-selected="false"
              >
                Notification
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="ta-ActiveJobs-tab-cust"
                data-toggle="tab"
                href="#ta-ActiveJobs-cust"
                role="tab"
                aria-controls="ta-ActiveJobs-cust"
                aria-selected="false"
              >
                Active Jobs
              </a>
            </li>
          </ul>
          <div className="tab-content card pt-5" id="myTabContentMD">
            <div
              className="tab-pane fade show active"
              id="ta-CurrentBids-cust"
              role="tabpanel"
              aria-labelledby="ta-CurrentBids-tab-cust"
            >
              <Currentbids projects={projects} />
            </div>
            <div
              className="tab-pane fade"
              id="ta-conversation-cust"
              role="tabpanel"
              aria-labelledby="ta-conversation-tab-cust"
            >
              <MainChat />
            </div>
            <div
              className="tab-pane fade"
              id="ta-Notification-cust"
              role="tabpanel"
              aria-labelledby="ta-Notification-tab-cust"
            >
              <Notification notifications={notifications} />
            </div>
            <div
              className="tab-pane fade"
              id="ta-ActiveJobs-cust"
              role="tabpanel"
              aria-labelledby="contact-tab-md"
            >
              <p className="content content-tab4">Active Jobs</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  //console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    notifications: state.firestore.ordered.notifications
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "projects", orderBy: ["createdAt"] },
    { collection: "notifications", limit: 3 }
  ])
)(ContractorActivities);
