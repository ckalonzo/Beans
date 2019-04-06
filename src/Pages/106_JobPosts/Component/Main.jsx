import React, { Component } from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import 'date-fns';
import { CreateProject } from '../../Redux/Store/actions/JobPostActions';
import "antd/dist/antd.css";
import "../Css/PostJob.css";
import Budget from "../Component/Budget";
import AdditionalInfo from "../Component/AdditionalInfo";
import IntroPostJob from "../Component/IntroPostJob";
import TypeOfJob from "../Component/TypeOfJob";
import UploadImages from "../Component/UploadImages";
import Confirm from "./Confirm";

import Success from "./Success";
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';








class MainForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            current: 0,
            service: 'Junk Removal',
            email: '',
            files: [],
            name: "",
            address: "",
            city: "",
            state: "State",
            zipCode: "",
            largeItems: "",
            selectedDate: new Date('2014-08-18T21:11:54'),
            time: "",
            flightOfStairs: "",
            truckLoads: "",
            typeOfTruck: "",
            specialInstructions: "",
            budget: "",

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeAttachments = this.handleChangeAttachments.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeTimePicker = this.handleChangeTimePicker.bind(this);
        this.handleChangeDatePicker = this.handleChangeDatePicker.bind(this);
    }
    //proceed to next step
    nextStep = () => {
        const { current } = this.state
        this.setState({
            current: current + 1
        });
    }

    //go back to pevious step
    prevStep = () => {
        const { current } = this.state
        this.setState({
            current: current - 1
        })
    }


    // Handle fields change
    handleChange = input => e => {

        this.setState({
            [input]: e.target.value

        });
    }
    handleChangeAttachments(files) {
        this.setState({ files: files });
    }

    handleChangeDatePicker = date => {
        this.setState({ selectedDate: date });
    };


    handleChangeTimePicker = time => {
        this.setState({ time: time });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.CreateProject(this.state);
    }

    render() {
        console.log(this.props);
        const { current } = this.state;
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/101_CustomerLogin/CustomerLogin' />
        const { service, email, budget, files, name, address, city, state, zipCode, largeItems, selectedDate, time, flightOfStairs, truckLoads, typeOfTruck, specialInstructions } = this.state;
        const values = { service, budget, email, files, name, address, city, state, zipCode, largeItems, selectedDate, time, flightOfStairs, truckLoads, typeOfTruck, specialInstructions };

        let step = [
            {
                title: "Introduction",
                content: <IntroPostJob
                    nextStep={this.nextStep}
                />
            },
            {
                title: "Type Of Job",
                content: <TypeOfJob
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            },
            {
                title: "Upload Image",
                content: <UploadImages nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChangeAttachments={this.handleChangeAttachments}
                    values={values}
                    files={files} />
            },
            {
                title: "Additional Information",
                content: <AdditionalInfo
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
            },
            {
                title: "Budget",
                content: <Budget
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    budget={budget}
                    values={values}

                />
            },
            {
                title: "Confirm",
                content: < Confirm
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    handleSubmit={this.handleSubmit}
                />
            },
            {
                title: "Success",
                content: < Success />
            }
        ];
        return (
            <div className="pj-sec">
                <div className="container">
                    <div className="row">
                        <div className="mx-auto">
                            <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="Avatar" class="avatar"></img>
                        </div>

                    </div>

                    <Step current={current}>
                        {step.map(item => <Step key={item.title} title={item.title} />)}
                    </Step>
                    {step.map(({ title, content }, i) => (
                        <div
                            key={title}
                            className={i === this.state.current ? "foo fade-in" : "foo"}
                        >
                            {content}
                        </div>
                    ))}


                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        CreateProject: (project) => dispatch(CreateProject(project))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MainForm)
