import React, { Component } from "react";

import "../../../Css/PostJob.scss";

class AnyLargeItems extends Component {
  render() {
    const { handleChange, largeItems, values } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-3 mx-auto text-center mb-5">
            <select
              className="browser-default custom-select"
              value={values.largeItems}
              onChange={handleChange("largeItems")}
              defaultvalue={values.largeItems}
              id={largeItems}
            >
              <option>Choose your option</option>
              <option value={"Yes"}>Yes</option>
              <option value={"No"}>No</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default AnyLargeItems;
