import React from "react";

const NumberofJobs = props => {
  return (
    <div className="row">
      <div className="col-6">
        <h6 className="font-weight-bold">Jobs </h6>
      </div>
      <div className="col-6">
        <h6 className="font-weight-bold">
          {" "}
          {props.contractorProfile.numberOfJobs}
        </h6>
      </div>
    </div>
  );
};

export default NumberofJobs;
