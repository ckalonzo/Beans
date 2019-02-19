import React, { Component } from "react";
import { Radio, Col, Input } from 'antd';
import "../../../Css/PostJob.css";

const RadioGroup = Radio.Group;
const InputGroup = Input.Group;


export default class AnyLargeItems extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { handleChange } = this.props;
        return (

            <div className="className container">
                <div className="row">
                    <div className="col-12 text-center mb-5">
                        <InputGroup className="d-inline-flex  mx-auto" size="large">
                            <RadioGroup className="mx-auto" id="largeItems" onChange={handleChange} >
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

