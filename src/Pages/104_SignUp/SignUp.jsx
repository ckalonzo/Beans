import React, { Component } from "react";
import { firebaseApp } from '../../Firebase';


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FirstName: '',
            LastName: '',
            Email: '',
            password: '',
            error: {
                message: ''
            }
        }
    }
    apple() {
        console.log('this.state', this.state);
        const { FirstName, LastName, email, password } = this.state;
        firebaseApp.auth().createUserWithEmailAndPassword(FirstName, LastName, email, password)
            .catch(error => {
                console.log("error", error);
                this.setState({ error })
            })
    }
    render() {
        return (
            <div className="form-inline">
                <h2>Sign Up</h2>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="First Name"
                        onChange={event => this.setState({ FirstName: event.target.value })}
                    />
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Last Name"
                        onChange={event => this.setState({ LastName: event.target.value })}
                    />
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Email"
                        onChange={event => this.setState({ Email: event.target.value })}
                    />
                    <input
                        className="form-control"
                        type="password"
                        placeholder="password"
                        onChange={event => this.setState({ password: event.target.value })}
                    />
                    <button
                        className="btn btn-primary btn-block mt-3"
                        type="submit"
                        onClick={() => this.apple()}
                    >
                        Sign Up
                    </button>
                </div>
                <div>{this.state.error.message}</div>
            </div >
        )
    }
}
export default SignUp;