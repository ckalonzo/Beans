import React from 'react';

import '../css/Navbar.scss';
import { Link } from 'react-router-dom';
//Material
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const styles = theme => ({
    badge: {
        top: '50%',
        right: -3,
        // The border color match the background color.
        border: `2px solid ${
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
            }`,
    },
});

const Navbar = (props) => {
    const { classes } = props;
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
                        <a className="dropdown-item chg-text moveline" href="/104_SignUp/contractorSignUp">Sign Up</a>
                        <a className="dropdown-item chg-text moveline" href="/102_ContractorLogin/ContractorLogin">LogIn</a>
                    </div>
                </li>
                <li><Link to="/103_Membership/component/cart"><IconButton aria-label="Cart">
                    <Badge badgeContent={4} color="primary" classes={{ badge: classes.badge }}>
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton></Link></li>
            </ul>
        </React.Fragment>

    );
}
export default withStyles(styles)(Navbar);