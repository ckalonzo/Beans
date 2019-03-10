import React from 'react';
import '../css/Navbar.scss';


const Navbar = () => {
    return (
        <React.Fragment>
            <ul class="navbar-nav w-100 justify-content-center nav-section">
                <li className="nav-item dropdown">
                    <a className="nav-link chg-text moveline dropdown-toggle" href="#" id="dropdown08" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Customer</a>
                    <div className="dropdown-menu rmv-border" aria-labelledby="dropdown08">
                        <a className="dropdown-item chg-text moveline" href="/104_SignUp/SignUp">Sign Up</a>
                        <a className="dropdown-item chg-text moveline" href="/101_CustomerLogin/CustomerLogin">LogIn</a>

                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link chg-text moveline" href="/103_Membership/Membership">Membership</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link  chg-text moveline dropdown-toggle" href="#" id="dropdown09" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Contractor</a>
                    <div className="dropdown-menu rmv-border" aria-labelledby="dropdown09">
                        <a className="dropdown-item chg-text moveline" href="/104_SignUp/SignUp">Sign Up</a>
                        <a className="dropdown-item chg-text moveline" href="/102_ContractorLogin/ContractorLogin">LogIn</a>
                    </div>
                </li>
            </ul>
        </React.Fragment>

    );
}
export default Navbar;