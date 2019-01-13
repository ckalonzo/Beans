import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Navbar.css';



export default class ProviderSignedInLinks extends Component {
    render() {
        const { content } = this.props;
        return (
            <div>
                <div className="navbar-collapse collapse" id="collapsingNavbar">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link moveline" to="../../../../108_Browse/ProjectList">Browse</NavLink >
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link moveline" to="/103_Membership/Membership">Profile</NavLink >
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link moveline" to="/103_Membership/Membership">Notifications</NavLink >
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link moveline" to="/103_Membership/Membership">Membership</NavLink >
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link moveline" to="/103_Membership/Membership">Log Out</NavLink >
                        </li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <div class="inset">
                                <img src="http://rs775.pbsrc.com/albums/yy35/PhoenyxStar/link-1.jpg~c200"></img>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
        );
    }

}