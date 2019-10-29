import React from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";
import Divider from "../../Global/Layout/divider";
import "../Css/Project.scss";

const ProjectList = props => {
  const { projects, deleteProject } = props;
  console.log(projects);
  return (
    <div className="col-12 ">
      {projects &&
        projects.map(jobs => {
          return (
            <React.Fragment>
              <ProjectSummary
                deleteProject={deleteProject}
                jobs={jobs}
                key={jobs.id}
              />

              <Divider className={"col-8 pt-4"} />
            </React.Fragment>
          );
        })}
    </div>
  );
};

export default ProjectList;
