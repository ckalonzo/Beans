import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "date-fns";
import { CreateProject } from "../../Redux/Store/actions/JobPostActions";
import "../Css/PostJob.css";
import Budget from "../Component/Budget";
import AdditionalInfo from "../Component/AdditionalInfo";
import IntroPostJob from "../Component/IntroPostJob";
import TypeOfJob from "../Component/TypeOfJob";
import UploadImages from "../Component/UploadImages";
import Confirm from "./Confirm";

import Success from "./Success";

class MainForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formActivePanel1: 1,
      formActivePanel1Changed: false,
      service: "Junk Removal",
      email: "",
      files: [],
      name: "",
      address: "",
      city: "",
      state: "State",
      zipCode: "",
      largeItems: "",
      selectedDate: new Date("2014-08-18T21:11:54"),
      time: "",
      flightOfStairs: "",
      truckLoads: "",
      typeOfTruck: "",
      specialInstructions: "",
      budget: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeAttachments = this.handleChangeAttachments.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeTimePicker = this.handleChangeTimePicker.bind(this);
    this.handleChangeDatePicker = this.handleChangeDatePicker.bind(this);
  }

  swapFormActive = a => param => e => {
    this.setState({
      ["formActivePanel" + a]: param,
      ["formActivePanel" + a + "Changed"]: true
    });
  };

  //proceed to next step
  nextStep = () => {
    const { current } = this.state;
    this.setState({
      current: current + 1
    });
  };

  //go back to pevious step
  handleNextPrevClick = a => param => e => {
    this.setState({
      ["formActivePanel" + a]: param,
      ["formActivePanel" + a + "Changed"]: true
    });
  };

  calculateAutofocus = a => {
    if (this.state["formActivePanel" + a + "Changed"]) {
      return true;
    }
  };
  // Handle fields change
  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };
  handleChangeAttachments(files) {
    this.setState({ files: files });
  }

  handleChangeDatePicker = date => {
    this.setState({ selectedDate: date });
  };

  handleChangeTimePicker = time => {
    this.setState({ time: time });
  };

  handleSubmission = e => {
    e.preventDefault();
    this.props.CreateProject(this.state);
  };

  render() {
    console.log(this.props);
    const { current } = this.state;
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/101_CustomerLogin/CustomerLogin" />;
    const {
      service,
      email,
      budget,
      files,
      name,
      address,
      city,
      state,
      zipCode,
      largeItems,
      selectedDate,
      time,
      flightOfStairs,
      truckLoads,
      typeOfTruck,
      specialInstructions
    } = this.state;
    const values = {
      service,
      budget,
      email,
      files,
      name,
      address,
      city,
      state,
      zipCode,
      largeItems,
      selectedDate,
      time,
      flightOfStairs,
      truckLoads,
      typeOfTruck,
      specialInstructions
    };

    let step = [
      {
        title: "Confirm",
        content: (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
            handleSubmit={this.handleSubmit}
          />
        )
      },
      {
        title: "Success",
        content: <Success />
      }
    ];
    return (
      <div className="pj-sec">
        <div className="container">
          <div className="row">
            <div className="mx-auto">
              <img
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Avatar"
                class="avatar"
              />
            </div>
          </div>
          {/* <MDBStepper icon>
                        <MDBStep far icon="folder-open" stepName="Basic Information" onClick={this.swapFormActive(1)(1)}></MDBStep>
                        <MDBStep icon="pencil-alt" stepName="Personal Data" onClick={this.swapFormActive(1)(2)}></MDBStep>
                        <MDBStep icon="photo" stepName="Terms and Conditions" onClick={this.swapFormActive(1)(3)}></MDBStep>
                        <MDBStep icon="check" stepName="Finish" onClick={this.swapFormActive(1)(4)}></MDBStep>
                    </MDBStepper>
                    <form role="form" action="" method="post">
                        <MDBRow>
                            {this.state.formActivePanel1 == 1 &&
                                (<MDBCol md="12">
                                    <h3 className="font-weight-bold pl-0 my-4">
                                        <strong>Introduction</strong></h3>
                                    <IntroPostJob
                                        nextStep={this.nextStep}
                                    />
                                    <MDBBtn color="mdb-color" rounded className="float-right" onClick={this.handleNextPrevClick(1)(2)}>Next</MDBBtn>
                                </MDBCol>)}

                            {this.state.formActivePanel1 == 2 &&
                                (<MDBCol md="12">
                                    <h3 className="font-weight-bold pl-0 my-4"><strong>Type Of Job</strong></h3>
                                    <TypeOfJob
                                        nextStep={this.nextStep}
                                        prevStep={this.prevStep}
                                        handleChange={this.handleChange}
                                        values={values}
                                    />
                                    <MDBBtn color="mdb-color" rounded className="float-left" >previous</MDBBtn>
                                    <MDBBtn color="mdb-color" rounded className="float-right" onClick={this.handleNextPrevClick(1)(3)}>next</MDBBtn>
                                </MDBCol>)}

                            {this.state.formActivePanel1 == 4 &&
                                (<MDBCol md="12">
                                    <h3 className="font-weight-bold pl-0 my-4"><strong>Upload Image</strong></h3>
                                    <UploadImages nextStep={this.nextStep}
                                        prevStep={this.prevStep}
                                        handleChangeAttachments={this.handleChangeAttachments}
                                        values={values}
                                        files={files} />
                                    <MDBBtn color="mdb-color" rounded className="float-left" onClick={this.handleNextPrevClick(1)(2)}>previous</MDBBtn>
                                    <MDBBtn color="mdb-color" rounded className="float-right" onClick={this.handleNextPrevClick(1)(4)}>next</MDBBtn>
                                </MDBCol>)}

                            {this.state.formActivePanel1 == 5 &&
                                (<MDBCol md="12">
                                    <h3 className="font-weight-bold pl-0 my-4">
                                        <strong>Additional Information</strong></h3>
                                    <AdditionalInfo
                                        form={this.props.form}
                                        nextStep={this.nextStep}
                                        prevStep={this.prevStep}
                                        handleChange={this.handleChange}
                                        values={values}
                                        address={address}
                                        city={city}
                                        zipCode={zipCode}
                                        largeItems={largeItems}
                                        handleChangeDatePicker={this.handleChangeDatePicker}
                                        handleChangeTimePicker={this.handleChangeTimePicker}

                                />
                                 <button type="button" class="btn btn-primary" onClick={this.back}>
              Back
            </button>
            <button
              type="button"
              class="btn btn-primary"
              onClick={this.continue}
            >
              Continue
            </button>
                                    <MDBBtn color="mdb-color" rounded className="float-left" onClick={this.handleNextPrevClick(1)(1)}>previous</MDBBtn>
                                    <MDBBtn color="mdb-color" rounded className="float-right" onClick={this.handleNextPrevClick(1)(5)}>next</MDBBtn>
                                </MDBCol>)}

                            {this.state.formActivePanel1 == 6 &&
                                (<MDBCol md="12">
                                    <h3 className="font-weight-bold pl-0 my-4"><strong>Budget</strong></h3>
                                    <Budget
                                        nextStep={this.nextStep}
                                        prevStep={this.prevStep}
                                        handleChange={this.handleChange}
                                        budget={budget}
                                        values={values}

                                    />
                                    <MDBBtn color="mdb-color" rounded className="float-left" onClick={this.handleNextPrevClick(1)(2)}>previous</MDBBtn>
                                    <MDBBtn color="mdb-color" rounded className="float-right" onClick={this.handleNextPrevClick(1)(6)}>next</MDBBtn>
                                </MDBCol>)}

                            {this.state.formActivePanel1 == 7 &&
                                (<MDBCol md="12">
                                    <h3 className="font-weight-bold pl-0 my-4"><strong>Confirm</strong></h3>
                                    < Confirm
                                        nextStep={this.nextStep}
                                        prevStep={this.prevStep}
                                        values={values}
                                        handleSubmit={this.handleSubmit}
                                    />
                                    <MDBBtn color="mdb-color" rounded className="float-left" onClick={this.handleNextPrevClick(1)(1)}>previous</MDBBtn>
                                    <MDBBtn color="mdb-color" rounded className="float-right" onClick={this.handleNextPrevClick(1)(7)}>next</MDBBtn>
                                </MDBCol>)}


                            {this.state.formActivePanel1 == 8 &&
                                (<MDBCol md="12">
                                    <h3 className="font-weight-bold pl-0 my-4"><strong>Finish</strong></h3>
                                    <h2 className="text-center font-weight-bold my-4">Registration completed!</h2>
                                    <MDBBtn color="mdb-color" rounded className="float-left" onClick={this.handleNextPrevClick(1)(3)}>previous</MDBBtn>
                                    <MDBBtn color="success" rounded className="float-right" onClick={this.handleSubmission}>submit</MDBBtn>
                                </MDBCol>)}
                        </MDBRow> */}
          {/* </form> */}
        </div>
        //{" "}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    CreateProject: project => dispatch(CreateProject(project))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainForm);
