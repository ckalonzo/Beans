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
          data-interval="false"
        >
          <div class="carousel-inner d-flex justify-content-between">
            <div class="carousel-item active">
              <div class="card-deck">
                <div class="card">
                  <div className="row">
                    <div className="col-5">
                      <div class="avatar white pt-4 pl-2">
                        <img
                          src="https://mdbootstrap.com/img/Others/documentation/img%20(20)-mini.jpg"
                          alt="avatar mx-auto white"
                          class="rounded-circle img-fluid"
                        />
                      </div>
                    </div>
                    <div className="col-7 pl-4 adj-button">
                      <button type="button" class="btn btn-primary">
                        View Profile
                      </button>
                    </div>
                  </div>
                  <div class="card-body">
                    <h6 class="card-title mt-2 ">Highly recommended LLC</h6>
                    <div className="row">
                      <div className="col-12">
                        <div className="row">
                          {" "}
                          <div className="col-6">
                            <dt>
                              <span className="col-sm-12">Budget</span>
                            </dt>
                            <dd>
                              <span className="col-sm-12">$10</span>
                            </dd>
                          </div>
                          <div className="col-6">
                            <dt>
                              <span className="col-sm-12">Rating</span>
                            </dt>
                            <dd>
                              <span className="col-sm-12">3.5 Star</span>
                            </dd>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="button-container" role="group" aria-label="...">
                      <button type="button" class="btn btn-primary mr-3">
                        Accept
                      </button>
                      <button type="button" class="btn btn-danger">
                        Deny
                      </button>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div className="row">
                    <div className="col-5">
                      <div class="avatar white pt-4 pl-2">
                        <img
                          src="https://mdbootstrap.com/img/Others/documentation/img%20(20)-mini.jpg"
                          alt="avatar mx-auto white"
                          class="rounded-circle img-fluid"
                        />
                      </div>
                    </div>
                    <div className="col-7 pl-4 adj-button">
                      <button type="button" class="btn btn-primary">
                        View Profile
                      </button>
                    </div>
                  </div>
                  <div class="card-body">
                    <h6 class="card-title mt-2 ">Highly recommended LLC</h6>
                    <div className="row">
                      <div className="col-12">
                        <div className="row">
                          {" "}
                          <div className="col-6">
                            <dt>
                              <span className="col-sm-12">Budget</span>
                            </dt>
                            <dd>
                              <span className="col-sm-12">$10</span>
                            </dd>
                          </div>
                          <div className="col-6">
                            <dt>
                              <span className="col-sm-12">Rating</span>
                            </dt>
                            <dd>
                              <span className="col-sm-12">3.5 Star</span>
                            </dd>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="button-container" role="group" aria-label="...">
                      <button type="button" class="btn btn-primary mr-3">
                        Accept
                      </button>
                      <button type="button" class="btn btn-danger">
                        Deny
                      </button>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div className="row">
                    <div className="col-5">
                      <div class="avatar white pt-4 pl-2">
                        <img
                          src="https://mdbootstrap.com/img/Others/documentation/img%20(20)-mini.jpg"
                          alt="avatar mx-auto white"
                          class="rounded-circle img-fluid"
                        />
                      </div>
                    </div>
                    <div className="col-7 pl-4 adj-button">
                      <button type="button" class="btn btn-primary">
                        View Profile
                      </button>
                    </div>
                  </div>
                  <div class="card-body">
                    <h6 class="card-title mt-2 ">Highly recommended LLC</h6>
                    <div className="row">
                      <div className="col-12">
                        <div className="row">
                          {" "}
                          <div className="col-6">
                            <dt>
                              <span className="col-sm-12">Budget</span>
                            </dt>
                            <dd>
                              <span className="col-sm-12">$10</span>
                            </dd>
                          </div>
                          <div className="col-6">
                            <dt>
                              <span className="col-sm-12">Rating</span>
                            </dt>
                            <dd>
                              <span className="col-sm-12">3.5 Star</span>
                            </dd>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="button-container" role="group" aria-label="...">
                      <button type="button" class="btn btn-primary mr-3">
                        Accept
                      </button>
                      <button type="button" class="btn btn-danger">
                        Deny
                      </button>
                    </div>
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
                    <p class="card-text">This</p>
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
