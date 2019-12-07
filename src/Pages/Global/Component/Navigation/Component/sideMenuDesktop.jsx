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
        <div class="author-author__info has_dropdown">
          <div class="author__avatar online">
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

          <div class="dropdown dropdown--author">
            <div class="author-credits d-flex">
              <div class="author__avatar">
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
              <div class="autor__info">
                <p class="name">
                  {this.state.firstName} {this.state.lastName}
                </p>
                <p class="amount">{props.contractorProfile.bid}</p>
                <p class="name">Bids</p>
              </div>
            </div>
            <ul>
              <li>
                <a href="author.html">
                  <span class="fas fa-user"></span>Profile
                </a>
              </li>
              <li>
                <a href="dashboard.html">
                  <span class="fas fa-home"></span> Dashboard
                </a>
              </li>
              <li>
                <a href="dashboard-setting.html">
                  <span class="fas fa-sliders-h"></span> Setting
                </a>
              </li>

              <li>
                <a href="dashboard-add-credit.html">
                  <span class="fas fa-coins"></span>Add Bids
                </a>
              </li>

              <li>
                <a href="#">
                  <span class="fas fa-sign-out-alt"></span>Logout
                </a>
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
    addToCart: (id, counter) => {
      dispatch(addToCart(id, counter));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideMenuDesktop);
