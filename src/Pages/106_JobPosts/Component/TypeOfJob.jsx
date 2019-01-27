import React, { Component } from 'react'
import "../Css/PostJob.css";
import { Select, Button } from 'antd';



const Option = Select.Option;

export default class TypeOfJob extends Component {

    continue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }
    back = (e) => {
        e.preventDefault()
        this.props.prevStep()
    }

    render() {
        const { values, handleChangeSelect } = this.props;
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-6  offset-3 text-center mb-5 mt-5">
                            <h1>What Type of Job you need?</h1>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6  offset-3 text-center mb-5">
                            <React.Fragment>
                                <Select defaultvalue={values.service} style={{ width: 300 }} onChange={handleChangeSelect.bind(this)}>
                                    <Option value="Junk Removal">Junk Removal</Option>
                                    <Option value="Cleaner Service">Cleaner Service</Option>
                                </Select>
                            </React.Fragment>

                        </div>
                        <Button onClick={this.continue}> Continue </Button>
                        <Button onClick={this.back}> Back</Button>
                    </div>
                </div>
                <div>



                </div>,

            </div>
        );
    }
}
