import React, { Component } from "react";
import "../../../Css/PostJob.scss";
class TruckLoads extends Component {
  render() {
    const { handleChange, values, truckLoads } = this.props;
    return (
      <div className="className container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <div class="form-check-inline">
              <label class="form-check-label">
                <input
                  type="radio"
                  id={truckLoads}
                  value={values.truckLoads}
                  onChange={handleChange("truckLoads")}
                  value="1"
                  class="form-check-input"
                  name="optradio"
                />{" "}
                1
              </label>
            </div>
            <div class="form-check-inline">
              <label class="form-check-label">
                <input
                  type="radio"
                  id={truckLoads}
                  value={values.truckLoads}
                  onChange={handleChange("truckLoads")}
                  value="2"
                  class="form-check-input"
                  name="optradio"
                />{" "}
                2
              </label>
            </div>
            <div class="form-check-inline">
              <label class="form-check-label">
                <input
                  type="radio"
                  id={truckLoads}
                  value={values.truckLoads}
                  onChange={handleChange("truckLoads")}
                  value="3"
                  class="form-check-input"
                  name="optradio"
                />{" "}
                3
              </label>
            </div>
            <div class="form-check-inline">
              <label class="form-check-label">
                <input
                  type="radio"
                  id={truckLoads}
                  value={values.truckLoads}
                  onChange={handleChange("truckLoads")}
                  value="4"
                  class="form-check-input"
                  name="optradio"
                />{" "}
                4
              </label>
            </div>
            <div class="form-check-inline">
              <label class="form-check-label">
                <input
                  type="radio"
                  id={truckLoads}
                  value={values.truckLoads}
                  onChange={handleChange("truckLoads")}
                  value="5"
                  class="form-check-input"
                  name="optradio"
                />{" "}
                5
              </label>
            </div>
            <div class="form-check-inline">
              <label class="form-check-label">
                <input
                  type="radio"
                  id={truckLoads}
                  value={values.truckLoads}
                  onChange={handleChange("truckLoads")}
                  value="6"
                  class="form-check-input"
                  name="optradio"
                />{" "}
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
