import React, { Component } from "react";

export default class Review extends Component {
  render() {
    return (
      <div class="testimonial">
        <div class="testimonial__text">
          <p>
            Penatibus porttitor dui libero. Erat leo eu wisi libero augue quam
            eros sit dis pede tristique orci neque felis a eget curabitur pra
            esent cras nulla eu odio donec quis dictum morbi.
          </p>
        </div>
        <div class="testimonial__about">
          <div class="avatar v_middle">
            <img src="img/test4.jpg" alt="Testimonial Avatar" />
          </div>
          <div class="name-designation v_middle">
            <h4 class="name">Michael MacLeod</h4>
            <span class="desig">Product Designer</span>
          </div>
          <span class="quote-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 298.667 298.667"
              style="enable-background:new 0 0 298.667 298.667;"
              xml:space="preserve"
              class="svg replaced-svg"
            >
              <g>
                <g>
                  <g>
                    <polygon points="0,170.667 64,170.667 21.333,256 85.333,256 128,170.667 128,42.667 0,42.667    "></polygon>
                    <polygon points="170.667,42.667 170.667,170.667 234.667,170.667 192,256 256,256 298.667,170.667 298.667,42.667    "></polygon>
                  </g>
                </g>
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
          </span>
        </div>
      </div>
    );
  }
}
