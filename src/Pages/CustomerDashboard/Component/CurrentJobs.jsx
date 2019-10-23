import React, { Component } from "react";
import ProjectList from "./ProjectList";

export default class CurrentJobs extends Component {
  render() {
    const { projects, deleteProject } = this.props;

    return (
      <div className="app-content container">
        <div className="row">
          <div className="col-12">
            <h4>Current Jobs</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <ProjectList deleteProject={deleteProject} projects={projects} />
          </div>
        </div>
      </div>
    );
  }
}
