import React, { Component } from 'react';
import '../Css/customerform.scss'
import { connect } from 'react-redux';
import { signIn } from '../../Redux/Store/actions/authActions'
import { Redirect } from 'react-router-dom'

class CustomerForm extends Component {

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
        this.props.signIn(this.state);
    }


    render() {
        const { authError, auth } = this.props;
        if (auth.uid) return <Redirect to='/109_CustomerDashboard/CustomerDashboard' />
        return (
            <section className="customer-img">
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
                                    <div className="col-12">
                                    <h5 className="mx-auto mt-2 login-title">Sign In Your Trucked Away Dashboard</h5>
                                        <div className="container mt-3 login-outline">
                                            <div className="mx-auto login">
                                                <div className="">
                                                    <form onSubmit={this.handleSubmit}>
                                                        <div class="form-group mt-4">
                                                            <label htmlFor="Email">Email address</label>
                                                            <input
                                                                type="email"
                                                                className="form-control"
                                                                id="email"
                                                                placeholder="Enter email"
                                                                onChange={this.handleChange}>
                                                            </input>

                                                        </div>
                                                        <div class="form-group">
                                                            <label htmlFor="Password">Password</label>
                                                            <input
                                                                type="password"
                                                                className="form-control"
                                                                id="password"
                                                                placeholder="Password"
                                                                onChange={this.handleChange}>
                                                            </input>
                                                        </div>
                                                        <div class="form-check">
                                                            <input
                                                                type="checkbox"
                                                                className="form-check-input"
                                                                id="exampleCheck1">
                                                            </input>
                                                            <label class="form-check-label" for="exampleCheck1">Remember Me</label>
                                                            <a
                                                                href="/101_CustomerLogin/Component/ForgotPassword"
                                                                className="float-right">Forgot Password?
                                                            </a>
                                                        </div>
                                                        <button
                                                            type="submit"
                                                            className="btn btn-primary btn-block mt-3">Log In
                                                        </button>
                                                        <div className="center red-text">
                                                            {authError ? <p>{authError}</p> : null}
                                                        </div>
                                                        <div className="or-seperator  mt-5"><span>OR</span></div>
                                                        <div className="text-center social-btn mb-5">
                                                            <a href="#" class="btn btn-primary btn-block"><i className="fa fa-facebook"></i> Sign in with <b>Facebook</b></a>
                                                            <a href="#" class="btn btn-danger btn-block"><i className="fa fa-google"></i> Sign in with <b>Google</b></a>
                                                        </div>

                                                    </form>

                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                    </div>
                                        
                                    <div className="mt-5 dontHaveAnAccount">Dont have an Account? <a className="signUpLink" onClick={this.signup}>Sign Up Here</a></div>
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
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerForm)