import React from "react";
import { Input } from "@progress/kendo-react-inputs";
import { MDBBtn } from "mdbreact";
const Login = props => {
  return (
    <form className="k-form" onSubmit={props.handleLogin}>
      <fieldset>
        <legend>Log in</legend>
        <div className="mb-3">
          <Input
            name="username"
            label="Username"
            required={true}
            style={{ width: "100%" }}
            value={props.username}
            onChange={props.handleUsernameChange}
          />
        </div>
        <div>
          <MDBBtn type="submit" primary={true}>
            Sign in
          </MDBBtn>
        </div>
      </fieldset>
    </form>
  );
};
export default Login;
