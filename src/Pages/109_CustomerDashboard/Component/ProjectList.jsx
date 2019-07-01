import React from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";
import Divider from "../../Global/Layout/divider";
import "../Css/Project.scss";

const ProjectList = ({ projects, deleteProject }) => {
  console.log(projects);
  return (
    <section>
      <div className="col-12">
        {projects &&
          projects.map(jobs => {
            return (
              <Link to={"/jobs/" + jobs.id}>
                <ProjectSummary
                  deleteProject={deleteProject}
                  jobs={jobs}
                  key={jobs.id}
                />

                <Divider className={"col-8 pt-4"} />
              </Link>
            );
          })}
      </div>
    </section>
  );
};

export default ProjectList;
