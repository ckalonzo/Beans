import React, { Component } from "react";
import Picture from "../../Profile/component/picture";
import OutlinedTextFields from "../../Profile/component/multiline-Input";
import { connect } from "react-redux";
import SelectInput from "../../Global/Input/selectInput";
import { compose, bindActionCreators } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import Button from "../../Global/Input/Button";
import TextArea from "../../Global/Input/textarea";
import { ACTIONS } from "../../Redux/Store/actions/actionTypes/ta-actionTypes";
import { beginValidatingProfileValue } from "../../Redux/Store/actions/index";
import {
  addContractorProfileAction,
  updateProfileValue
} from "../../Redux/Store/actions/contractorProfileActions";
import { Link } from "react-router-dom";
import TextInput from "../../Global/Input/TextInput";
import "../../Profile/sass/updateProfile.scss";

class CreateContractorProfile extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    businessState: "",
    zipCode: "",
    bio: "",
    typeOfJobs: "",
    bids: "",
    errors: [],
    errorMessage: {},
    companyName: ""
  };

  render() {
    const contractorProfile = this.props.contractorProfile;
    // console.log(this.props.contractorProfile.firstName);
    console.log(contractorProfile);
    return (
      <div>
        <section>
          <div id="profile" className="container">
            <div className="form-row">
              <div className="col">
                <Picture />
              </div>
            </div>
            <div className="form-row -ta_mt-30">
              <div className="col">
                <TextInput
                  id="firstName"
                  labelName={contractorProfile.firstName.label}
                  required={contractorProfile.firstName.required}
                  onChange={event =>
                    this.props.actions.updateProfileValue(
                      event.target.id,
                      event.target.value
                    )
                  }
                  onBlur={event =>
                    this.props.beginValidatingProfileValue(event.target.id)
                  }
                  error={contractorProfile.firstName.error}
                  value={contractorProfile.firstName.value}
                />
              </div>
              <div className="col">
                <TextInput
                  labelName={contractorProfile.lastName.label}
                  required={contractorProfile.lastName.required}
                  id="lastName"
                  onChange={event =>
                    this.props.actions.updateProfileValue(
                      event.target.id,
                      event.target.value
                    )
                  }
                  onBlur={event =>
                    this.props.actions.beginValidatingProfileValue(
                      event.target.id
                    )
                  }
                  error={contractorProfile.lastName.error}
                  value={contractorProfile.lastName.value}
                />
              </div>
            </div>
            <div className="form-row -ta_mt-10">
              <div className="col">
                <TextInput
                  labelName={contractorProfile.email.label}
                  required={contractorProfile.email.required}
                  id="email"
                  onChange={event =>
                    this.props.actions.updateProfileValue(
                      event.target.id,
                      event.target.value
                    )
                  }
                  onBlur={event =>
                    this.props.actions.beginValidatingProfileValue(
                      event.target.id
                    )
                  }
                  error={contractorProfile.email.error}
                  value={contractorProfile.email.value}
                />
              </div>
              <div className="col">
                <TextInput
                  labelName={contractorProfile.phone.label}
                  required={contractorProfile.phone.required}
                  id="phone"
                  onChange={event =>
                    this.props.actions.updateProfileValue(
                      event.target.id,
                      event.target.value
                    )
                  }
                  onBlur={event =>
                    this.props.actions.beginValidatingProfileValue(
                      event.target.id
                    )
                  }
                  error={contractorProfile.phone.error}
                  value={contractorProfile.phone.value}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col">
                <TextInput
                  labelName={contractorProfile.address1.label}
                  required={contractorProfile.address1.required}
                  id="address1"
                  onChange={event =>
                    this.props.actions.updateProfileValue(
                      event.target.id,
                      event.target.value
                    )
                  }
                  onBlur={event =>
                    this.props.actions.beginValidatingProfileValue(
                      event.target.id
                    )
                  }
                  error={contractorProfile.address1.error}
                  value={contractorProfile.address1.value}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col">
                <TextInput
                  labelName={contractorProfile.address2.label}
                  required={contractorProfile.address2.required}
                  id="address2"
                  onChange={event =>
                    this.props.actions.updateProfileValue(
                      event.target.id,
                      event.target.value
                    )
                  }
                  onBlur={event =>
                    this.props.actions.beginValidatingProfileValue(
                      event.target.id
                    )
                  }
                  error={contractorProfile.address2.error}
                  value={contractorProfile.address2.value}
                />
              </div>
            </div>
            <div className="form-row -ta_mt-10">
              <div className="col">
                <TextInput
                  labelName={contractorProfile.city.label}
                  required={contractorProfile.city.required}
                  id="city"
                  onChange={event =>
                    this.props.actions.updateProfileValue(
                      event.target.id,
                      event.target.value
                    )
                  }
                  onBlur={event =>
                    this.props.actions.beginValidatingProfileValue(
                      event.target.id
                    )
                  }
                  error={contractorProfile.city.error}
                  value={contractorProfile.city.value}
                />
              </div>
              <div className="col">
                <SelectInput
                  labelName={contractorProfile.businessState.label}
                  required={contractorProfile.businessState.required}
                  options={this.props.statesList}
                  id="businessState"
                  onChange={event =>
                    this.props.actions.updateProfileValue(
                      event.target.id,
                      event.target.value
                    )
                  }
                  onBlur={event =>
                    this.props.actions.beginValidatingProfileValue(
                      event.target.id
                    )
                  }
                  error={contractorProfile.businessState.error}
                  value={contractorProfile.businessState.value}
                />
              </div>
            </div>
            <div className="form-row -ta_mt-10">
              <div className="col">
                <TextInput
                  labelName={contractorProfile.zip.label}
                  required={contractorProfile.zip.required}
                  id={"zip"}
                  onChange={event =>
                    this.props.actions.updateProfileValue(
                      event.target.id,
                      event.target.value
                    )
                  }
                  onBlur={event =>
                    this.props.actions.beginValidatingProfileValue(
                      event.target.id
                    )
                  }
                  error={contractorProfile.zip.error}
                  value={contractorProfile.zip.value}
                />
              </div>
            </div>
            <div className="form-group row">
              <SelectInput
                labelName={contractorProfile.typeOfJobs.label}
                required={contractorProfile.typeOfJobs.required}
                options={this.props.serviceList}
                id="typeOfJobs"
                onChange={event =>
                  this.props.actions.updateProfileValue(
                    event.target.id,
                    event.target.value
                  )
                }
                onBlur={event =>
                  this.props.actions.beginValidatingProfileValue(
                    event.target.id
                  )
                }
                error={contractorProfile.typeOfJobs.error}
                value={contractorProfile.typeOfJobs.value}
              ></SelectInput>
            </div>

            <div className="form-group row">
              <div className="col-12 -ta_mt-25">
                <TextArea
                  id="bio"
                  labelName={contractorProfile.bio.label}
                  required={contractorProfile.bio.required}
                  onChange={event =>
                    this.props.actions.updateProfileValue(
                      event.target.id,
                      event.target.value
                    )
                  }
                  onBlur={event =>
                    this.props.actions.beginValidatingProfileValue(
                      event.target.id
                    )
                  }
                  error={contractorProfile.bio.error}
                  value={contractorProfile.bio.value}
                ></TextArea>
              </div>
            </div>
            <div className="form-row -ta_mt-30">
              <div className="col text-center">
                <Button
                  type="submit"
                  className="btn btn-primary"
                  labelName="Create Profile"
                  tabIndex={"13"}
                  onClick={this.props.actions.addContractorProfileAction(
                    this.props.contractorProfile
                  )}
                >
                  Save Profile
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    contractorProfile: state.contractorProfile,
    statesList: state.statesList,
    serviceList: state.serviceList
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        updateProfileValue: updateProfileValue,
        beginValidatingProfileValue: beginValidatingProfileValue,
        addContractorProfileAction: addContractorProfileAction
      },
      dispatch
    )
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateContractorProfile);
