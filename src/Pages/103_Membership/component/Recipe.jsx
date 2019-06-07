import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
//import { addShipping } from './actions/cartActions'

import "../Css/cart.css";
import axios from "axios";

class Recipe extends Component {
  handleToken(token) {
    console.log("handleToken", token);

    fetch("/api/stripe", {
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        stripeToken: token.id
      })
    })
      .then(res => res.json())
      .then(json => {
        console.log("json");
        console.log(json);
      });
  }
  handleChecked = e => {
    if (e.target.checked) {
      this.props.addShipping();
    } else {
      this.props.substractShipping();
    }
  };

  render() {
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
            stripeKey="pk_test_CxStMAxOuuw4Xz6gCv1vmNUa00QntDzcq0"
            token={this.handleToken}
            amount={this.props.total * 100}
            billingAddress
            description="Awesome Product"
            image="https://yourdomain.tld/images/logo.svg"
            locale="auto"
            name="test"
            zipCode
            panelLabel="Pay {amount}"
          />
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
    title: state.items.title
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
