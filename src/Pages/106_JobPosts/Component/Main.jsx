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
import moment from 'moment'
const Step = Steps.Step;






export default class MainForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            current: 0,
            service: 'Junk Removal',
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
        this.handleChangeService = this.handleChangeService.bind(this);
        this.handleChangeAttachments = this.handleChangeAttachments.bind(this);

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
    handleChangeService(e) {

        this.setState({
            service: e.target.value

        });
    }

    handleChange = id => e => {

        this.setState({
            [id]: e.target.value

        });
    }
    handleChangeAttachments(e) {

        this.setState({
            attachments: e.target.value

        });
    }

    handleChangeDatePicker = time => timeString => {
        this.setState({
            [time]: timeString


        });
    }

    handleChangeTimePicker = date => dateString => {
        console.log(date, dateString);
    }
    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    render() {
        console.log(this.props);
        const { current } = this.state;
        const { service, email, attachments, name, address, city, state, zipCode, largeItems, date, time, flightOfStairs, truckLoads, typeOfTruck, specialInstructions } = this.state;
        const values = { service, email, attachments, name, address, city, state, zipCode, largeItems, date, time, flightOfStairs, truckLoads, typeOfTruck, specialInstructions };
        let steps = [
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
                    handleChangeService={this.handleChangeService}
                    values={values}
                />
            },
            {
                title: "Upload Image",
                content: <UploadImages nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                    attachments={attachments} />
            },
            {
                title: "Additional Information",
                content: <AdditionalInfo
                    form={this.props.form}
                    nextStep={this.nextStep}
                    prevStep={this.prev}
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
                title: "Second",
                content: <Budget
                    form={this.props.form}
                    nextStep={this.nextStep}
                    prevStep={this.prev}
                    handleChange={this.handleChange}
                    values={values}
                />
            },
            {
                title: "Last",
                content: < Third
                    form={this.props.form}
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            }
        ];
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="mx-auto">
                            <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="Avatar" class="avatar"></img>
                        </div>

                    </div>
                </div>
                <Steps current={current}>
                    {steps.map(item => <Step key={item.title} title={item.title} />)}
                </Steps>
                {steps.map(({ title, content }, i) => (
                    <div
                        key={title}
                        className={i === this.state.current ? "foo fade-in" : "foo"}
                    >
                        {content}
                    </div>
                ))}
                <div className="row">
                    <div className="mx-auto mb-5">
                        <div className="steps-action">

                            {this.state.current === steps.length - 1 && (
                                <Button
                                    type="primary"
                                    onClick={() => message.success("Processing complete!")}
                                >
                                    Done
            </Button>
                            )}

                        </div>
                    </div>
                </div>

            </div>
        );
        // switch (current) {

        //     case 1:
        //         return (<IntroPostJob
        //             nextStep={this.nextStep}
        //         />)
        //     case 2:
        //         return (<TypeOfJob

        //             nextStep={this.nextStep}
        //             prevStep={this.prevStep}
        //             handleChangeService={this.handleChangeService}
        //             values={values}
        //         />)
        //     case 3:
        //         return (<UploadImages
        //             nextStep={this.nextStep}
        //             prevStep={this.prevStep}
        //             handleChange={this.handleChange}
        //             values={values}
        //             attachments={attachments}
        //         />)
        //     case 4:
        //         return (<AdditionalInfo
        //             form={this.props.form}
        //             nextStep={this.nextStep}
        //             prevStep={this.prev}
        //             handleChange={this.handleChange}
        //             values={values}
        //             address={address}
        //             city={city}
        //             zipCode={zipCode}
        //             largeItems={largeItems}
        //             handleChangeDatePicker={this.handleChangeDatePicker}
        //             handleChangeTimePicker={this.handleChangeTimePicker}

        //         />)
        //     case 5:
        //         return (<Budget
        //             form={this.props.form}
        //             nextStep={this.nextStep}
        //             prevStep={this.prev}
        //             handleChange={this.handleChange}
        //             values={values}
        //         />)
        //     case 6:
        //         return (< Third
        //             form={this.props.form}
        //             nextStep={this.nextStep}
        //             handleChange={this.handleChange}
        //             values={values}
        //         />)

        // }
    }
}

