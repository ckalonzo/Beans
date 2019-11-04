import React from "react";

const TypeOfJobs = props => {
  console.log(props.contractorProfile);
  return (
    <div className="row">
      <div className="col">
        {props.contractorProfile.typeOfJobs.map(service => {
          return (
            <span className="badge badge-pill badge-info">
              <div key={service.toString()}>{service}</div>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default TypeOfJobs;
