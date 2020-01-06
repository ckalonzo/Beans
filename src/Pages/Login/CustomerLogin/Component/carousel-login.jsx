import React, { Component } from "react";

export default class CarouselLogin extends Component {
  render(props) {
    return (
      <div class="container adj-top">
        <div
          id="carouselExample1"
          class="carousel slide z-depth-1-half"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="login-copy col-11 no-gutters">
                <p>{this.props.slide1}</p>
              </div>
            </div>
            <div class="carousel-item">
              <div className="login-copy col-11 no-gutters">
                <p> {this.props.slide2}</p>
              </div>
            </div>
            <div class="carousel-item">
              <div className="login-copy col-11 no-gutters">
                <p>{this.props.slide3}</p>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExample1"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExample1"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}
