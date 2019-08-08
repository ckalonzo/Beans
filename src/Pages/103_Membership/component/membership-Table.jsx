import React, { Component } from "react";
import "../Css/Price-Table.scss";
import { connect } from "react-redux";
class MembershipTable extends Component {
  render() {
    const { subscription } = this.props;
    return (
      <section className="sectioncolor mt-5">
        <div className="container">
          <div className="row">
            <div class="col-12">
              <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 class="col-12 adj-font">Monthly Subscription Packages</h1>
                <p class="lead">
                  Quickly build an effective pricing table for your potential
                  customers with this Bootstrap example. It's built with default
                  Bootstrap components and utilities with little customization.
                </p>
              </div>
              <div class="hover-table-layout">
                <div class="container">
                  <div class="card-deck mb-3 text-center">
                    <div class="card mb-4 box-shadow" id="glow">
                      <div class="card-header ovr-cardheader">
                        <h4 class="my-0 font-weight-normal">Starter</h4>
                      </div>
                      <div class="card-body">
                        <h1 class="card-title pricing-card-title adj-prices">
                          $1,000 <small class="text-muted">/ mo</small>
                        </h1>
                        <ul class="list-unstyled mt-3 mb-4">
                          <li>10 users included</li>
                          <li>2 GB of storage</li>
                          <li>Email support</li>
                          <li>Help center access</li>
                        </ul>
                        <button
                          type="button"
                          class="btn btn-lg btn-block btn-outline-primary"
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>
                    <div class="card mb-4 box-shadow" id="glow">
                      <div class="card-header ovr-cardheader">
                        <h4 class="my-0 font-weight-normal">Pro</h4>
                      </div>
                      <div class="card-body">
                        <h1 class="card-title pricing-card-title">
                          $2,000 <small class="text-muted">/ mo</small>
                        </h1>
                        <ul class="list-unstyled mt-3 mb-4">
                          <li>20 users included</li>
                          <li>10 GB of storage</li>
                          <li>Priority email support</li>
                          <li>Help center access</li>
                        </ul>
                        <button
                          type="button"
                          class="btn btn-lg btn-block btn-outline-primary"
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>
                    <div class="card mb-4 box-shadow" id="glow">
                      <div class="card-header ovr-cardheader">
                        <h4 class="my-0 font-weight-normal">Premium</h4>
                      </div>
                      <div class="card-body">
                        <h1 class="card-title pricing-card-title">
                          $5,000 <small class="text-muted">/ mo</small>
                        </h1>
                        <ul class="list-unstyled mt-3 mb-4">
                          <li>30 users included</li>
                          <li>15 GB of storage</li>
                          <li>Phone and email support</li>
                          <li>Help center access</li>
                        </ul>
                        <button
                          type="button"
                          class="btn btn-lg btn-block btn-outline-primary"
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
