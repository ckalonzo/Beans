import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Navbar.scss';
import { connect } from 'react-redux'
import { signOut } from '../../../../Redux/Store/actions/authActions'
import { addToCart } from '../../../../Redux/Store/actions/cartActions'
import { MDBBadge, MDBIcon } from "mdbreact";



const ProviderSignedInLinks = (props) => {

    return (
        <React.Fragment>
            <ul class="navbar-nav w-100 justify-content-center nav-section">
                <li className="nav-item">
                    <NavLink className="nav-link chg-text moveline" to="../../../../108_Browse/ProjectDashboard">Browse</NavLink >
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link chg-text moveline" to="/105_Dashboard/Dashboard">Profile</NavLink >
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link chg-text moveline" to="/103_Membership/Membership">Notifications</NavLink >
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link chg-text moveline" to="/103_Membership/Membership">Membership</NavLink >
                </li>

            </ul>
            <ul class="nav navbar-nav ml-auto w-100 justify-content-end">
                <li>
                    <NavLink to="/103_Membership/component/cart">
                        <MDBIcon icon="shopping-cart" size="2x" />
                        <MDBBadge color="danger" className="ml-2">9</MDBBadge>
                    </NavLink>
                </li>

                <li className="nav-item  chg-text moveline">
                    <a onClick={props.signOut}>Log Out</a>
                </li>
                <li>
                    <NavLink to='/' className="btn nav-avatar">
                        {props.profile.initials}
                    </NavLink>
                </li>
            </ul>
        </React.Fragment >

    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut()),
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(null, mapDispatchToProps)(ProviderSignedInLinks)