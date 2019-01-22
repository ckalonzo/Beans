import React, { Component } from "react";
import { Radio, Col, DatePicker, Input } from 'antd';
import "../../../Css/PostJob.css";

const RadioGroup = Radio.Group;
const InputGroup = Input.Group;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

export default class CustDatePicker extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        size: 'default',
    };

    handleSizeChange = (e) => {
        this.setState({ size: e.target.value });
    }


    render() {
        const { size } = this.state;
        return (
            <div>

                <InputGroup size="large">
                    <DatePicker size="large" />
                </InputGroup>
            </div>
        )
    }
}

