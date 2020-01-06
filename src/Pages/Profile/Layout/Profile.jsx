import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import ActiveMember from "../component/ActiveMember";
import CompanyName from "../component/companyName";
import NumberofJobs from "../component/NumberofJobs";
import PersonName from "../component/personName";
import Picture from "../component/picture";
// import ProfileLocation from "../component/ProfileLocation";
import AvgRating from "../component/Rating";
import TypeOfJobs from "../component/typeOfJobs";
import ProfileHero from "../component/ProfileHero";
import OutlinedTextFields from "../component/multiline-Input";
import Skills from "../component/Skills";
import History from "../component/History";
import Reviews from "../component/Reviews";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose, bindActionCreators } from "redux";
import Button from "../../Global/Input/Button";
import UpdateProfile from "../updateProfile/updateProfile";
import { fetchContractorProfileAction } from "../../Redux/Store/actions/contractorProfileActions";
import firebase from "../../../Config/Firebase";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      update: false,
      contractorProfile: null
    };
  }
  updateProfile = e => {
    e.preventDefault();
    const { update } = this.state;
    this.setState({
      update: !this.state.update
    });
  };
  componentDidMount() {
    console.log("didmount");
    //this.props.actions.fetchContractorProfileAction();

    firebase
      .firestore()
      .collection("contractorProfile") //pointing to contractorProfile collection
      .doc()
      .get() // getting/fetching data
      .then(snapshot => {
        console.log(snapshot);
        const contractorProfile = []; //set array to get contractorProfile
        // snapshot.forEach(doc => {
        //   const data = doc.data(); //get data from each document in the contractorProfile collection
        //   console.log("data" + data);
        //   contractorProfile.push(data); // once I have data push it to the contractorProfile array
        // });
        // this.setState({ contractorProfile: contractorProfile });
      })
      .catch(error => console.log(error));
  }
  render() {
    const { contractorProfile } = this.props;
    if (this.state.update === true)
      return (
        <Redirect to="/Profile/updateProfile/updateProfile" update={false} />
      );

    return (
      <React.Fragment>
        <section className="profile">
          <ProfileHero />
          <div className="container">
            <div className="row">
              <div className="col-12 adj-bot shadow">
                <div className="row">
                  <div className="col-3">
                    <Picture />
                    <div className="mt-3">
                      {this.props.contractorProfile.firstName}
                      <TypeOfJobs contractorProfile={contractorProfile} />
                    </div>
                    <div className="mt-3">
                      {/* <ProfileLocation contractorProfile={contractorProfile} /> */}
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="row">
                      <div className="col-12">
                        <div className="mt-3">
                          <PersonName contractorProfile={contractorProfile} />
                        </div>
                        <div className="mt-3">
                          <h6>Company Name:</h6>
                          <CompanyName contractorProfile={contractorProfile} />
                        </div>
                        <div className="mt-3">
                          <AvgRating contractorProfile={contractorProfile} />
                        </div>
                        <div className="mt-3">
                          <h3>Bio</h3>
                          <OutlinedTextFields
                            contractorProfile={contractorProfile}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-8 offset-3">
                    <div className="row">
                      <div className="shadow mt-3">
                        <Reviews contractorProfile={contractorProfile} />
                      </div>
                    </div>

                    <div className="row mt-4">
                      <div className="shadow">
                        <History contractorProfile={contractorProfile} />
                      </div>
                    </div>

                    <Button
                      labelName={"Update Profile"}
                      onClick={this.updateProfile}
                    >
                      Update Profile
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    contractorProfile: state.firestore.data,
    items: state.contractorProfile
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        fetchContractorProfileAction
      },
      dispatch
    )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
