import React, { Component } from "react";
import { connect } from "react-redux";
import IntroSignUp from "../component/IntroSignUp";
import SignUpbasicinfo from "../component/signUp-basicinfo";
import SocialNumberAknowledgement from "../component/SocialNumberAknowledgement";
import CreateContractorProfile from "../component/createContractorProfile";
import Success from "../component/SuccessPage";
import { addContractorProfileAction } from "../../Redux/Store/actions/contractorProfileActions";
import { ACTIONS } from "../../Redux/Store/actions/actionTypes/ta-actionTypes";
import * as actionTypes from "../../Redux/Store/actions/actionTypes/ta-actionTypes";
import { Redirect } from "react-router-dom";
class Enrollment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      actualSsn: "",
      maskedSsn: "",
      ssnLocked: false
      // isOpen: false
      //   service: "Junk Removal",
      //   email: "",
      //   image: null,
      //   url: "",
      //   progress: 0,
      //   name: "",
      //   address: "",
      //   city: "",
      //   state: "State",
      //   zipCode: "",
      //   largeItems: "",
      //   selectedDate: "",
      //   selectedTime: "",
      //   flightOfStairs: "",
      //   truckLoads: "",
      //   typeOfTruck: "",
      //   specialInstructions: "",
      //   budget: ""
    };
    // this.nextStep = this.nextStep.bind(this);
    // this.prevStep = this.prevStep.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    // this.handleChangeAttachments = this.handleChangeAttachments.bind(this);
    //  this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeSSN = this.handleChangeSSN.bind(this);
    this.handleBlurSSN = this.handleBlurSSN.bind(this);

    // this.handleUpload = this.handleUpload.bind(this);
  }

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };
  handleChangeAttachments = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };

  handleChangeSSN(event) {
    const prevValue = this.state.maskedSsn;
    const newValue = event.target.value;
    let actual = this.state.actualSsn;

    if (newValue.length > 11) {
      return;
    }

    // typing forward
    if (newValue.length > prevValue.length) {
      let newChar = newValue.split("").pop();

      actual = `${actual}${newChar}`;
    }
    // backspacing / deleting
    else {
      const charsRemovedCount = prevValue.length - newValue.length;

      actual = actual.substr(0, actual.length - charsRemovedCount);
    }

    this.setState({
      actualSsn: actual,
      maskedSsn: this.starredMask(actual)
    });

    // this.props.change(`owner_${this.props.match.params.idx}_ssn`, actual);
  }

  handleBlurSSN() {
    // let ssnLocked = true;

    if (this.state.actualSsn.length < 9) {
      this.setState({
        actualSsn: "",
        maskedSsn: "",
        ssnLocked: false
      });
    } else {
      this.setState({
        ssnLocked: true
      });
    }
  }

  starredMask(ssn, showLast4 = true) {
    // replace numeric digits with * asterisk
    let valueHidden = ssn.replace(/[\d]/g, "*");

    if (valueHidden.length <= 3) {
      return valueHidden;
    }

    if (valueHidden.length <= 5) {
      return valueHidden.slice(0, 3) + "-" + valueHidden.slice(3, 5);
    }

    if (showLast4) {
      return (
        valueHidden.slice(0, 3) +
        "-" +
        valueHidden.slice(3, 5) +
        "-" +
        ssn.substr(5)
      );
    } else {
      return (
        valueHidden.slice(0, 3) +
        "-" +
        valueHidden.slice(3, 5) +
        "-" +
        valueHidden.slice(5, 9)
      );
    }
  }

  clearSsn() {
    this.setState({
      actualSsn: "",
      maskedSsn: "",
      ssnLocked: false
    });
  }

  handleChangeTimePicker = time => {
    //   this.setState({ selectedTime: time });
  };

  render() {
    console.log(this.props);
    const { step } = this.state;
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/Login/CustomerLogin/CustomerLogin" />;
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
      selectedTime,
      flightOfStairs,
      truckLoads,
      typeOfTruck,
      actualSsn,
      maskedSsn,
      ssnLocked,
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
      selectedTime,
      flightOfStairs,
      truckLoads,
      typeOfTruck,
      specialInstructions
    };
    // return (
    //   <div className="pj-sec">
    //     <div className="container">
    //       <div className="row">
    //         <div className="mx-auto">
    //           <img
    //             src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
    //             alt="Avatar"
    //             className="avatar"
    //           />
    //         </div>
    //       </div>
    //       <div className="row">
    //         <div className="col-md-6 col-md-offset-3 mx-auto">
    //       );
    switch (step) {
      case 1:
        return <IntroSignUp nextStep={this.nextStep} />;
      case 2:
        return (
          <SocialNumberAknowledgement
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChangeSSN={this.handleChangeSSN}
            handleBlurSSN={this.handleBlurSSN}
            ssnLocked={this.ssnLocked}
            clearSsn={this.clearSsn}
            actualSsn={actualSsn}
            maskedSsn={maskedSsn}
            starredMask={this.starredMask}
          />
        );
      case 3:
        return (
          <CreateContractorProfile
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            address={address}
            city={city}
            zipCode={zipCode}
            handleChangeDatePicker={this.handleChangeDatePicker}
            handleChangeTimePicker={this.handleChangeTimePicker}
          />
        );
      case 4:
        return <Success />;
    }
  }
}
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
    regFields: state.registrationFields,
    bkgchk: state.numberFields,
    steps: state.stepNav
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addContractorProfileAction: newContractor =>
      dispatch(addContractorProfileAction(newContractor)),
    onhandleNextStep: StepCounter =>
      dispatch({
        type: actionTypes.ACTIONS.STEPS.NEXT_STEP,
        stepCounter: StepCounter
      }),
    onhandlePreviousStep: StepCounter =>
      dispatch({
        type: actionTypes.ACTIONS.STEPS.PREVIOUS_STEP,
        stepCounter: StepCounter
      }),
    onhandlebkCheck: bkcheck =>
      dispatch({
        type: actionTypes.ACTIONS.CONTRACTOR_GROUP.ADD_SSN,
        bkcheckInfo: bkcheck
      }),
    onhandleBasicInfo: regInfo =>
      dispatch({
        type: actionTypes.ACTIONS.CONTRACTOR_GROUP.ADD_BASIC_INFO,
        registrationName: regInfo
      })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Enrollment);
