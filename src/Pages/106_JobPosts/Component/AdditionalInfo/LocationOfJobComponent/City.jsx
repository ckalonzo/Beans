import React, { Component } from "react";
import { Input } from 'antd';
import "../../../Css/PostJob.css";

const InputGroup = Input.Group;


export default class City extends Component {

    render() {
        const { handleChange, city } = this.props;
        return (
            <React.Fragment>
                <InputGroup className="mx-auto" size="large">
                    <Input className="city-container" onChange={handleChange('city')} style={{ width: '100%' }} id={city} placeholder="City" />
                </InputGroup>
            </React.Fragment>
        )
    }
}

