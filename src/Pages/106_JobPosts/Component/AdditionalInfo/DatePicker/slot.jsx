import React, { Component } from "react";
import "date-fns";
import DatePicker from "react-datepicker";
import TimePicker from "rc-time-picker";

import "react-datepicker/dist/react-datepicker.css";

class AvaliableTimeDate extends Component {
  getPickerValue = value => {
    console.log(value);
  };

  render() {
    const {
      selectedDate,
      handleChangeDatePicker,
      handleChangeTimePicker,
      time
    } = this.props;
    return (
      <div>
        <div className="className container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h6>Choose Date</h6>
              <DatePicker
                inline
                value={selectedDate}
                //selected={this.state.startDate}
                onChange={handleChangeDatePicker.bind(selectedDate)}
              />

              <div className="col-3">
                <TimePicker
                  id={time}
                  onChange={handleChangeTimePicker.bind(time)}
                  value={time}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AvaliableTimeDate;
