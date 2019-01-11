import React, { Component } from 'react';
import "../Css/Price-Table.css"

export default class Prices extends Component {
    render() {
        return (
            <section className="sectioncolor mt-5" >
                <div className="container">
                    <div className="row">
                        <div class="col-xs-12 col-md-12">
                            <h2 id="title">Monthly Subscription and Single prices </h2>
                            <div class="hover-table-layout">
                                <div class="listing-item">
                                    <figure class="image">
                                        <img src="https://i.ytimg.com/vi/MTrzTABzLfY/maxresdefault.jpg" alt="image"></img>
                                        <figcaption>
                                            <div class="caption">
                                                <h1>$10000</h1>
                                                <p>lorem</p>
                                            </div>
                                        </figcaption>
                                    </figure>
                                    <div class="listing">
                                        <h4>Show catalogue listing</h4>
                                        <h4>Email signatures and banners</h4>
                                        <h4>E-invitations</h4>
                                        <h4>Online brochures</h4>
                                    </div>
                                </div>
                                <div class="listing-item">
                                    <figure class="image">
                                        <img src="https://i.ytimg.com/vi/MTrzTABzLfY/maxresdefault.jpg" alt="image"></img>
                                        <figcaption>
                                            <div class="caption">
                                                <h1>$ 2000</h1>
                                                <p>lorem</p>
                                            </div>
                                        </figcaption>
                                    </figure>
                                    <div class="listing">
                                        <h4>Press releases</h4>
                                        <h4>Company logos for online listings</h4>
                                        <h4>Product categories</h4>
                                        <h4>Using the ADIPEC logo on exhibitor advertising</h4>
                                        <h4>Commercial opportunities in the preview and show dailies</h4>
                                    </div>
                                </div>
                                <div class="listing-item">
                                    <figure class="image">
                                        <img src="https://i.ytimg.com/vi/MTrzTABzLfY/maxresdefault.jpg" alt="image"></img>
                                        <figcaption>
                                            <div class="caption">
                                                <h1>$100</h1>
                                                <p>lorem</p>
                                            </div>
                                        </figcaption>
                                    </figure>
                                    <div class="listing">
                                        <h4>Mobile app listing</h4>
                                        <h4>Order visitor badges</h4>
                                        <h4>Global meetings programme</h4>
                                        <h4>Get Social</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        );
    }
}
