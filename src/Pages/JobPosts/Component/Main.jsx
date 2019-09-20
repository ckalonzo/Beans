import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import moment from "moment";
import "../js/stepform";
import { CreateProject } from "../../Redux/Store/actions/JobPostActions";
import "../Css/PostJob.scss";
import Budget from "../Component/Budget";
import AdditionalInfo from "../Component/AdditionalInfo";
import IntroPostJob from "../Component/IntroPostJob";
import TypeOfJob from "../Component/TypeOfJob";
import UploadImages from "../Component/UploadImages";
import Confirm from "./Confirm";
import Success from "./Success";
import axios from "axios"

class MainForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      service: "Junk Removal",
      email: "",
      image: null,
      url: "",
      progress: 0,
      name: "",
      address: "",
      city: "",
      state: "State",
      zipCode: "",
      largeItems: "",
      selectedDate: moment().format("MMM Do YYYY"),
      selectedTime: moment().format('h:mm:ss a'),
      flightOfStairs: "",
      truckLoads: "",
      typeOfTruck: "",
      specialInstructions: "",
      budget: ""
    };
    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeAttachments = this.handleChangeAttachments.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeTimePicker = this.handleChangeTimePicker.bind(this);
    this.handleChangeDatePicker = this.handleChangeDatePicker.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
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
  handleChangeAttachments = event => {
    if (event.target.files[0]) {
      const image = event.target.files[0];
      this.setState(() => ({ image }));
   }
  };

  handleUpload = () => {
    const fd = new FormData();
    fd.append('image', this.state.image, this.state.image.name);
    axios.post('', fd, {
      onUploadProgress: ProgressEvent => {
        console.log('Upload Progress: ' + Math.round (ProgressEvent.loaded / ProgressEvent.total * 100) + '%' )
      }
    })
      .then(res => {
      console.log(res);
    });
   
  };

  handleChangeDatePicker = date => {
    this.setState({ selectedDate: moment(date).format("MMM Do YYYY") });
      console.log(date);
  };

  handleChangeTimePicker = time => {
    this.setState({ selectedTime: moment(time).format('h:mm:ss a')});
    console.log(time);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.CreateProject(this.state);
  };

  render() {
    console.log(this.props);
    const { step } = this.state;
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/CustomerLogin/CustomerLogin" />;
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
        return <IntroPostJob nextStep={this.nextStep} />;
      case 2:
        return (
          <TypeOfJob
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <UploadImages
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChangeAttachments={this.handleChangeAttachments}
            handleUpload={this.handleUpload}
            values={values}
          />
        );
      case 4:
        return (
          <AdditionalInfo
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            address={address}
            city={city}
            zipCode={zipCode}
            largeItems={largeItems}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            handleChangeDatePicker={this.handleChangeDatePicker}
            handleChangeTimePicker={this.handleChangeTimePicker}
          />
        );
      case 5:
        return (
          <Budget
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            budget={budget}
            values={values}
          />
        );
      case 6:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
            handleSubmit={this.handleSubmit}
          />
        );
      case 7:
        return <Success />;
    }
  }
}

MainForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};
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
