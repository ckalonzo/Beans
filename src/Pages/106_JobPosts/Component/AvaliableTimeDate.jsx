import React, { Component } from "react";
import { Select } from 'antd';



const Option = Select.Option;

function handleChange(value) {
    console.log(`selected ${value}`);
}
class AvaliableTimeDate extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="className container">
                    <div className="row">
                        <div className="col-12">
                            <div className="col-6  offset-3 text-center mb-5">
                                <Select defaultValue="Location Of Job" style={{ width: 300 }} onChange={handleChange}>
                                    <Option value="Junk Removal">Junk Removal</Option>
                                    <Option value="Cleaner Service">Cleaner Service</Option>
                                </Select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AvaliableTimeDate;