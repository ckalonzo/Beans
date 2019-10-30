import React from "react";
import { Elements } from "react-stripe-elements";

import InjectedCheckoutForm from "./CheckoutForm";

import React from "react";

const MyStoreCheckout = props => {
  return (
    <Elements>
      <InjectedCheckoutForm handleResult={this.props.handleResult} />
    </Elements>
  );
};

export default MyStoreCheckout;
