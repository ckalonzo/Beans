import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import NavbarLinks from '../content/Navbar';
//import { moveLine } from '../js/Moveline'

export default class Navbar extends Component {
    render() {
        const { content } = this.props;
        return (
            <div>
                <nav class="navbar navbar-expand-md navbar-dark bg-light hover-underline-menu">
                    <a class="navbar-brand" to="/Home"></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="navbar-collapse collapse" id="collapsingNavbar">
                        <ul class="navbar-nav mx-auto">
                            <li class="nav-item dropdown">
                                <a class="nav-link moveline dropdown-toggle" href="#" id="dropdown08" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Customer</a>
                                <div class="dropdown-menu" aria-labelledby="dropdown08">
                                    <a class="dropdown-item moveline" href="/SignUp">Sign Up</a>
                                    <a class="dropdown-item moveline" href="/Login">LogIn</a>

                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link moveline" to="/Membership">Membership</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link moveline dropdown-toggle" href="#" id="dropdown08" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Contractor</a>
                                <div class="dropdown-menu" aria-labelledby="dropdown08">
                                    <a class="dropdown-item moveline" href="/SignUp">Sign Up</a>
                                    <a class="dropdown-item moveline" href="/Login">LogIn</a>
                                </div>
                            </li>
                        </ul>

                    </div>
                </nav>

            </div>
        );
    }

}