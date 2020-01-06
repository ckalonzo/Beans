import React, { Component } from "react";
import "../js/ssnmask";
import "../Css/customer-signup.scss";
import SsnInput from "./SSNInput";
import TermAndConditions from "./termAndConditions";
import Modal from "../../Global/Component/UI/Modal/Modal";
import Button from "../../Global/Input/Button";
import { Link } from "react-router-dom";
export default class SocialNumberAknowledgement extends Component {
  constructor(props) {
    super(props);

    this.state = { showModal: false, hasSSN: false };
  }

  continue = e => {
    this.setState({ hasSSN: false });
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  handleSubmit() {
    this.setState({ hasSSN: true });
  }
  // <Link to="/SignUp/component/Thankyou">
  //   < Button labelName="Submit"/>
  // </Link>

  handleCloseModal = () => this.setState({ showModal: false });

  componentDidMount() {
    this.setState({ showModal: true });
  }
  componentWillMount = () => {
    window.scrollTo(0, 0);
  };
  render() {
    const {
      maskedSsn,
      handleChangeSSN,
      handleBlurSSN,
      ssnLocked,
      starredMask,
      actualSsn,
      clearSsn
    } = this.props;
    console.log(this.props);
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12  offset-0  text-center mb-5 mt-5">
              <h3>Check for Safety</h3>

              <h6>
                Before accepting jobs, all Trucked Away Partners must go through
                a simple check for safety
              </h6>
            </div>
          </div>
          <div className="row">
            <div className="col-7 col-md-6 col-lg-3 text-center mx-auto">
              <label for="fieldSsn">SSN: </label>
              <SsnInput
                maskedSsn={maskedSsn}
                handleChangeSSN={handleChangeSSN}
                handleBlurSSN={handleBlurSSN}
                clearSsn={clearSsn}
                actualSsn={actualSsn}
                ssnLocked={ssnLocked}
                starredMask={starredMask}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-8  mx-auto">
              <TermAndConditions />
            </div>
          </div>

          {this.state.showModal ? (
            <Modal onClose={this.handleCloseModal}>
              <div className="row">
                <div className="col-12 text-center -ta_mb-25">
                  <h3>Background Check</h3>
                </div>
                <div className="col-6 offset-3 -ta_px-0 text-center">
                  Adding Background check will boost your chances of getting
                  jobs. You will have to pay $50 inorder for your background
                  check to be completed. However you can opt to skip and
                  complete a background check later. You will still be able to
                  submit for jobs.
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
        <div className="row">
          <div className="mx-auto">
            <Button type="button" labelName="Back" onClick={this.back} />

            <Button
              type="button"
              onClick={this.continue}
              labelName="Continue"
            />
          </div>
        </div>
      </section>
    );
  }
}
