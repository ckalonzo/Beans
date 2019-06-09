import React, { Component } from "react";
import "../Css/Search.scss";
export default class Search extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="tasearch mt-5">
          <div class="container">
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="Search for..."
              />
              <span class="input-group-btn">
                <button class="btn btn-search" type="button">
                  <i class="fa fa-search fa-fw" /> Search
                </button>
              </span>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
