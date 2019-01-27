import React, { Component } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "../Css/PostJob.css";
import Budget from "../Component/Budget";
import LocationPage from "./AdditionalInfo/LocationOfJob";
import AdditionalInfo from "../Component/AdditionalInfo";
import IntroPostJob from "../Component/IntroPostJob";
import TypeOfJob from "../Component/TypeOfJob";
import UploadImages from "../Component/UploadImages";
import Third from "./Third";

import { Steps, Button, message, Form } from "antd";


export default class MainForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            service: '',
            email: '',
            attachments: "",
            name: "",
            addressType: "",
            address: "",
            city: "",
            state: "",
            zipCode: "",
            largeItems: "",
            date: "",
            time: "",
            flightOfStairs: "",
            truckLoads: "",
            typeOfTruck: "",
            specialInstructions: "",
        }
    }
    changeService(service) {
        this.setState({ service })
        console.log(service);
    }

    handleChangeSelect(service) {
        this.setState({ service })
    };
    nextStep = () => {
        const { step } = this.state
        this.setState({
            step: step + 1
        });
    }
    prevStep = () => {
        const { step } = this.state
        this.setState({
            step: step - 1
        })
    }

    handleChange = event => {
        this.setState({ service: event.target.value });
    };

    handleChangeRadio = radio => event => {
        this.setState({ [radio]: event.target.value })
    }

    // if (this.state.current == 0) {
    //     this.props.form.validateFieldsAndScroll(["picture"], (err, values) => {
    //         if (!err) {
    //             const current = this.state.current + 1;
    //             // console.log(current)
    //             this.setState({ current });
    //         }
    //     });
    // }



    render() {
        console.log(this.props);
        const { step } = this.state;
        const { service, email, attachments, name, addressType, address, city, state, zipCode, largeItems, date, time, flightOfStairs, truckLoads, typeOfTruck, specialInstructions } = this.state;
        const values = { service, email, attachments, name, addressType, address, city, state, zipCode, largeItems, date, time, flightOfStairs, truckLoads, typeOfTruck, specialInstructions };

        switch (step) {

            case 1:
                return <IntroPostJob
                    nextStep={this.nextStep}
                />
            case 2:
                return <TypeOfJob
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChangeSelect={this.handleChangeSelect.bind(this)}
                    values={values}
                />
            case 3:
                return <UploadImages
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChangeSelect={this.handleChangeSelect.bind(this)}
                    values={values}
                />
            case 4:
                return (<AdditionalInfo
                    form={this.props.form}
                    nextStep={this.nextStep}
                    prevStep={this.prev}
                    handleChange={this.handleChange}
                    values={values}
                />)
            case 5:
                return <Budget
                    form={this.props.form}
                    nextStep={this.nextStep}
                    prevStep={this.prev}
                    handleChange={this.handleChange}
                    values={values}
                />
            case 6:
                return <Third
                    form={this.props.form}
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                />

        }

        // {

        //     content: <IntroPostJob form={this.props.form} />
        // },
        // {

        //     content: <TypeOfJob form={this.props.form} />
        // },
        // {

        //     content: <UploadImages form={this.props.form} />
        // },
        // {

        //     content: <AdditionalInfo form={this.props.form} />
        // },
        // {

        //     content: <Budget form={this.props.form} />
        // },
        // {

        //     content: <Third form={this.props.form} />
        // }

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="mx-auto">
                            <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="Avatar" class="avatar"></img>
                        </div>

                    </div>
                </div>
                <div className="container">
                    {/* <Steps current={step}>
                        {steps.map(item => <Step key={item.title} title={item.title} />)}
                    </Steps>
                    {steps.map(({ title, content }, i) => (
                        <div
                            key={title}
                            className={i === this.state.step ? "foo fade-in" : "foo"}
                        >
                            {content}
                        </div>
                    ))} */}
                    {/* <div className="row">
                        <div className="mx-auto mb-5">
                            <div className="steps-action">
                                {this.state.current < steps.length - 1 && (
                                    <Button type="primary" onClick={() => this.next()}>
                                        Next
            </Button>
                                )}
                                {this.state.current === steps.length - 1 && (
                                    <Button
                                        type="primary"
                                        onClick={() => message.success("Processing complete!")}
                                    >
                                        Done
            </Button>
                                )}
                                {this.state.current > 0 && (
                                    <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                                        Previous
            </Button> */}
                    )}
                            </div>
            </div>
            /*  </div >
          </div >
      </div > */
        );
    }
}

