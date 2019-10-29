import React, { Component } from "react";
import ProjectList from "../../Browse/ProjectList";

import React from "react";

const currentbids = props => {
  const { projects } = props;
  return (
    <section>
      <div className="app-content container">
        <div className="row">
          <div className="col-12">
            <h4>Current Bids</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <ProjectList projects={projects} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default currentbids;
