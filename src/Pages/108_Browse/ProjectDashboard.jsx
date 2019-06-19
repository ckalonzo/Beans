import React, { Component } from "react";
import ProjectList from "./ProjectList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import Search from "./Component/Search";
import "./Css/Project.scss";
import SelectFilter from "./Component/Filter/selectFilter";
import RangeInput from "./Component/Filter/RangeInput";
import BudgetRangeInput from "./Component/Filter/BudgetRangeInput";
class ProjectDashboard extends Component {
  render() {
    const { projects, auth } = this.props;
    if (!auth.uid)
      return <Redirect to="/102_ContractorLogin/ContractorLogin" />;
    return (
      <section className="panel-list">
        <div className=" container">
          <div className="row">
            <div className="col-12 mb-5">
              <Search />
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <SelectFilter />
              <BudgetRangeInput />
              <RangeInput />
            </div>
            <div class="col-9 card">
              <ProjectList projects={projects} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  //console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects", orderBy: ["createdAt"] }])
)(ProjectDashboard);
