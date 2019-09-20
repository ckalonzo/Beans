import React, { Component } from "react";
import "../../../Css/PostJob.css";
import "date-fns";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class CustDatePicker extends Component {

  render() {
    const { handleChangeDatePicker, selectedDate } = this.props;
    return (
      <React.Fragment>
        <div className="picker">
          <DatePicker
            inline
            value={selectedDate}
            selected={this.state.startDate}
            onChange={handleChangeDatePicker("selectedDate")}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default CustDatePicker;
