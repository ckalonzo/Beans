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
  constructor(props) {
    super(props);

    this.state = {
      bidNow: "",
      Price: "",
      uid: ""
    };
    this.handleBidNow = this.handleBidNow.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleBidNow(e) {
    e.preventDefault();
    console.log("The link was clicked.");
  }

  handleChange = input => e => {
    e.preventDefault();
    this.setState({
      [input]: e.target.value
    });
  };

  render() {
    const { projects, auth } = this.props;
    const { bidNow } = this.state;
    if (!auth.uid)
      return <Redirect to="/102_ContractorLogin/ContractorLogin" />;
    console.log(this.props);
    return (
      <section className="panel-list">
        <div className=" container">
          <div className="row">
            <div className="col-12 mb-5">
              <Search />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-3">
              <SelectFilter />
              <BudgetRangeInput />
              <RangeInput />
            </div>
            <div className="col-12 col-sm-9 card">
              <ProjectList
                handleBidNow={this.handleBidNow}
                projects={projects}
                bidNow={bidNow}
                handleChange={this.handleChange}
              />
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
    auth: state.firebase.auth,
    bids: state.submitBid.bids
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects", orderBy: ["createdAt"] }])
)(ProjectDashboard);
