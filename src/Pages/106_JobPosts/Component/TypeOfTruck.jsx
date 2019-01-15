import React, { Component } from "react";
import "../Css/PostJob.css";
import {
    Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, Avatar, AutoComplete,
} from 'antd';
import { Formik } from 'formik';


class BasicPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.currentStep !== 21) {
            return null
        }
        const { getFieldDecorator } = this.props.form;
        return (


            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                    className="form-control"
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Enter email"
                    value={this.props.email}
                    onChange={this.props.handleChange}
                />

            </div>
        )
    }
}

export default BasicPage;