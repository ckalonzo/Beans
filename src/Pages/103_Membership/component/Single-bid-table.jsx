import React, { Component } from 'react';
import "../Css/single-pricing-cards.css";
// import EffectButton from "../component/button-effect";

export default class SingleBid extends Component {
    render() {
        return (
            <section className="sp-sectioncolor mt-5 " >
                <div className="container  mt-3">
                    <div className="row ">
                        <div className="mx-auto mb-5">
                            <h1 className="sb-title">individual Bids </h1>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-auto mb-3">
                            <div class="card colorch-btn" id="hover4">
                                <a href="#" >
                                    <div class="card-body text-center">
                                        <h2 class="card-title">1 Bids</h2>
                                        <h3 class="card-subtitle mb-2 text-muted">Price: $0.99</h3>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <button type="button" class="btn btn-success">Buy Now</button>

                                    </div>
                                </a>

                            </div>
                        </div>
                        <div class="col-auto mb-3">
                            <div class="card colorch-btn" id="hover4" >
                                <a href="#">
                                    <div class="card-body text-center">
                                        <h2 class="card-title">3 Bids</h2>
                                        <h3 class="card-subtitle mb-2 text-muted">Price: $2.99</h3>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <button type="button" class="btn btn-success">Buy Now</button>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-auto mb-3">
                            <div class="card colorch-btn" id="hover4">
                                <a href="#">
                                    <div class="card-body text-center">
                                        <h2 class="card-title">5 Bids</h2>
                                        <h3 class="card-subtitle mb-2 text-muted">Price: $4.99</h3>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <button type="button" class="btn btn-success">Buy Now</button>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-auto mb-3">
                            <div class="card colorch-btn" id="hover4">
                                <a href="#">
                                    <div class="card-body text-center">
                                        <h2 class="card-title">10 Bids</h2>
                                        <h3 class="card-subtitle mb-2 text-muted">Price: $8.99</h3>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <button type="button" class="btn btn-success">Buy Now</button>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-auto mb-3">
                            <div class="card colorch-btn" id="hover4">
                                <a href="#">
                                    <div class="card-body text-center">
                                        <h2 class="card-title">15 Bids</h2>
                                        <h3 class="card-subtitle mb-2 text-muted">Price: $13.99</h3>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <button type="button" class="btn btn-success">Buy Now</button>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-auto mb-3">
                            <div class="card colorch-btn" id="hover4">
                                <a href="#">
                                    <div class="card-body text-center">
                                        <h2 class="card-title">20 Bids</h2>
                                        <h3 class="card-subtitle mb-2 text-muted">Price: $17.99</h3>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <button type="button" class="btn btn-success">Buy Now</button>
                                    </div>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

            </section >
        );
    }
}
