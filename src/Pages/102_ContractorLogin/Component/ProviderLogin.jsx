import React, { Component } from 'react';
import '../Css/ProviderLogin.css'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

class ProviderLogin extends Component {

    state = {
        email: '',
        password: ''

    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        const { auth } = this.props;
        if (auth.uid) return <Redirect to='/105_Dashboard/Dashboard' />
        return (
            <section className="providerimg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="login-copy">
                                <p>Pro Tips:Research Pricing Schemes For Fair </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="container ">
                                <div className="login-panel mt-5">
                                    <div className="row">
                                        <h5 className="mx-auto mt-2 login-title">Sign In Your Trucked Away Dashboard</h5>
                                        <div className="container mt-3 login-outline">
                                            <div className="mx-auto login">
                                                <div className="">
                                                    <form onSubmit={this.handleSubmit}>
                                                        <div className="form-group mt-4">
                                                            <label for="InputEmail1">Email address</label>
                                                            <input
                                                                className="form-control"
                                                                type="text"
                                                                placeholder="Email"
                                                                onChange={this.handleChange}
                                                            />

                                                        </div>
                                                        <div className="form-group">
                                                            <label for="InputPassword1">Password</label>
                                                            <input
                                                                className="form-control"
                                                                type="password"
                                                                placeholder="password"
                                                                onChange={this.handleChange}
                                                            />
                                                        </div>
                                                        <div className="form-check">
                                                            <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                                                            <label className="form-check-label" for="exampleCheck1">Remember Me</label>
                                                            <a href="#" className="float-right">Forgot Password?</a>
                                                        </div>
                                                        <button
                                                            className="btn btn-primary btn-block mt-3"
                                                            type="submit"

                                                        >Log In</button>

                                                        <div className="or-seperator  mt-5"><span>OR</span></div>
                                                        <div className="text-center social-btn mb-5">
                                                            <a href="#" className="btn btn-primary btn-block"><i className="fa fa-facebook"></i> Sign in with <b>Facebook</b></a>
                                                            <a href="#" className="btn btn-danger btn-block"><i className="fa fa-google"></i> Sign in with <b>Google</b></a>
                                                        </div>

                                                    </form>

                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                    <div className="mt-5 dontHaveAnAccount">Dont have an Account? <a href="#" className="signUpLink">Sign Up Here</a></div>
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
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(ProviderLogin)