import React, { Component } from "react";
import "./css/content-panel--img.scss";

export default class ContentPanelImg extends Component {
  render() {
    return (
      <section className="wwo mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="img-panel" />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="col-12  mt-5">
                <div className="col-md-12 col-sm-12">
                  <h2 className="img-content-title text-center -ta_mb-25">
                    What we offer
                  </h2>
                </div>
                <div className="col-12 col-md-8 offset-md-2 col-lg-12 offset-lg-0 col-xl-10 offset-xl-1 mb-3 img-content-sub-title">
                  <h5>
                    We offer the best and simple solution to have your service
                    done when you want it{" "}
                  </h5>
                </div>
                <div className="img-content-copy col-12 -ta_pl-xl-5">
                  <ul className="text-left -ta_pl-30">
                    <li>
                      <p>Trucked Away allows the customer to set Budget.</p>
                    </li>
                    <li>
                      <p>Anyone can join as contractor if you have a skill. </p>
                    </li>
                    <li>
                      <p>All you need is a pickup truck or larger. </p>
                    </li>
                    <li>
                      <p>Paid on spot by customer. </p>
                    </li>
                    <li>
                      <p>
                        Truck Away allows customer to choose their contractor by
                        viewing profile.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
