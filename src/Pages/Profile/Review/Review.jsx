import React, { Component } from "react";
import RateCompany from "./component/RateCompany";
import WriteReview from './component/writeReview'
import './scss/writeReview.scss'
import { MDBBtn } from "mdbreact";



class Review extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <section className="writeReview">
          <div className="container shadow ta-color">
            <div className="row">
              <div className="col-4 mx-auto">
                <h5>Jerrys world</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-6 mx-auto">
                <h6>Write Review to help the next customer</h6>
              </div>
              <div className="col-12 border">
                <div className="row">
                  <div className="col-12">
                    <RateCompany />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <WriteReview />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="mx-auto">

                <MDBBtn
                  variant="contained"
                  color="primary"
                  onClick={this.continue}
                  className={classes.button}>
                  Submit
                        </MDBBtn>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default Review