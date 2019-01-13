import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Navbar.css';


export default class CustomerSignedInLinks extends Component {
    render() {
        const { content } = this.props;
        return (
            <div>
                <div className="container">

                    <nav className="navbar navbar-expand-md navbar-dark bg-light hover-underline-menu">
                        <div className="navbar-collapse collapse" id="collapsingNavbar">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item dropdown">
                                    <a className="nav-link moveline dropdown-toggle" href="#" id="dropdown08" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Customer</a>
                                    <div className="dropdown-menu" aria-labelledby="dropdown08">
                                        <NavLink className="dropdown-item moveline" to="/104_SignUp/SignUp">Sign Up</NavLink>
                                        <NavLink className="dropdown-item moveline" to="/101_CustomerLogin/CustomerLogin">LogIn</NavLink>

                                    </div>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link moveline" to="/103_Membership/Membership">Membership</NavLink >
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link moveline dropdown-toggle" href="#" id="dropdown08" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Contractor</a>
                                    <div className="dropdown-menu" aria-labelledby="dropdown08">
                                        <NavLink className="dropdown-item moveline" href="/SignUp">Sign Up</NavLink >
                                        <NavLink className="dropdown-item moveline" href="/102_ContractorLogin/ContractorLogin">LogIn</NavLink >
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