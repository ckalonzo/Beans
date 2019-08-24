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
                  <h2 className="img-content-title">What we offer</h2>
                </div>
                <div className="col-12 mb-3 img-content-sub-title">
                  <h5>
                    We offer the best and simple solution to have your service
                    done when you want it{" "}
                  </h5>
                </div>
                <div className="img-content-copy">
                  <ul className="p-0 no--bullets">
                    <li>
                      <p>Morbi pulvinar massa vitae sem cursus ferlentu</p>
                    </li>
                    <li>
                      <p>Morbi pulvinar massa vitae sem cursus ferlentu</p>
                    </li>
                    <li>
                      <p>Morbi pulvinar massa vitae sem cursus ferlentu</p>
                    </li>
                    <li>
                      <p>Morbi pulvinar massa vitae sem cursus ferlentu</p>
                    </li>
                    <li>
                      <p>Morbi pulvinar massa vitae sem cursus ferlentu</p>
                    </li>
                    <li>
                      <p>Morbi pulvinar massa vitae sem cursus ferlentu</p>
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
