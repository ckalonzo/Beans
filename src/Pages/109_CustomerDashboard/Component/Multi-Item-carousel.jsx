import React, { Component } from "react";
import Picture from "../../Profile/component/picture";

export default class MultiItemcarousel extends Component {
  render() {
    return (
      <div>
        <div
          id="carouselExampleFade"
          className="carousel slide "
          data-ride="carousel"
          data-interval="false"
        >
          <div className="carousel-inner d-flex justify-content-between">
            <div className="carousel-item active">
              <div className="card-deck">
                <div className="card disableClick ">
                  <div className="row">
                    <div className="col-5">
                      <div className="avatar white pt-4 pl-2">
                        <img
                          src="https://mdbootstrap.com/img/Others/documentation/img%20(20)-mini.jpg"
                          alt="avatar mx-auto white"
                          className="rounded-circle img-fluid disableClick "
                        />
                      </div>
                    </div>
                    <div className="col-7 pl-4 adj-button">
                      <button type="button" className="btn btn-secondary">
                        View Profile
                      </button>
                    </div>
                  </div>
                  <div className="card-body">
                    <h6 className="card-title mt-2 disableClick ">
                      Highly recommended LLC
                    </h6>
                    <div className="row">
                      <div className="col-12">
                        <div className="row">
                          {" "}
                          <div className="col-12">
                            <dt>
                              <span className="col-12">Budget</span>
                            </dt>
                            <dd>
                              <span className="col-12">$10</span>
                            </dd>
                          </div>
                          <div className="col-12">
                            <dt>
                              <span className="col-12">Rating</span>
                            </dt>
                            <dd>
                              <span className="col-sm-12">3.5 Star</span>
                            </dd>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="button-container" role="group" aria-label="...">
                      <button type="button" className="btn btn-primary mr-3">
                        Accept
                      </button>
                      <button type="button" className="btn btn-danger">
                        Deny
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="row">
                    <div className="col-5">
                      <div className="avatar white pt-4 pl-2">
                        <img
                          src="https://mdbootstrap.com/img/Others/documentation/img%20(20)-mini.jpg"
                          alt="avatar mx-auto white"
                          className="rounded-circle img-fluid"
                        />
                      </div>
                    </div>
                    <div className="col-7 pl-4 adj-button">
                      <button type="button" className="btn btn-secondary">
                        View Profile
                      </button>
                    </div>
                  </div>
                  <div className="card-body">
                    <h6 className="card-title mt-2 ">Highly recommended LLC</h6>
                    <div className="row">
                      <div className="col-12">
                        <div className="row">
                          {" "}
                          <div className="col-12">
                            <dt>
                              <span className="col-sm-12">Budget</span>
                            </dt>
                            <dd>
                              <span className="col-sm-12">$10</span>
                            </dd>
                          </div>
                          <div className="col-12">
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
                    <div className="button-container" role="group" aria-label="...">
                      <button type="button" className="btn btn-primary mr-3">
                        Accept
                      </button>
                      <button type="button" className="btn btn-danger">
                        Deny
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="row">
                    <div className="col-5">
                      <div className="avatar white pt-4 pl-2">
                        <img
                          src="https://mdbootstrap.com/img/Others/documentation/img%20(20)-mini.jpg"
                          alt="avatar mx-auto white"
                          className="rounded-circle img-fluid"
                        />
                      </div>
                    </div>
                    <div className="col-7 pl-4 adj-button">
                      <button type="button" className="btn btn-secondary">
                        View Profile
                      </button>
                    </div>
                  </div>
                  <div className="card-body">
                    <h6 className="card-title mt-2 ">Highly recommended LLC</h6>
                    <div className="row">
                      <div className="col-12">
                        <div className="row">
                          {" "}
                          <div className="col-12">
                            <dt>
                              <span className="col-sm-12">Budget</span>
                            </dt>
                            <dd>
                              <span className="col-sm-12">$10</span>
                            </dd>
                          </div>
                          <div className="col-12">
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
                    <div className="button-container" role="group" aria-label="...">
                      <button type="button" className="btn btn-primary mr-3">
                        Accept
                      </button>
                      <button type="button" className="btn btn-danger">
                        Deny
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card-group">
                <div className="card">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                    className="card-img-top"
                    alt="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This</p>
                    <p className="card-text">
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
                <div className="card">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                    className="card-img-top"
                    alt="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This card has supporting text below as a natural lead-in
                      to additional content.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
                <div className="card">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                    className="card-img-top"
                    alt="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This card has even
                      longer content than the first to show that equal height
                      action.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card-group">
                <div className="card">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                    className="card-img-top"
                    alt="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
                <div className="card">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                    className="card-img-top"
                    alt="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This card has supporting text below as a natural lead-in
                      to additional content.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
                <div className="card">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                    className="card-img-top"
                    alt="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This card has even
                      longer content than the first to show that equal height
                      action.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <a
            className="carousel-control-prev"
            href="#carouselExampleFade"
            role="button"
            data-slide="prev"
          >
            <span className="fas fa-chevron-left" aria-hidden="true" />
            <span className="sr-only">Previous</span>
                      </a> */}
          <div className="row mt-4">
            <div className="mx-auto">
              <a
                className="btn btn-primary mr-5"
                href="#carouselExampleFade"
                data-slide="prev"
              >
                <i className="fas fa-chevron-left" />
              </a>
              <a
                className="btn btn-primary"
                href="#carouselExampleFade"
                data-slide="next"
              >
                <i className="fas fa-chevron-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
