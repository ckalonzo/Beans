import React, { Component } from 'react';
import '../Css/Login.css'


export default class Login extends Component {
    render() {
        return (
            <section className="login-img-cus">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="login-copy">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                     when an unknown printer took a galley of type and scrambled it to make a type
                                      specimen book. It has survived not only five centuries, but also the
                                      leap into electronic </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="container">
                                <div className="login-panel mt-5">
                                    <div className="row">
                                        <h5 className="mx-auto mt-2 login-title">Sign In Your Trucked Away Dashboard</h5>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        );
    }
}