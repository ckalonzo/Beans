import React, { Component } from 'react';
import '../Css/ProviderLogin.css'


export default class ProviderLogin extends Component {
    render() {
        return (
            <section className="login-img-cus">
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
                                                    <form>
                                                        <div class="form-group mt-4">
                                                            <label for="InputEmail1">Email address</label>
                                                            <input type="email" class="form-control" id="InputEmail1" placeholder="Enter email"></input>

                                                        </div>
                                                        <div class="form-group">
                                                            <label for="InputPassword1">Password</label>
                                                            <input type="password" class="form-control" id="InputPassword1" placeholder="Password"></input>
                                                        </div>
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                                                            <label class="form-check-label" for="exampleCheck1">Remember Me</label>
                                                            <a href="#" class="float-right">Forgot Password?</a>
                                                        </div>
                                                        <button type="submit" class="btn btn-primary btn-block mt-3">Log In</button>

                                                        <div class="or-seperator  mt-5"><span>OR</span></div>
                                                        <div class="text-center social-btn mb-5">
                                                            <a href="#" class="btn btn-primary btn-block"><i class="fa fa-facebook"></i> Sign in with <b>Facebook</b></a>
                                                            <a href="#" class="btn btn-danger btn-block"><i class="fa fa-google"></i> Sign in with <b>Google</b></a>
                                                        </div>

                                                    </form>

                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                    <div className="mt-5 dontHaveAnAccount">Dont have an Account? <a className="signUpLink">Sign Up Here</a></div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        );
    }
}