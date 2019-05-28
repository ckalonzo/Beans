import React, { Component } from "react";

export default class Search extends Component {
  render() {
    return (
      <React.Fragment>
        <form class="form-inline">
          <input
            class="form-control mr-sm-2 col-8"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </React.Fragment>
    );
  }
}
