import React, { Component, Fragment } from "react";
import "../Css/customer-dashboard.scss";

class Tab extends Component {
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
                My Jobs
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
              <Currentbids projects={projects} />
            </div>
            <div
              className="tab-pane fade"
              id="ta-conversation-cust"
              role="tabpanel"
              aria-labelledby="ta-conversation-tab-cust"
            >
              <ChatModule />
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
)(Tab);
