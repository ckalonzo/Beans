import React, { Component } from 'react'
import '../Css/ResetPassword.scss'

class ForgotPassword extends Component {
    render() {
        return (
            <section className="forgotPassword mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-7 mx-auto mt-4 addcolor">
                            <div className="row mb-3">
                                <div className="col-12 offset-xl-3 col-xl-8">
                                    <h2 className="ovr-title">Trucked Away</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 ">
                                    <div className="row">
                                        <div className="col-11 offset-1 ovr-copy">
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
                    </div>

                </div>

            </section>
        )
    }
}
export default ForgotPassword