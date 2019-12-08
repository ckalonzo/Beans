import React, { Fragment, Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../../../Redux/Store/actions/authActions";
import firebase from "../../../../../Config/Firebase";

class SideMenuDesktop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      LastName: null,
      initials: null
    };
  }

  componentDidMount() {
    firebase
      .firestore()
      .collection("contractorProfile") //pointing to bids collection
      .get() // getting/fetching data
      .then(snapshot => {
        const firstName = []; //set array to get bids
        const lastName = [];
        const initials = [];

        snapshot.forEach(doc => {
          const lastNameData = doc.data().lastName;
          const firstNameData = doc.data().firstName;
          const initialsData = doc.data().initials;
          lastName.push(lastNameData);
          firstName.push(firstNameData);
          initials.push(initialsData);
        });
        this.setState({
          lastName: lastName,
          firstName: firstName,
          initials: initials
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    const props = this.props;
    return (
      <Fragment>
        <div className="author-author__info has_dropdown">
          <div className="author__avatar online">
            <NavLink
              to="#"
              className="nav-link avatarlink  nav-avatar"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="false"
              aria-expanded="false"
            >
              {this.state.initials}
            </NavLink>
          </div>

          <div className="dropdown dropdown--author">
            <div className="author-credits d-flex">
              <div className="author__avatar">
                <NavLink
                  to="#"
                  className="nav-link avatarlink  nav-avatar"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="false"
                  aria-expanded="false"
                >
                  {this.state.initials}
                </NavLink>
              </div>
              <div className="autor__info">
                <p className="name">
                  {this.state.firstName} {this.state.lastName}
                </p>
                {/* <p class="amount">{props.contractorProfile.bid}</p> */}
                <p className="name">Bids</p>
              </div>
            </div>
            <ul>
              <li>
                <Link to="/Profile/Layout/Profile">
                  <span className="fas fa-user"></span>Profile
                </Link>
              </li>
              <li>
                <Link to="/Dashboard/ContractorDashboard">
                  <span className="fas fa-home"></span> Dashboard
                </Link>
              </li>
              {/* <li>
                <Link to="/Profile/Layout/Profile">
                  <span className="fas fa-sliders-h"></span> Setting
                </Link>
              </li> */}

              <li>
                <a href="/Membership/Membership">
                  <span class="fas fa-coins"></span>Add Bids
                </a>
              </li>

              <li>
                <Link to="#" onClick={props.signOut}>
                  <span className="fas fa-sign-out-alt"></span>Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    counter: state.cart.counter,
    auth: state.firebase.auth,
    authError: state.auth,
    bids: state.bids
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideMenuDesktop);
