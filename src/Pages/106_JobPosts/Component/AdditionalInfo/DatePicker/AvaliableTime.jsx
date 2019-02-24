import React, { Component } from "react";
import { TimePicker } from 'antd';
import "../../../Css/PostJob.css";



export default class AvaliableTime extends Component {

    render() {
        const { time, handleChangeTimePicker } = this.props;

        return (
            <div>
                <div className="col-12 text-center mb-5">
                    <TimePicker
                        use12Hours
                        format="h:mm a"
                        id={time}
                        onChange={handleChangeTimePicker('time')}
                    />
                </div>

            </div>
        )
    }
}

