import React, { Component } from "react";
import "../Css/Price-Table.scss";
import { connect } from "react-redux";
import { addSubToCart } from "../../Redux/Store/actions/subscriptionAction";
import Recipe from "./Recipe";

class MembershipTable extends Component {
  handleClick = (id, counter, price) => {
    this.props.addSubToCart(id, counter);
    console.log(id);
    console.log(price);
    console.log("counter" + counter);
    return <Recipe />;
  };

  render() {
    let subscriptionList = this.props.subscriptions.subscriptions.map(
      subscription => {
        return (
          <div className="card mb-4 box-shadow" id="glow" key={subscription.id}>
            <div className="card-header ovr-cardheader">
              <h4 className="my-0 font-weight-normal">{subscription.title}</h4>
            </div>
            <div className="card-body">
              <div className="card-title pricing-card-title adj-prices">
                <h2 className="">${subscription.price}</h2>
              </div>
              <div className="reaccuring">
                <span>per month</span>
              </div>
              <div className=" -ta_mt-10 seperator"></div>
              <ul className="list-unstyled mt-3 mb-4">
                <li>{subscription.desc1}</li>
                <li>{subscription.desc2}</li>
                <li>{subscription.desc3}</li>
                <li>{subscription.desc4}</li>
              </ul>
              <Recipe />
              {/* <a
                href="#"
                type="button"
                className="btn btn-lg btn-block btn-outline-primary"
                onClick={() => {
                  this.handleClick(subscription.id, this.props.counter);
                }}
              >
                Buy Now
              </a> */}
            </div>
          </div>
        );
      }
    );

    return (
      <section className="sectioncolor mt-5">
        <div className="container">
          <div className="row">
            {" "}
            <div className="col-12  key={subscription.id}">
              <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="col-12 adj-font">
                  Monthly Subscription Packages
                </h1>
                <p className="lead">
                  Quickly build an effective pricing table for your potential
                  customers with this Bootstrap example. It's built with default
                  Bootstrap components and utilities with little customization.
                </p>
              </div>
              <div className="hover-table-layout">
                <div className="container">
                  <div className="card-deck mb-3 text-center">
                    {subscriptionList}
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
  console.log(state);
  return {
    subscriptions: state.subscriptionReducer,
    counter: state.counterReducer
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addSubToCart: (id, counter) => {
      dispatch(addSubToCart(id, counter));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MembershipTable);
