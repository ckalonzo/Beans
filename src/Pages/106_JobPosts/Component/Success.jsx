import React, { Component } from 'react'
import { MDBBtn } from "mdbreact";



class Success extends Component {

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="mx-auto">
                            <h1> Thank You For Your Submission</h1>
                        </div>
                    </div>

                    <div className="row">
                        <div className="mx-auto">
                            <MDBBtn
                                variant="contained"
                                color="primary"
                                onClick={this.back}
                                href="/"
                                className={classes.button}>
                                Dashboard
                        </MDBBtn>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Success;