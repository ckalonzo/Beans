import React, { Component } from "react";
import "../Css/customerform.scss";
import { connect } from "react-redux";
import { signIn } from "../../Redux/Store/actions/authActions";
import { Redirect, Link } from "react-router-dom";

class CustomerForm extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/CustomerDashboard/CustomerDashboard" />;
    return (
      <section className="customer-img login-form">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-5">
              <div className="login-copy">
                <p>Pro Tips:Research Pricing Schemes For Fair </p>
              </div>
            </div>
            <div className="col-md-6 p-md-0">
              <div className="container p-0">
                <div className="login-panel col-12 mt-5">
                  <div className="row">
                    <div className="col-12">
                      <h1 className="mx-auto mt-2 login-title">
                        Sign In Your Trucked Away Dashboard
                      </h1>
                    </div>

                    <div className="container mt-3 login-outline p-0">
                      <div className="mx-auto login">
                        <div>
                          <form className="col-12" onSubmit={this.handleSubmit}>
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
                            <div className="form-group">
                              <label htmlFor="Password">Password</label>
                              <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Password"
                                onChange={this.handleChange}
                              />
                            </div>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck1"
                              />
                              <label
                                className="form-check-label"
                                for="exampleCheck1"
                              >
                                Remember Me
                              </label>
                              <Link
                                to="/CustomerLogin/Component/ForgotPassword"
                                className="pt-3 pb-3 float-right"
                              >
                                Forgot Password?
                              </Link>
                            </div>
                            <button
                              type="submit"
                              className="btn btn-primary btn-block mt-3"
                            >
                              Log In
                            </button>
                            <div className="center red-text">
                              {authError ? <p>{authError}</p> : null}
                            </div>
                            <div className="or-seperator  mt-5">
                              <span>OR</span>
                            </div>
                            <div className="text-center social-btn mb-5">
                              <button className="btn btn-primary btn-block">
                                <i className="fab fa-facebook-f" /> Sign in with{" "}
                                <b>Facebook</b>
                              </button>
                              <button className="btn btn-danger btn-block">
                                <i className="fab fa-google" /> Sign in with{" "}
                                <b>Google</b>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-xl-5 mt-3 dontHaveAnAccount">
                    Dont have an Account?{" "}
                    <Link
                      className="signUpLink"
                      onClick={this.signup}
                      to={"/SignUp/SignUp"}
                    >
                      Sign Up Here
                    </Link>
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

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerForm);
