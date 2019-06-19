import React, { Component } from "react";
import ActiveMember from "../component/ActiveMember";
import CompanyName from "../component/companyName";
import NumberofJobs from "../component/NumberofJobs";
import PersonName from "../component/personName";
import Picture from "../component/picture";
import ProfileLocation from "../component/ProfileLocation";
import AvgRating from "../component/Rating";
import TypeOfJobs from "../component/typeOfJobs";

import ProfileHero from "../component/ProfileHero";
import OutlinedTextFields from "../component/multiline-Input";
import Skills from "../component/Skills";
import History from "../component/History";
import Reviews from "../component/Reviews";
export default class Profile extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="profile">
          <ProfileHero />
          <div className="container">
            <div className="row">
              <div className="col-12 adj-bot shadow">
                <div className="row">
                  <div className="col-3">
                    <Picture />
                    <div className="mt-3">
                      <TypeOfJobs />
                    </div>
                    <div className="mt-3">
                      <ProfileLocation />
                    </div>
                    <div className="mt-3">
                      <NumberofJobs />
                    </div>
                    <div className="mt-3">
                      <ActiveMember />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="row">
                      <div className="col-12">
                        <div className="mt-3">
                          <PersonName />
                        </div>
                        <div className="mt-3">
                          <h6>Company Name:</h6>
                          <CompanyName />
                        </div>
                        <div className="mt-3">
                          <AvgRating />
                        </div>
                        <div className="mt-3">
                          <h3>Bio</h3>
                          <OutlinedTextFields />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-8 offset-3">
                    <div className="row">
                      <div className="shadow mt-3">
                        <Reviews />
                      </div>
                    </div>

                    <div className="row mt-4">
                      <div className="shadow">
                        <History />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
