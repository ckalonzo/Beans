import React, { Component } from "react";
import Picture from "../../Profile/component/picture";

export default class MultiItemcarousel extends Component {
  render() {
    return (
      <div>
        <div
          id="carouselExampleFade"
          class="carousel slide "
          data-ride="carousel"
        >
          <div class="carousel-inner d-flex justify-content-between">
            <div class="carousel-item active">
              <div class="card-deck">
                <div class="card">
                  <div class="avatar mx-auto white pt-4">
                    <img
                      src="https://mdbootstrap.com/img/Others/documentation/img%20(20)-mini.jpg"
                      alt="avatar mx-auto white"
                      class="rounded-circle img-fluid"
                    />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Highly recommended LLC</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <div className="row">
                      <div className="col-12">
                        <button type="button" class="btn btn-primary">
                          View Profile
                        </button>
                      </div>
                    </div>

                    <dt>
                      <span className="col-sm-12">Budget</span>
                    </dt>
                    <dd>
                      <span className="col-sm-12">$10</span>
                    </dd>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>

                    <div class="btn-group" role="group" aria-label="...">
                      <button type="button" class="btn btn-primary">
                        Accept
                      </button>
                      <button type="button" class="btn btn-danger">
                        Deny
                      </button>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                    class="card-img-top"
                    alt="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This card has supporting text below as a natural lead-in
                      to additional content.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
                <div class="card">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                    class="card-img-top"
                    alt="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This card has even
                      longer content than the first to show that equal height
                      action.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="card-group">
                <div class="card">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                    class="card-img-top"
                    alt="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
                <div class="card">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                    class="card-img-top"
                    alt="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This card has supporting text below as a natural lead-in
                      to additional content.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
                <div class="card">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                    class="card-img-top"
                    alt="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This card has even
                      longer content than the first to show that equal height
                      action.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="card-group">
                <div class="card">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                    class="card-img-top"
                    alt="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
                <div class="card">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                    class="card-img-top"
                    alt="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This card has supporting text below as a natural lead-in
                      to additional content.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
                <div class="card">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                    class="card-img-top"
                    alt="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This card has even
                      longer content than the first to show that equal height
                      action.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <a
            class="carousel-control-prev"
            href="#carouselExampleFade"
            role="button"
            data-slide="prev"
          >
            <span class="fas fa-chevron-left" aria-hidden="true" />
            <span class="sr-only">Previous</span>
                      </a> */}
          <div className="row mt-4">
            <div class="mx-auto">
              <a
                class="btn btn-primary mr-5"
                href="#carouselExampleFade"
                data-slide="prev"
              >
                <i class="fas fa-chevron-left" />
              </a>
              <a
                class="btn btn-primary"
                href="#carouselExampleFade"
                data-slide="next"
              >
                <i class="fas fa-chevron-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
