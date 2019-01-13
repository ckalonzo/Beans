import React, { Component } from 'react';
import '../Css/Login.css'
import  firebaseApp  from '../../../Firebase';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
          email: '',
          password: ''
        };
      }
    
      handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
    
      login(e) {
        e.preventDefault();
        firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).catch((error) => {
            console.log(error);
          });
      }

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
                                                        <div className="form-group mt-4">
                                                            <label for="InputEmail1">Email address</label>
                                                            <input value={this.state.email} onChange={this.handleChange} type="email" 
                                                            name="email" className="form-control" id="exampleInputEmail1" 
                                                            aria-describedby="emailHelp" placeholder="Enter email" />

                                                        </div>
                                                        <div className="form-group">
                                                            <label for="InputPassword1">Password</label>
                                                            <input value={this.state.password} onChange={this.handleChange} 
                                                            type="password" name="password" className="form-control" 
                                                            id="exampleInputPassword1" placeholder="Password" />
                                                        </div>
                                                        <div className="form-check">
                                                            <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                                                            <label className="form-check-label" for="exampleCheck1">Remember Me</label>
                                                            <a href="#" className="float-right">Forgot Password?</a>
                                                        </div>
                                                        <button type="submit" onClick={this.login} className="btn btn-primary">Login</button>

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