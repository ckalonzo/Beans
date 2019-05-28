import React, { Component } from "react";
import "../../../Css/PostJob.scss";

class City extends Component {
  render() {
    const { handleChange, city, values } = this.props;
    return (
      <React.Fragment>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">City</label>
          <input
            type="text"
            className="form-control"
            id={city}
            defaultvalue={values.city}
            defaultvalue={values.address}
            onChange={handleChange("city")}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default City;
