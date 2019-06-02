import React, { Component } from "react";
import "./css/divider.scss";
export default class divider extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={this.props.colspan}>
        <div className={"greydivider " + this.props.className} />
      </div>
    );
  }
}
