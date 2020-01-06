import React, { Component } from "react";
import "../Css/Search.scss";
export default class Search extends Component {
  render() {
    return (
      <div className="tasearch mt-5">
        <div className="container">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search for..."
            />
            <span className="input-group-btn">
              <button className="btn btn-search" type="button">
                <i className="fa fa-search fa-fw" /> Search
              </button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
