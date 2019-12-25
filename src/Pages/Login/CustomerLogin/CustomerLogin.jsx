import React, { Component } from "react";
import CustomerForm from "./Component/CustomerForm";

class CustomerLogin extends Component {
  componentWillMount = () => {
    window.scrollTo(0, 0);
  };
  render() {
    return (
      <div>
        <CustomerForm />
      </div>
    );
  }
}

export default CustomerLogin;
