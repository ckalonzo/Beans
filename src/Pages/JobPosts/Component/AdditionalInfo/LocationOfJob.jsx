import React, { Component } from "react";
import "../../Css/PostJob.scss";
import StreetAddress from "./LocationOfJobComponent/StreetAddress";
import ZipCode from "./LocationOfJobComponent/ZipCode";
import City from "./LocationOfJobComponent/City";
import Statee from "./LocationOfJobComponent/State";

export default class LocationPage extends Component {
  render() {
    const { values, address, city, state, zipCode } = this.props;
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-8 mx-auto text-center mb-5">
            <StreetAddress
              handleChange={this.props.handleChange}
              values={values}
              address={address}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-4 text-center mb-5">
            <City
              handleChange={this.props.handleChange}
              values={values}
              city={city}
            />
          </div>
          <div className="col-1 mx-auto text-center mb-5">
            <h6>State</h6>
            <Statee
              handleChange={this.props.handleChange}
              values={values}
              state={state}
            />
          </div>
          <div className="col-4 text-center mb-5">
            <h6>ZipCode</h6>
            <ZipCode
              handleChange={this.props.handleChange}
              values={values}
              zipCode={zipCode}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
