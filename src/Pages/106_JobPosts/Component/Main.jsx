import React, { Component } from "react";
import "antd/dist/antd.css";
import "../Css/PostJob.css";
import Budget from "../Component/Budget";
import AdditionalInfo from "../Component/AdditionalInfo";
import IntroPostJob from "../Component/IntroPostJob";
import TypeOfJob from "../Component/TypeOfJob";
import UploadImages from "../Component/UploadImages";
import Third from "./Third";
import { Steps, Button, message } from 'antd';
const Step = Steps.Step;

const steps = [{
    title: 'First',
    content: 'First-content',
}, {
    title: 'Second',
    content: 'Second-content',
}, {
    title: 'Last',
    content: 'Last-content',
}];




export default class MainForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            current: 1,
            service: '',
            email: '',
            attachments: "",
            name: "",
            address: "",
            city: "",
            state: "State",
            zipCode: "",
            largeItems: "",
            date: "",
            time: "",
            flightOfStairs: "",
            truckLoads: "",
            typeOfTruck: "",
            specialInstructions: "",
        };
        this.handleChange = this.handleChange.bind(this);
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
    handleChange = id => value => {
        this.setState({
            [id]: value
        },
            () => {
                console.log(this.state.service);
            })



    }
    // UpdateJobType(e) {
    //     console.log(e.target.service)
    //     console.log(e.target.value)
    // }




    render() {
        console.log(this.props);
        const { current } = this.state;
        const { service, email, attachments, name, address, city, state, zipCode, largeItems, date, time, flightOfStairs, truckLoads, typeOfTruck, specialInstructions } = this.state;
        const values = { service, email, attachments, name, address, city, state, zipCode, largeItems, date, time, flightOfStairs, truckLoads, typeOfTruck, specialInstructions };

        switch (current) {

            case 1:
                return (<IntroPostJob
                    nextStep={this.nextStep}
                />)
            case 2:
                return (<TypeOfJob

                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                    service={service}




                />)
            case 3:
                return (<UploadImages
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                    attachments={attachments}
                />)
            case 4:
                return (<AdditionalInfo
                    form={this.props.form}
                    nextStep={this.nextStep}
                    prevStep={this.prev}
                    handleChange={this.handleChange}

                    values={values}
                />)
            case 5:
                return (<Budget
                    form={this.props.form}
                    nextStep={this.nextStep}
                    prevStep={this.prev}
                    handleChange={this.handleChange}
                    values={values}
                />)
            case 6:
                return (< Third
                    form={this.props.form}
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                />)

        }
    }
}

