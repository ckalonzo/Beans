import React, { Component } from "react";
import "./sass/ResetPassword.scss";
import { connect } from "react-redux";
import { signIn, forgotPassword } from "../Redux/Store/actions/authActions";
class ForgotPassword extends Component {
  constructor() {
    super();
    this.state = {
      email: ""
    };
  }

  componentWillMount = () => {
    window.scrollTo(0, 0);
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  renderAlert = message => {
    if (message)
      return (
        <div className="row">
          <div class="col-md-4 offset-md-4 alert alert-danger" role="alert">
            {message}
          </div>
        </div>
      );
  };

  renderButton = flag => {
    if (flag === false) {
      return (
        <button className="btn btn-secondary btn-lg" disabled>
          send email
        </button>
      );
    } else {
      return (
        <button className="btn btn-primary" onClick={this.resetPassword}>
          send email
        </button>
      );
    }
  };
  resetPassword = e => {
    e.preventDefault();
    let email = document.getElementById("email").value;
    //if(this.state.email.length ){
    this.props.forgotPassword(email);
    //}
  };
  render() {
    const email = this.props.auth.email;
    console.log("====>", this);
    return (
      <section className="forgotPassword">
        <div className="container">
          {this.renderAlert(this.props.resetError.authError)}
          <div className="row">
            <div className="col-7 mx-auto mt-4 addcolor -ta_mb-105">
              <div className="row mb-3">
                <div className="col-12 offset-xl-3 col-xl-8">
                  <h2 className="ovr-title">Trucked Away</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-12 ">
                  <div className="row">
                    <div className="col-11 offset-1 ovr-copy">
                      <p>Forgot Your Password? Dont worry, we got your back.</p>
                    </div>
                  </div>
                </div>
              </div>
              <form className="col-12" onSubmit={this.handleSubmit}>
                <div className="form-group mt-4">
                  <label className="rp-email" htmlFor="Email">
                    Email address
                  </label>
                  <input
                    type={"email"}
                    name={"email"}
                    id={"email"}
                    className={"form-control input-lg"}
                    placeholder={"Email"}
                    onBlur={this.onBlur}
                    onChange={this.onChange}
                    defaultValue={email}
                  />
                  {this.renderButton(this.props.resetError)}
                </div>
                {/* <Button
                  type="submit"
                  buttonClassName="btn-block mt-3 col-6 mx-auto resetbtn"
                  labelName="Reset Password"
                /> */}
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    resetError: state.auth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds)),
    forgotPassword: email => dispatch(forgotPassword(email))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
