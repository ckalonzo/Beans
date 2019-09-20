import React, { Component } from "react";
import DatePicker from "react-datepicker";
import AvaliableTime from "./AvaliableTime";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

class AvaliableTimeDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      time: new Date()
    };
    this.dateChange = this.dateChange.bind(this);
    this.timeChange = this.timeChange.bind(this);
  }
  dateChange(date) {
    this.setState({
      date: date,
     
    },
      () => {
        console.log(this.state.date);
      });
  }

  timeChange(time) {
    this.props.handleChangeTimePicker(time);
    this.setState({
     time: time,

    },
      () => {
        console.log(this.state.time);
      });
  }


  render() {
    const {
      selectedDate,
      handleChangeDatePicker,
      handleChangeTimePicker,
      selectedTime,
      values
    } = this.props;
    return (
      <div>
        <div className="className container">
          <div className="row">
            <div className="col-6 col-xl-12 text-center mb-5">
              <h6>Choose Date</h6>
              <div className="row">
                <div className="col-6">
                  <DatePicker
                value={selectedDate}
                selected={this.state.date}
                onSelect={handleChangeDatePicker}
                onChange={this.dateChange}
                dateFormat="MMMM d, yyyy"
                name="selectedDate"
              />
                </div>
                <div className="col-6">
                <DatePicker
                  value={this.props.selectedTime}
                  selected={this.state.time}
                 // onSelect={handleChangeTimePicker}
                  onChange={this.timeChange}
                showTimeSelect
                showTimeSelectOnly
                  timeIntervals={15}
                  dateFormat="h:mm aa"
                  timeCaption="Time"
                />
              </div>
              </div>
              

              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AvaliableTimeDate;
