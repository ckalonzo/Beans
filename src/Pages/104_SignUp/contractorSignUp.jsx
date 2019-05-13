import React, { Component } from "react";
import { connect } from 'react-redux';
import IntroSignUp from "./component/IntroSignUp";
import SignUpbasicinfo from "./component/signUp-basicinfo";
import Step from '@material-ui/core/Step';







class contractorSignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            current: 0,
            email: '',
            truckType: 'Personal',
            attachments: "",
            firstName: "",
            phone: '',
            LastName: "",
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
            budget: "",

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeAttachments = this.handleChangeAttachments.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

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
    handleChangeAttachments() {

    }

    handleChangeDatePicker = time => timeString => {
        this.setState({
            [time]: timeString


        });
    }

    handleChangeTimePicker = date => dateString => {
        console.log(date, dateString);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.CreateProject(this.state);
    }

    render() {
        console.log(this.props);
        const { current } = this.state;
        // const { auth } = this.props;
        // if (!auth.uid) return <Redirect to='/101_CustomerLogin/CustomerLogin' />
        const { truckType, email, budget, attachments, firstName, phone, lastName, address, city, state, zipCode, largeItems, date, time, flightOfStairs, truckLoads, typeOfTruck, specialInstructions } = this.state;
        const values = { truckType, budget, email, attachments, firstName, phone, lastName, address, city, state, zipCode, largeItems, date, time, flightOfStairs, truckLoads, typeOfTruck, specialInstructions };

        let step = [
            {
                title: "Introduction",
                content: <IntroSignUp
                    nextStep={this.nextStep}
                />
            },
            {
                title: "Getting to know you ",
                content: <SignUpbasicinfo
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            },
            // {
            //     title: "Upload Image",
            //     content: <UploadImages nextStep={this.nextStep}
            //         prevStep={this.prevStep}
            //         handleChangeAttachments={this.handleChangeAttachments}
            //         values={values}
            //         attachments={attachments} />
            // },
            // {
            //     title: "Additional Information",
            //     content: <AdditionalInfo
            //         form={this.props.form}
            //         nextStep={this.nextStep}
            //         prevStep={this.prevStep}
            //         handleChange={this.handleChange}
            //         values={values}
            //         address={address}
            //         city={city}
            //         zipCode={zipCode}
            //         largeItems={largeItems}
            //         handleChangeDatePicker={this.handleChangeDatePicker}
            //         handleChangeTimePicker={this.handleChangeTimePicker}

            //     />
            // },
            // {
            //     title: "Budget",
            //     content: <Budget
            //         nextStep={this.nextStep}
            //         prevStep={this.prevStep}
            //         handleChange={this.handleChange}
            //         budget={budget}
            //         values={values}

            //     />
            // },
            // {
            //     title: "Confirm",
            //     content: < Confirm
            //         nextStep={this.nextStep}
            //         prevStep={this.prevStep}
            //         values={values}
            //         handleSubmit={this.handleSubmit}
            //     />
            // },
            // {
            //     title: "Success",
            //     content: < Success />
            // }
        ];
        return (
            <div>
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
        //    CreateProject: (project) => dispatch(CreateProject(project))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(contractorSignUp)
