import React, { Component } from 'react'
import '../Css/ResetPassword.css'

class ForgotPassword extends Component {
    render() {
        return (
            <section className="mt-5">
                <div className="container">
                    <div className="row mb-3">
                        <div className="col-4 mx-auto">
                            <div className="inline-block">
                                <div className="navbar-brand float-left">
                                    <h2 className="col-3 float-right ovr-title">Trucked Away</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 ">
                            <div className="row">
                                <div className="col-4 mx-auto">
                                    <p>Forgot Your Password? Dont worry, we got your back.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div class="form-group mt-4">
                            <label className="rp-email" htmlFor="Email">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter your email"
                                onChange={this.handleChange}>
                            </input>

                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary btn-block mt-3 resetbtn">Reset Password
                                                        </button>
                    </form>
                </div>

            </section>
        )
    }
}
export default ForgotPassword