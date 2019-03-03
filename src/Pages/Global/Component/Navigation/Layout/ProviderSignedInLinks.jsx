import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Navbar.css';
import { connect } from 'react-redux'
import { signOut } from '../../../../Redux/Store/actions/authActions'


const ProviderSignedInLinks = (props) => {

    return (
        <div>
            <div className="navbar-collapse collapse" id="collapsingNavbar">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link moveline" to="../../../../108_Browse/ProjectDashboard">Browse</NavLink >
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
                        <a onClick={props.signOut}>Log Out</a>
                    </li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <NavLink to='/' className="btn btn-floating pink lighten-1">
                            {props.profile.initials}
                        </NavLink>
                    </li>
                </ul>

            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(ProviderSignedInLinks)