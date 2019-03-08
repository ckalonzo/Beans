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
    
    <nav class="navbar navbar-light navbar-expand-md bg-faded justify-content-center nav-section hover-underline-menu">
    <div className="container">
    <Link to="/" class="navbar-brand d-flex w-50 mr-auto"></Link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse collapse w-100" id="collapsingNavbar3">
        {links}
    </div>
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
