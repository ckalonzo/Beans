import React, { Component } from "react";
import "../Css/Membership.scss";

export default class MembershipMockup extends Component {
  render() {
    return (
      <section className="ta-join">
        <div className="container">
          <div className="row mb-3">
            <div className="col-10 col-sm-9 col-md-9 col-lg-6 col-xl-12 mx-auto mt-4 text-center">
              <h2>Choose Your Plan</h2>
              <div className="row">
                <div className="col-12 mt-4">
                  <h5>Here's the reasons why you should join Trucked Away!</h5>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-sm-9 col-md-8 col-xl-5 mx-auto mt-4">
                  <ul className="pl-0">
                    <li>Lorem ipsum dolor sit amet,</li>
                    <li>Lorem ipsum dolor sit amet,</li>
                    <li>Lorem ipsum dolor sit amet,</li>
                    <li>Lorem ipsum dolor sit amet,</li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="see-our-plan">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-toggle="button"
                      aria-pressed="false"
                      autocomplete="off"
                    >
                      SEE OUR PLANS
                    </button>
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
