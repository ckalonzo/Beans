import React, { Component } from "react";
import Activities from "../109_CustomerDashboard/Component/Activities";
import DashboardHero from "./Component/dashboardHero";
import "./Css/dashboard.scss";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class Dashboard extends Component {
  render() {
    const { projects, auth } = this.props;
    if (!auth.uid)
      return <Redirect to="/102_ContractorLogin/ContractorLogin" />;

    return (
      <section className="customer-dashboard">
        <div className="projectList container">
          <div className="row mb-5">
            <DashboardHero />
          </div>
          <div className="row">
            <Activities projects={projects} />
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

export default connect(mapStateToProps)(Dashboard);
