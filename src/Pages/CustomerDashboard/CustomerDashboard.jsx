import React from "react";
import Activities from "./Component/Activities";
import DashboardHero from "./Component/dashboardHero";
import "./Css/customer-dashboard.scss";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const CustomerDashboard = props => {
  const { projects, auth, customerId } = props;
  if (!auth.uid) return <Redirect to="/Login/CustomerLogin/CustomerLogin" />;
  return (
    <section className="customer-dashboard">
      <div className="projectList container">
        <div className="row mb-5">
          <DashboardHero />
        </div>
        <div className="row">
          <Activities customerId={customerId} projects={projects} />
        </div>
      </div>
    </section>
  );
};
const mapStateToProps = state => {
  console.log(`custdash${state}`);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects", orderBy: ["createdAt"] }])
)(CustomerDashboard);
