import React, { Component } from "react";
import "../../../Css/PostJob.scss";
class TruckLoads extends Component {
  render() {
    const { handleChange, values, truckLoads } = this.props;
    return (
      <div className="className container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <div className="form-check-inline">
              <label className="form-check-label">
                <input
                  type="radio"
                  id={truckLoads}
                  value={values.truckLoads}
                  onChange={handleChange("truckLoads")}
                  value="1"
                  className="form-check-input"
                  name="optradio"
                />{" "}
                1
              </label>
            </div>
            <div className="form-check-inline">
              <label className="form-check-label">
                <input
                  type="radio"
                  id={truckLoads}
                  value={values.truckLoads}
                  onChange={handleChange("truckLoads")}
                  value="2"
                  className="form-check-input"
                  name="optradio"
                />{" "}
                2
              </label>
            </div>
            <div className="form-check-inline">
              <label className="form-check-label">
                <input
                  type="radio"
                  id={truckLoads}
                  value={values.truckLoads}
                  onChange={handleChange("truckLoads")}
                  value="3"
                  className="form-check-input"
                  name="optradio"
                />{" "}
                3
              </label>
            </div>
            <div className="form-check-inline">
              <label className="form-check-label">
                <input
                  type="radio"
                  id={truckLoads}
                  value={values.truckLoads}
                  onChange={handleChange("truckLoads")}
                  value="4"
                  className="form-check-input"
                  name="optradio"
                />{" "}
                4
              </label>
            </div>
            <div className="form-check-inline">
              <label className="form-check-label">
                <input
                  type="radio"
                  id={truckLoads}
                  value={values.truckLoads}
                  onChange={handleChange("truckLoads")}
                  value="5"
                  className="form-check-input"
                  name="optradio"
                />{" "}
                5
              </label>
            </div>
            <div className="form-check-inline">
              <label className="form-check-label">
                <input
                  type="radio"
                  id={truckLoads}
                  value={values.truckLoads}
                  onChange={handleChange("truckLoads")}
                  value="6"
                  className="form-check-input"
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
