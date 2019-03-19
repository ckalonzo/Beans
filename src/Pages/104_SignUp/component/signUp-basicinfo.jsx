import React, { Component } from 'react'
import { Button, Icon } from 'antd';

export default class SignUpbasicinfo extends Component {
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
    state = {
        size: 'large',
    };
    render() {
        const size = this.state.size;
        const { handleChange, values } = this.props;
        return (
            <div>
                <div className="container mt-5">
                    <form onSubmit={this.handleSubmit}>
                        <div class="form-group mt-4">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="firstName"
                                onChange={this.handleChange}
                            />
                        </div>
                        <div class="form-group mt-4">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group mt-4">
                            <label htmlFor="Email">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter email"
                                onChange={this.handleChange}
                            />

                        </div>
                        <div className="form-group mt-4">
                            <label htmlFor="zipcode">Zip Code</label>
                            <input
                                type="text"
                                className="form-control"
                                id="zipcode"
                                onChange={this.handleChange}></input>

                        </div>
                        <div class="form-group mt-4">
                            <label htmlFor="typeofcar">What type of vehicle you will be driving</label>
                            <select defaultvalue={values.service} id="typeofcar" style={{ width: 300 }} onChange={handleChange('service')}>
                                <option value="Personal">Personal</option>
                                <option value="Company">company</option>
                            </select>
                        </div>

                        {/* <button type="submit" className="btn btn-primary signUp-btn btn-block mt-5 mb-3">Sign Up</button>
                        <div className="center red-text">*/}
                        {/* {authError ? <p>{authError}</p> : null} */}
                        {/* </div>  */}
                    </form>
                </div>
                <div className="row">
                    <div className="mx-auto">
                        <Button.Group size={size}>
                            <Button type="primary" onClick={this.back} className="float-left">
                                <Icon type="left" />Back
                                </Button>
                            <Button type="primary" onClick={this.continue}>
                                Continue <Icon type="right" />
                            </Button>
                        </Button.Group>
                    </div>
                </div>
            </div >









        )

    }
} 