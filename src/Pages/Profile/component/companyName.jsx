import React from "react";

const companyName = props => {
  return (
    <div className="col">
      <h5>{props.contractorProfile.companyName}</h5>
    </div>
  );
};

export default companyName;
