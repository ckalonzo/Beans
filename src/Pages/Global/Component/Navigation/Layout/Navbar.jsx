import React from 'react'
import { Link } from 'react-router-dom'
import ProviderSignedInLinks from "./ProviderSignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from 'react-redux'

const Navbar = (props) => {
    const { auth, profile } = props;
    // display links if user is signed in or out
    const links = auth.uid ? <ProviderSignedInLinks profile={profile} /> : <SignedOutLinks />;
    return (
        <nav className="navbar navbar-expand-md  hover-underline-menu">
            <div className="container">
                <Link to='/' className="navbar-brand"></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {links}
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)
