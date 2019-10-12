import React, { Component } from "react";

export default class ActiveMember extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-6">
            <h6 className="font-weight-bold">Years</h6>
          </div>
          <div className="col-6">
            {/* <h6 className="font-weight-bold">{contractorProfile.years}</h6> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
