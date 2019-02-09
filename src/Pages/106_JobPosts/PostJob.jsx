import React, { Component } from "react";
import { Steps, Button, message } from 'antd';


import BasicPage from "./Component/TypeOfTruck";
import LocationPage from "./Component/AdditionalInfo/LocationOfJob";
import SubmitPage from "./Component/PostTwoZipcode";
import IntroPostJob from "./Component/IntroPostJob";
import TypeOfJob from "./Component/TypeOfJob";
import UploadImages from "./Component/UploadImages";


// const Step = Steps.Step;

// const steps = [{
//     title: 'First',
//     content: 'First-content',
// }, {
//     title: 'Second',
//     content: 'Second-content',
// }, {
//     title: 'Last',
//     content: 'Last-content',
// }];

class WizardForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 0,
            currentStep: 1,
            email: '',
            username: '',
            password: '',
            // zipCode: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this._next = this._next.bind(this)
        this._prev = this._prev.bind(this)
    }


    _next() {
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 2 ? 3 : currentStep + 1
        this.setState({
            currentStep: currentStep
        })
    }
    _checkArea() {
        let zipCode = this.state.zipCode
        this.setState({
            zipCode
        })
    }
    _prev() {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1 ? 1 : currentStep - 1
        this.setState({
            currentStep: currentStep
        })
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { email, username, password } = this.state
        alert(`Your registration detail: \n 
           Email: ${email} \n 
           Username: ${username} \n
           Password: ${password}`)
    }
    /*
      * the functions for our button
      */
    get previousButton() {
        let currentStep = this.state.currentStep
        if (currentStep !== 1) {
            return (
                <button className="btn btn-secondary" type="button" onClick={this._prev}>
                    Previous
        </button>
            )
        }
        return null
    }
    // get modal() {
    //     let zipCode = this.state.zipCode
    //     if (zipcode == 30336) {
    //         return (
    //             <button className="btn btn-secondary" type="button" onClick={this._prev}>
    //                 Previous
    //     </button>
    //         )
    //     }
    //     return null
    // }

    get nextButton() {
        let currentStep = this.state.currentStep
        if (currentStep < 8 && currentStep > 1) {
            return (

                <div className="row">
                    <div className="mx-auto mb-5">
                        <button className="btn btn-primary float-right" type="button" onClick={this._next}>
                            Next
        </button>
                    </div>
                </div>
            )
        }
        return null
    }
    get getStartedButton() {
        let currentStep = this.state.currentStep
        if (currentStep == 1) {
            return (
                <div className="row">
                    <div className="mx-auto mb-5">
                        <Button type="primary" onClick={this._next}>Get Started</Button>
                    </div>
                </div>
            )
        }
        return null
    }

    render() {

        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="mx-auto">
                            <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="Avatar" class="avatar"></img>
                        </div>

                    </div>
                </div>

                <p>Step {this.state.currentStep} </p>

                <form onSubmit={this.handleSubmit}>
                    {/* 
        render the form steps and pass required props in
      */}
                    <IntroPostJob
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        onClick={this.nextButton}
                    />
                    <TypeOfJob
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        onClick={this.nextButton}
                    />
                    <UploadImages
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        email={this.state.email}
                    />
                    <LocationPage
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        username={this.state.username}
                    />
                    <SubmitPage
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        password={this.state.password}
                    />
                    {this.previousButton}
                    {this.nextButton}
                    {this.getStartedButton}
                </form>
            </React.Fragment>
        )
    }





}

export default WizardForm;