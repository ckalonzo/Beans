import React, { Component } from "react";
import  firebaseApp  from '../../Firebase';


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.signup = this.signup.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            FirstName: '',
            LastName: '',
            Email: '',
            password: ''
        };
      }
    
      handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }

    signup(e){
        e.preventDefault();
        firebaseApp.auth().createUserWithEmailAndPassword(this.state.FirstName,this.state.LastName, this.state.email, this.state.password).then((u)=>{
        }).then((u)=>{console.log(u)})
        .catch((error) => {
            console.log(error);
          })
      }
    
    render() {
        return (
            <div className="form-inline">
                <h2>Sign Up</h2>
                <div className="form-group">
                <input
                        value={this.state.FirstName}
                        onChange={this.handleChange}
                        className="form-control"
                        type="text"
                        placeholder="First Name"
                    />
                    <input
                        value={this.state.LastName}
                        onChange={this.handleChange}
                        className="form-control"
                        type="text"
                        placeholder="Last Name"
                    />
                    <input 
                        value={this.state.email} 
                        onChange={this.handleChange}
                         type="email" 
                        name="email" 
                        className="form-control"
                         id="exampleInputEmail1" 
                        aria-describedby="emailHelp"
                         placeholder="Enter email" 
                         />
                    <div className="form-group">
                    <label for="InputPassword1">Password</label>
                     <input 
                        value={this.state.password} 
                        onChange={this.handleChange} 
                        type="password" 
                        name="password" 
                        className="form-control" 
                        id="exampleInputPassword1"
                        placeholder="Password" 
                        />
                      </div>
                    <button
                        className="btn btn-primary btn-block mt-3"
                        type="submit"
                        onClick={this.signup}
                    >
                        Sign Up
                    </button>
                </div>
            </div >
        )
    }
}
export default SignUp;