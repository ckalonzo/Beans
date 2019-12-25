import React, { Component } from "react";
import TextInput from "../../Global/Input/TextInput";
import Input from "../../Global/Input/Input";
import Email from "../../Global/Input/Email";
import Button from "../../Global/Input/Button";
class SignUpbasicinfo extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { handleChange, firstName, lastName } = this.props;
    console.log(this.props);
    return (
      <div>
        <div className="container mt-5">
          <div className=" mx-auto">
            <h2 className="">Basic Information</h2>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group mt-4">
              <label id="firstName" htmlFor="firstName">
                First Name
              </label>
              <Input
                type="text"
                className="form-control"
                id="firstName"
                onChange={handleChange("firstName")}
                name="firstName"
                value={firstName}
              />
            </div>
            <div className="form-group mt-4">
              <label htmlFor="lastName">Last Name</label>
              <Input
                type={"text"}
                className={"form-control"}
                id={"lastName"}
                onChange={handleChange("lastName")}
                value={lastName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Password">Password</label>
              <Input
                type="password"
                className="form-control"
                id="password"
                onChange={handleChange}
              />
            </div>
            <div className="form-group mt-4">
              <label htmlFor="Email">Email address</label>
              <Input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group mt-4">
              <label htmlFor="zipcode">Zip Code</label>
              <Input
                type="text"
                className="form-control"
                id="zipcode"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group mt-4">
              <label htmlFor="typeofcar">
                What type of vehicle you will be driving
              </label>
              <select
                //defaultvalue={values.service}
                id="typeofcar"
                style={{ width: 300 }}
                onChange={handleChange}
              >
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
            <Button type="button" labelName="Back" onClick={this.back} />

            <Button
              type="button"
              onClick={this.continue}
              labelName="Continue"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpbasicinfo;
