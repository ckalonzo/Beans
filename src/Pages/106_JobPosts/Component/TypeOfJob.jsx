import React, { Component } from 'react'
import "../Css/PostJob.css";
import { Select } from 'antd';



const Option = Select.Option;

function handleChange(value) {
    console.log(`selected ${value}`);
}
export default class TypeOfJob extends Component {
    constructor(props) {
        super(props);
    }

    render() {
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
                            <Select defaultValue="PLEASE SELECT FROM THE LIST BELOW" style={{ width: 300 }} onChange={handleChange}>
                                <Option value="Junk Removal">Junk Removal</Option>
                                <Option value="Cleaner Service">Cleaner Service</Option>
                            </Select>
                        </div>
                    </div>
                </div>
                <div>



                </div>,

            </div>
        );
    }
}
