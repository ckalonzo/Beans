import React, { Component } from "react";
import { Radio, Input } from 'antd';
import "../../../Css/PostJob.css";

const { TextArea } = Input;
const InputGroup = Input.Group;


export default class SpecialInstructions extends Component {
    constructor(props) {
        super(props);
    }




    render() {

        return (

            <div className="className container">
                <div className="row">
                    <div className="col-12 text-center mb-5">
                        <InputGroup className="d-inline-flex  mx-auto" size="large">
                            <TextArea placeholder="Autosize height with minimum and maximum number of lines" autosize={{ minRows: 4, maxRows: 10 }} />

                            );
                        </InputGroup>
                    </div>
                </div>

            </div>
        )
    }
}

