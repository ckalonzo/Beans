import React, { Component, Fragment } from "react";
import ProjectSummary from "./Component/ProjectSummary";
import { Link } from "react-router-dom";
import Divider from "../Global/Layout/divider";
import "./Css/Project.scss";

export default class ProjectList extends Component {
  render() {
    const { projects, bidNow } = this.props;
    //console.log(projects);
    return (
      <section>
        <div className="col-12">
          {projects &&
            projects.map(jobs => {
              return (
                <Fragment>
                  <ProjectSummary
                    jobs={jobs}
                    key={jobs.authUid}
                    handleBidNow={this.props.handleBidNow}
                    bidNow={bidNow}
                    handleChange={this.props.handleChange}
                  />
                  <Divider className={"col-8 pt-4"} />
                </Fragment>
              );
            })}
        </div>
      </section>
    );
  }
}
