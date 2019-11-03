import React, { Component } from "react";
import "../Css/Price-Table.scss";
import { connect } from "react-redux";
class MembershipTable extends Component {
  render() {
    return (
      <section className="sectioncolor mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
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
                    <div className="card mb-4 box-shadow" id="glow">
                      <div className="card-header ovr-cardheader">
                        <h4 className="my-0 font-weight-normal">Starter</h4>
                      </div>
                      <div className="card-body">
                        <h1 className="card-title pricing-card-title adj-prices">
                          $1,000 <small className="text-muted">/ mo</small>
                        </h1>
                        <ul className="list-unstyled mt-3 mb-4">
                          <li>10 users included</li>
                          <li>2 GB of storage</li>
                          <li>Email support</li>
                          <li>Help center access</li>
                        </ul>
                        <button
                          type="button"
                          className="btn btn-lg btn-block btn-outline-primary"
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>
                    <div className="card mb-4 box-shadow" id="glow">
                      <div className="card-header ovr-cardheader">
                        <h4 className="my-0 font-weight-normal">Pro</h4>
                      </div>
                      <div className="card-body">
                        <h1 className="card-title pricing-card-title">
                          $2,000 <small className="text-muted">/ mo</small>
                        </h1>
                        <ul className="list-unstyled mt-3 mb-4">
                          <li>20 users included</li>
                          <li>10 GB of storage</li>
                          <li>Priority email support</li>
                          <li>Help center access</li>
                        </ul>
                        <button
                          type="button"
                          className="btn btn-lg btn-block btn-outline-primary"
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>
                    <div className="card mb-4 box-shadow" id="glow">
                      <div className="card-header ovr-cardheader">
                        <h4 className="my-0 font-weight-normal">Premium</h4>
                      </div>
                      <div className="card-body">
                        <h1 className="card-title pricing-card-title">
                          $5,000 <small className="text-muted">/ mo</small>
                        </h1>
                        <ul className="list-unstyled mt-3 mb-4">
                          <li>30 users included</li>
                          <li>15 GB of storage</li>
                          <li>Phone and email support</li>
                          <li>Help center access</li>
                        </ul>
                        <button
                          type="button"
                          className="btn btn-lg btn-block btn-outline-primary"
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>
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
export default connect()(MembershipTable);
