import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
//import { addShipping } from './actions/cartActions'
import "../Css/cart.css";
import STRIPE_PUBLISHABLE from "./constants/stripe";
import PAYMENT_SERVER_URL from "./constants/server";

const CURRENCY = "USD";
const fromEuroToCent = amount => amount * 100;

const successPayment = data => {
  alert("Payment Successful");
};

const errorPayment = data => {
  alert("Payment Error");
  console.log(data);
};

const onToken = (amount, description) => token =>
  axios
    .post(PAYMENT_SERVER_URL, {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromEuroToCent(amount)
    })
    .then(successPayment)
    .catch(errorPayment);
const Checkout = ({ name, description, amount }) => (
  <StripeCheckout
    name={name}
    description={description}
    amount={fromEuroToCent(amount)}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
  />
);
class Recipe extends Component {
  handleChecked = e => {
    if (e.target.checked) {
      this.props.addShipping();
    } else {
      this.props.substractShipping();
    }
  };

  render() {
    const { name, description, amount } = this.props;
    return (
      <div className="container">
        <div className="collection">
          <li className="collection-item">
            <label>
              {/* <input type="checkbox" ref="shipping" onChange={this.handleChecked} />
                            <span>Shipping(+6$)</span> */}
            </label>
          </li>
          <li className="collection-item">
            <b>Total: ${this.props.total.toFixed(2)} </b>
          </li>
        </div>
        <div className="checkout">
          <StripeCheckout
            name={name}
            description={description}
            amount={fromEuroToCent(amount)}
            token={onToken(amount, description)}
            currency={CURRENCY}
            stripeKey={STRIPE_PUBLISHABLE}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    addedItems: state.items.addedItems,
    total: state.items.total,
    amount: state.items.total,
    title: state.items.title,
    description: state.items.desc
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addShipping: () => {
      dispatch({ type: "ADD_SHIPPING" });
    },
    substractShipping: () => {
      dispatch({ type: "SUB_SHIPPING" });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recipe);
