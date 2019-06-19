import React, { Component } from "react";
import ProjectList from "../../109_CustomerDashboard/Component/ProjectList";

export default class CurrentJobs extends Component {
  render() {
    const { projects, deleteProject, customerId } = this.props;

    return (
      <section>
        <div className="app-content container">
          <div className="row">
            <div className="col-12">
              <h4>Current Jobs</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <ProjectList
                customerId={customerId}
                deleteProject={this.props.deleteProject}
                projects={projects}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
