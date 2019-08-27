import React, { Component } from "react";
import "../Css/customer-dashboard.scss";
import Notification from "./Notifications";
import CurrentJobs from "../../109_CustomerDashboard/Component/CurrentJobs";
import ChatModule from "../../Chat/Chat-module";
import MainChat from "../../Chat/mainChat";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import {deleteJob} from "../../Redux/Store/actions/deleteJob"
class Activities extends Component {
  state = {
    activeItemClassicTabs1: "1",
    pastBidsCounter: 5,
    messagesCounter: 10,
    currentBidsCounter: 20,
    notificationsCounter: 50,
    activeJobs: 1,
    show: true,
    value: 0,
    projects: []
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  deleteProject = id => {
    this.props.deleteJob(this.props.projects.id)
    let projects = this.props.projects.filter(jobs => {
      console.log("hi");
      return jobs.id !== id;
    });
    this.setState({
      projects: projects
    });
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
    const { projects, customerId } = this.props;
    return (
      <div className="col-12">
        <div className="container">
          <ul className="nav nav-tabs ta-tabs" id="myTabMD" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="ta-JobPosts-tab-cust"
                data-toggle="tab"
                href="#ta-JobPosts-cust"
                role="tab"
                aria-controls="home-md"
                aria-selected="true"
              >
                Current Jobs
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
                Past Jobs
              </a>
            </li>
          </ul>
          <div className="tab-content card pt-5" id="myTabContentMD">
            <div
              className="tab-pane fade show active"
              id="ta-JobPosts-cust"
              role="tabpanel"
              aria-labelledby="ta-JobPosts-tab-cust"
            >
              <CurrentJobs
                customerId={customerId}
                deleteProject={this.deleteProject}
                projects={projects}
              />
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
  console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    notifications: state.firestore.ordered.notifications
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteJob: (id) => {dispatch ({type: 'DELETE_JOB', id:id})}
  }
}
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: "projects", orderBy: ["createdAt"] },
    { collection: "notifications", limit: 3 }
  ])
)(Activities);
