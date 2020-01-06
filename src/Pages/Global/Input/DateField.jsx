import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

export default class DateField extends Component {
  constructor(props) {
    if (!this.props.value || this.props.value.length === 0) {
      this.state = {
        startDate: null
      };
    } else {
      this.state = {
        startDate: moment(this.props.value, "MM/DD/YYYY").toDate()
      };
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  handleBlur() {
    let valueToSend = null;
    if (this.state.startDate != null) {
      valueToSend = moment(this.state.startDate).format("MM/DD/YYYY");
    }
    this.props.onChange(this.props.id, valueToSend);
  }

  renderError() {
    if (this.props.error) {
      return (
        <div id="name-err" className="err-text" aria-live="asseritive">
          {this.props.error}
        </div>
      );
    }
    //else
    return;
  }

  renderLabel() {
    let label = this.props.labelName;
    label += "(MM/DD/YYYY)";
    if (this.props.required) {
      label += "*";
    }
    return label;
  }
  render() {
    return (
      <div className="container">
        <label
          id={this.props.id + "label label-default"}
          htmlFor={this.props.id}
          className="has-float-label"
        >
          {this.renderLabel()}
        </label>
        <DatePicker
          id={this.props.id}
          selected={this.state.startDate}
          minDate={moment(this.props.minValue, "MM/DD/YYYY").toDate()}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          className={"datepicker-style input-group-text"}
        />
        {this.renderError()}
      </div>
    );
  }
}
