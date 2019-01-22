import React, { Component } from "react";
import { Radio, Col, Input } from 'antd';
import "../../../Css/PostJob.css";

const RadioGroup = Radio.Group;
const InputGroup = Input.Group;


export default class AnyLargeItems extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        value: 1,
    }

    onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    }



    render() {

        return (

            <div className="className container">
                <div className="row">
                    <div className="col-12 text-center mb-5">
                        <InputGroup className="d-inline-flex  mx-auto" size="large">
                            <RadioGroup className="mx-auto" onChange={this.onChange} value={this.state.value}>
                                <Radio value="Yes">Yes</Radio>
                                <Radio value="No">No</Radio>
                            </RadioGroup>
                        </InputGroup>
                    </div>
                </div>

            </div>
        )
    }
}

