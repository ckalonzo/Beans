import React, { Component } from "react";
import { Input, Button } from 'antd';
import "../../../Css/PostJob.css";

const { TextArea } = Input;
const InputGroup = Input.Group;


export default class SpecialInstructions extends Component {

    continue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }
    back = (e) => {
        e.preventDefault()
        this.props.prevStep()
    }



    render() {
        const { handleChange, specialInstructions, values } = this.props;
        console.log(handleChange);
        return (

            <div className="className container">
                <div className="row">
                    <div className="col-12 text-center mb-5">
                        <InputGroup className="d-inline-flex  mx-auto" size="large">
                            <TextArea placeholder="Autosize height with minimum and maximum number of lines" defaultvalue={values.specialInstructions} id={specialInstructions} onChange={handleChange('specialInstructions')} autosize={{ minRows: 4, maxRows: 10 }} />

                            );
                        </InputGroup>
                    </div>
                </div>

            </div>
        )
    }
}

