import React, { Component } from 'react';
import './Footer.css';


export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer mt-auto py-3 fixed-bottom">
                    <div className="container">
                        <div class="row text-center d-flex justify-content-center pt-5 mb-3">
                            <div class="col-md-2 mb-3">
                                <h6 class="text-uppercase font-weight-bold">
                                    <a href="#!">About us</a>
                                </h6>
                            </div>
                            <div class="col-md-2 mb-3">
                                <h6 class="text-uppercase font-weight-bold">
                                    <a href="#!">Products</a>
                                </h6>
                            </div>
                            <div class="col-md-2 mb-3">
                                <h6 class="text-uppercase font-weight-bold">
                                    <a href="#!">Awards</a>
                                </h6>
                            </div>
                            <div class="col-md-2 mb-3">
                                <h6 class="text-uppercase font-weight-bold">
                                    <a href="#!">Help</a>
                                </h6>
                            </div>
                            <div class="col-md-2 mb-3">
                                <h6 class="text-uppercase font-weight-bold">
                                    <a href="#!">Contact</a>
                                </h6>
                            </div>



                        </div>

                    </div>
                </footer>
            </div>
        );

    }
}

