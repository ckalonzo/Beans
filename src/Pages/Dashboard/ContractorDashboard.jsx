import React, { Component } from "react";
import ContractorActivities from "./Component/ContractorActivities";
import DashboardHero from "./Component/ContractordashboardHero";
import "./Css/dashboard.scss";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
// import { firestoreConnect } from "react-redux-firebase";
// import { compose } from "redux";

class ContractorDashboard extends Component {
  render() {
    const { projects, auth } = this.props;
    if (!auth.uid)
      return <Redirect to="/Login/ContractorLogin/ContractorLogin" />;

    return (
      <section className="customer-dashboard">
        <div className="projectList container">
          <div className="row mb-5">
            <DashboardHero />
          </div>
          <div className="row">
            <ContractorActivities projects={projects} />
          </div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => {
  return {
    projects: state.project.jobs,
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(ContractorDashboard);
