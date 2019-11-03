import React from "react";

const TypeOfJobs = props => {
  console.log(props);
  console.log(props.contractorProfile.data);
  return (
    <div className="row">
      <div className="col">
        <span className="badge badge-pill badge-info">
          {props.contractorProfile.typeOfJobs}
        </span>
        <span className="badge badge-pill badge-info">Lawn Service</span>
      </div>
    </div>
  );
};

export default TypeOfJobs;
