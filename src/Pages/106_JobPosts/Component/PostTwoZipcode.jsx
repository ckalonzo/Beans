import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox } from 'antd';

class SubmitPage extends Component {
    render() {
        if (this.props.currentStep !== 20) {
            return null
        }
        const { getFieldDecorator } = this.props.form;
        return (
            <React.Fragment>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        className="form-control"
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter password"
                        value={this.props.password}
                        onChange={this.props.handleChange}
                    />
                </div>
                <button className="btn btn-success btn-block">Sign up</button>
            </React.Fragment>
        )
    }
}

export default SubmitPage;