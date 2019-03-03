import React, { Component } from "react"
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../Redux/Store/actions/authActions'


class SignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        zipCode: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
    }


    render() {
        const { auth, authError } = this.props;
        if (auth.uid) return <Redirect to='/105_Dashboard/Dashboard' />
        return (
            <section className="signup-img-cus">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-3">
                            <div className="container ">
                                <div className="signup-panel mt-2">
                                    <div className="row">
                                        <div className="container mt-3 login-outline">
                                            <div className="mx-auto login">
                                                <div className="">
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

                                                        <button type="submit" className="btn btn-primary btn-block mt-5 mb-3">Sign Up</button>
                                                        <div className="center red-text">
                                                            {authError ? <p>{authError}</p> : null}
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (creds) => dispatch(signUp(creds))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)