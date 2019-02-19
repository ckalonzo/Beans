import React, { Component } from "react";
import { Radio, Input, Button } from 'antd';
import "../../../Css/PostJob.css";

const { TextArea } = Input;
const InputGroup = Input.Group;


export default class SpecialInstructions extends Component {
    constructor(props) {
        super(props);
    }
    continue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }
    back = (e) => {
        e.preventDefault()
        this.props.prevStep()
    }



    render() {
        const { handleChange } = this.props;
        return (

            <div className="className container">
                <div className="row">
                    <div className="col-12 text-center mb-5">
                        <InputGroup className="d-inline-flex  mx-auto" onChange={handleChange} size="large">
                            <TextArea placeholder="Autosize height with minimum and maximum number of lines" autosize={{ minRows: 4, maxRows: 10 }} />

                            );
                        </InputGroup>
                    </div>
                    <Button onClick={this.continue}> Continue </Button>
                    <Button onClick={this.back}> Back</Button>
                </div>

            </div>
        )
    }
}

