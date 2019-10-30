import React, { Component } from "react";
import ActiveMember from "../component/ActiveMember";
import CompanyName from "../component/companyName";
import NumberofJobs from "../component/NumberofJobs";
import PersonName from "../component/personName";
import Picture from "../component/picture";
import ProfileLocation from "../component/ProfileLocation";
import AvgRating from "../component/Rating";
import TypeOfJobs from "../component/typeOfJobs";
import ProfileHero from "../component/ProfileHero";
import OutlinedTextFields from "../component/multiline-Input";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase"
import { createProfile } from '../../Redux/Store/actions/profileAuctions'
import { Link } from "react-router-dom";
import {compose} from redux;
class UpdateProfile extends Component {
    handleChange = (e) => {
    
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createProfile(this.state)
    }
    render() {
        console.log(this.props);
        const { contractorProfile } = this.props;
        return (
            <React.Fragment>
                <section className="profile">
                    <ProfileHero />
                    <div className="container">
                        <div className="row">
                            <div className="col-12 adj-bot shadow">
                                <form>
   <div className="row">
                                    <div className="col-3">
                                        <Picture />
                                        <div className="mt-3">
                                            <TypeOfJobs />
                                        </div>
                                        <div className="mt-3">
                                            <ProfileLocation />
                                        </div>
                                        <div className="mt-3">
                                            <NumberofJobs />
                                        </div>
                                        <div className="mt-3">
                                            <ActiveMember />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="mt-3">
                                                    <PersonName />
                                                </div>
                                                <div className="mt-3">
                                                    <h6>Company Name:</h6>
                                                    <CompanyName />
                                                </div>
                                                <div className="mt-3">
                                                    <AvgRating />
                                                </div>
                                                <div className="mt-3">
                                                    <h3>Bio</h3>
                                                    <OutlinedTextFields />
                                                </div>
                                            </div>
                                        </div>
                                        <Link role="button" className="primary-btn" onSubmit={this.handleSubmit}></Link>
                                    </div>
                                </div>
                                </form>
                             
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        contractorProfile: state.firestore.contractorProfile
    }
}
const mapDispatchToProps = (dispatch)=> {
    return {
    createProfile: (profile) => dispatch(createProfile(profile))
}
};
export default compose(
    connect(null, mapDispatchToProps, mapStateToProps),
    firestoreConnect([
        {collection: 'contractorProfile'}
    ])
)(UpdateProfile);
