import React, { Component } from "react";
import "../../../Css/PostJob.scss";
class TruckLoads extends Component {
  render() {
    const { handleChange, values, truckLoads } = this.props;
    return (
      <div className="className container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                id={truckLoads}
                value={values.truckLoads}
                onChange={handleChange("truckLoads")}
              />
              <label class="form-check-label" for="inlineCheckbox1">
                1
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                id={truckLoads}
                value={values.truckLoads}
                onChange={handleChange("truckLoads")}
              />
              <label class="form-check-label" for="inlineCheckbox2">
                2
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox3"
                id={truckLoads}
                value={values.truckLoads}
                onChange={handleChange("truckLoads")}
              />
              <label class="form-check-label" for="inlineCheckbox3">
                3
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                id={truckLoads}
                value={values.truckLoads}
                onChange={handleChange("truckLoads")}
              />
              <label class="form-check-label" for="inlineCheckbox1">
                4
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                id={truckLoads}
                value={values.truckLoads}
                onChange={handleChange("truckLoads")}
              />
              <label class="form-check-label" for="inlineCheckbox2">
                5
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox3"
                id={truckLoads}
                value={values.truckLoads}
                onChange={handleChange("truckLoads")}
              />
              <label class="form-check-label" for="inlineCheckbox3">
                6
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TruckLoads;
