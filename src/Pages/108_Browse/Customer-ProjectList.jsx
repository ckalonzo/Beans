import React from "react";
import ProjectSummary from "./Component/ProjectSummary";
import { Link } from "react-router-dom";
import Divider from "../Global/Layout/divider";
import "./Css/Project.scss";

const CustomerProjectList = ({ projects }) => {
  return (
    <section>
      <div className="col-12">
        {projects &&
          projects.map(jobs => {
            return (
              <Link to={"/jobs/" + jobs.id}>
                <ProjectSummary jobs={jobs} key={jobs.id} />
                <Divider className={"col-8 pt-4"} />
              </Link>
            );
          })}
      </div>
    </section>
  );
};

export default ProjectList;
