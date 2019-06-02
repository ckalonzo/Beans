import React, { Component } from "react";
import "../Css/Search.scss";
export default class Search extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="cover">
          <form method="get" action="">
            <div class="tb">
              <div class="td">
                <input type="text" placeholder="Search" required />
              </div>
              <div class="td" id="s-cover">
                <button type="submit">
                  <div id="s-circle" />
                  <span />
                </button>
              </div>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
