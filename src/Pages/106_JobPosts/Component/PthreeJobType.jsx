import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox } from 'antd';

class LocationPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        if (this.props.currentStep !== 31) {
            return null
        }
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                    className="form-control"
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Enter username"
                    value={this.props.username}
                    onChange={this.props.handleChange}
                />
            </div>
        )
    }
}

export default LocationPage;