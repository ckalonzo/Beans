import React, { Component } from "react";
import { connect } from "react-redux";
import IntroSignUp from "./component/IntroSignUp";
import { contractorSignUp } from "../Redux/Store/actions/authActions";
import * as actionTypes from "../Redux/Store/actions/actionTypes/ta-actionTypes";
import { Redirect } from "react-router-dom";
import SignUpbasicinfo from "./component/signUp-basicinfo";
import SocialNumberAknowledgement from "./component/SocialNumberAknowledgement";
//import { actionTypes } from "react-redux-firebase";

class ContractorSignUpForm extends Component {
  constructor(props) {
    super(props);

    // this.props.steps = this.props.steps.bind(this);
    // this.props.steps = this.props.steps.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    // this.handleChangeAttachments = this.handleChangeAttachments.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChangeSSN = this.handleChangeSSN.bind(this);
    // this.handleBlurSSN = this.handleBlurSSN.bind(this);

    // this.handleUpload = this.handleUpload.bind(this);
  }

  // Proceed to next step
  nextStep = () => {
    this.props.onhandleNextStep(this.props.stepNav.step);
  };
  prevStep = () => {
    this.props.onhandlePreviousStep(this.props.stepNav.step);
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
    let ssnLocked = true;

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

  handleSubmit = e => {
    e.preventDefault();
    this.props.CreateProject(this.state);
  };

  render() {
    console.log(this.props);

    const { auth } = this.props;
    //if (auth.uid) return <Redirect to="/CustomerLogin/CustomerLogin" />;

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
    switch (this.props.stepNav.step) {
      case 1:
        return <IntroSignUp nextStep={this.props.steps} />;
      case 2:
        return (
          <SignUpbasicinfo
            nextStep={this.props.steps}
            prevStep={this.props.steps}
            handleChange={this.handleChange}
          />
        );
      case 3:
        return (
          <SocialNumberAknowledgement
            nextStep={this.props.steps}
            prevStep={this.props.steps}
            handleChangeSSN={this.handleChangeSSN}
            handleBlurSSN={this.handleBlurSSN}
            ssnLocked={this.props.bkgchk}
            clearSsn={this.props.bkgchk}
            actualSsn={this.props.bkgchk}
            ssnLocked={this.props.bkgchk}
            maskedSsn={this.props.bkgchk}
            starredMask={this.props.bkgchk}
          />
        );
      //   case 4:
      //     return (
      //       <AdditionalInfo
      //         nextStep={this.props.steps}
      //         prevStep={this.props.steps}
      //         handleChange={this.handleChange}
      //         values={values}
      //         address={address}
      //         city={city}
      //         zipCode={zipCode}
      //         largeItems={largeItems}
      //         handleChangeDatePicker={this.handleChangeDatePicker}
      //         handleChangeTimePicker={this.handleChangeTimePicker}
      //       />
      //     );
      //   case 5:
      //     return (
      //       <Budget
      //         nextStep={this.props.steps}
      //         prevStep={this.props.steps}
      //         handleChange={this.handleChange}
      //         budget={budget}
      //         values={values}
      //       />
      //     );
      //   case 6:
      //     return (
      //       <Confirm
      //         nextStep={this.props.steps}
      //         prevStep={this.props.steps}
      //         values={values}
      //         handleSubmit={this.handleSubmit}
      //       />
      //     );
      //   case 7:
      //     return <Success />;
    }
  }

  // MainForm.propTypes = {
  //   onSubmit: PropTypes.func.isRequired
  // };
  // const mapStateToProps = state => {
  //   return {
  //     auth: state.firebase.auth
  //   };
  // };
  // const mapDispatchToProps = dispatch => {
  //   return {
  //     CreateProject: project => dispatch(CreateProject(project))
  //   };
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
    contractorSignUp: creds => dispatch(contractorSignUp(creds)),
    onhandleNextStep: StepCounter =>
      dispatch({ type: actionTypes.NEXT_STEP, stepCounter: StepCounter }),
    onhandlePreviousStep: StepCounter =>
      dispatch({ type: actionTypes.PREVIOUS_STEP, stepCounter: StepCounter }),
    onhandlebkCheck: bkcheck =>
      dispatch({ type: actionTypes.ADD_SSN, bkcheckInfo: bkcheck }),
    onhandleBasicInfo: regInfo =>
      dispatch({ type: actionTypes.ADD_BASIC_INFO, registrationName: regInfo })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContractorSignUpForm);
