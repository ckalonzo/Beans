import ProjectList from "./ProjectList";
import React from "react";

const CurrentJobs = props => {
  const { projects, deleteProject } = props;
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
};

export default CurrentJobs;
