import React from "react";

const ProfileLocation = props => {
  return (
    <div className="row">
      <div className="col-1 p-0">
        {/* <Icon type="environment" theme="filled" /> */}
      </div>
      <div className="col-10 pl-0">
        <p>
          {props.contractorProfile.city}, {props.contractorProfile.state},
          United States
        </p>
      </div>
    </div>
  );
};

export default ProfileLocation;
