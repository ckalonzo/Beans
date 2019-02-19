import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import ProviderSignedInLinks from "./ProviderSignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md  hover-underline-menu">
                    <div className="container">
                        <Link to='/' className="navbar-brand"></Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <ProviderSignedInLinks />
                        <SignedOutLinks />

                    </div>
                </nav>
            </div>
        );
    }

}