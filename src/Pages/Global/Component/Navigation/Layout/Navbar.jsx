import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';


export default class Navbar extends Component {
    render() {
        const { content } = this.props;
        return (
            <div>
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-dark bg-light hover-underline-menu">
                        <a className="navbar-brand" to="/Home"></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse collapse" id="collapsingNavbar">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item dropdown">
                                    <a className="nav-link moveline dropdown-toggle" href="#" id="dropdown08" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Customer</a>
                                    <div className="dropdown-menu" aria-labelledby="dropdown08">
                                        <a className="dropdown-item moveline" href="/SignUp">Sign Up</a>
                                        <a className="dropdown-item moveline" href="/101_CustomerLogin/CustomerLogin">LogIn</a>

                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link moveline" to="/Membership">Membership</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link moveline dropdown-toggle" href="#" id="dropdown08" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Contractor</a>
                                    <div className="dropdown-menu" aria-labelledby="dropdown08">
                                        <a className="dropdown-item moveline" href="/SignUp">Sign Up</a>
                                        <a className="dropdown-item moveline" href="/102_ContractorLogin/ContractorLogin">LogIn</a>
                                    </div>
                                </li>
                            </ul>

                        </div>
                    </nav>
                </div>
            </div>
        );
    }

}