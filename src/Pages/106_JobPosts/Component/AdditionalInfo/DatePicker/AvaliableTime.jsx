import React, { Component } from "react";
import { TimePicker } from 'antd';
import "../../../Css/PostJob.css";

function onChange(time, timeString) {
    console.log(time, timeString);
}

export default class AvaliableTime extends Component {
    constructor(props) {
        super(props);
    }



    render() {

        return (
            <div>
                <div className="col-12 text-center mb-5">
                    <TimePicker use12Hours format="h:mm a" onChange={onChange} />
                </div>

            </div>
        )
    }
}

