import React, { Fragment } from "react";
import "../../../Css/PostJob.scss";
import "rc-time-picker/assets/index.css";

import moment from "moment";

import TimePicker from "rc-time-picker";

const format = "h:mm a";

const now = moment()
  .hour(0)
  .minute(0);

class AvaliableTime extends React.Component {
  render() {
    const { time, handleChangeTimePicker, values } = this.props;

    return (
      <Fragment>
        <div className="col-12 text-center mb-5">
          <TimePicker
            showSecond={false}
            defaultValue={now}
            onChange={handleChangeTimePicker("time")}
            id={time}
            format={format}
            use12Hours
            inputReadOnly
          />
        </div>
      </Fragment>
    );
  }
}

export default AvaliableTime;
