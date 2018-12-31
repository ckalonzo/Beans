import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import NavbarLinks from '../content/Navbar';


export default class Navbar extends Component {
    render() {
        const { content } = this.props;
        return (
            <div>
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                        <Link className="navbar-brand" to="/"> < img src="../img/truckedaway-wh-bg.jpg" width="30" height="30" alt="" ></img></Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Membership">Membership</Link>
                                </li>

                            </ul>

                        </div>
                    </nav>
                </div>

            </div>
        );
    }

}