import React, { Component } from 'react';
import '../css/Footer.css';


export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer">
                    <div className="container">
                        <div className="row text-center d-flex justify-content-center pt-5 mb-3">
                            <div className="col-md-2 mb-3">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a className="ov-color" href="/Membership">Membership</a>
                                </h6>
                            </div>
                            <div className="col-md-2 mb-3">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a className="ov-color" href="/aboutus">About Us</a>
                                </h6>
                            </div>
                            <div className="col-md-2 mb-3">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a className="ov-color" href="/term-of-use">Terms of Use</a>
                                </h6>
                            </div>
                            <div className="col-md-2 mb-3">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a className="ov-color" href="/Contractor">Become a Contractor</a>
                                </h6>
                            </div>
                            <div className="col-md-2 mb-3">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a className="ov-color" href="/Contact">Contact</a>
                                </h6>
                            </div>



                        </div>

                    </div>
                </footer>
            </div>
        );

    }
}

