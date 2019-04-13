import React, { Component } from 'react'
import ActiveMember from '../component/ActiveMember'
import CompanyName from '../component/companyName'
import NumberofJobs from '../component/NumberofJobs'
import PersonName from '../component/personName'
import Picture from '../component/picture'
import ProfileLocation from '../component/ProfileLocation'
import Rating from 'react-rating'
import TypeOfJobs from '../component/typeOfJobs'
import Divider from '@material-ui/core/Divider'
import ProfileHero from '../component/ProfileHero'
export default class Profile extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="profile">
          <ProfileHero />
          <div className="container">
            <div className="row">
              <div className="col-12 adj-bot">
                <div className="row">
                  <div className="col-4">
                    <Picture />
                  </div>
                  <div className="col-8">
                    <div className="row">
                      <div className="col-12">
                        <PersonName />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <TypeOfJobs />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <CompanyName />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <ProfileLocation />
                      </div>
                    </div>
                  </div>
                </div>
                <Divider variant="middle" />
                <div className="row">
                  <div className="col-4">
                    <NumberofJobs />
                  </div>
                  <div className="col-4">
                    <ActiveMember />
                  </div>
                  <div className="col-4">
                    <Rating
                      initialRating={2.5}
                      readonly
                    />
                  </div>
                </div>
              </div>
            </div>


          </div>
        </section>
      </React.Fragment>
    )
  }
}
