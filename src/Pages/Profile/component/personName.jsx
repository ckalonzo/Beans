import React from "react";

const personName = props => {
  return (
    <div className="col-12">
      <h2 className="font-weight-normal">
        {props.contractorProfile.firstName}
        {props.contractorProfile.lastName}
      </h2>
    </div>
  );
};

export default personName;
