import React, { Component } from 'react'
import ActiveMember from '../component/ActiveMember'
import CompanyName from '../component/companyName'
import NumberofJobs from '../component/NumberofJobs'
import PersonName from '../component/personName'
import Picture from '../component/picture'
import ProfileLocation from '../component/ProfileLocation'
import AvgRating from '../component/Rating'
import TypeOfJobs from '../component/typeOfJobs'
import Divider from '@material-ui/core/Divider'
import ProfileHero from '../component/ProfileHero'
import OutlinedTextFields from '../component/multiline-Input'
import Skills from '../component/Skills'
import History from '../component/History'
import Reviews from '../component/Reviews'
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
                  <div className="col-3">
                    <Picture />
                    <TypeOfJobs />
                    <ProfileLocation />                    
                  </div>
                  <div className="col-6">
                    <div className="row">
                      <div className="col-12">
                        <PersonName />
                        <CompanyName />
                        <AvgRating />
                        <OutlinedTextFields />
                      </div>
                    </div> 
                  </div>
                  <div className="col-3">
                    <div className="row">
                      <div className="col-12">
                        <NumberofJobs />
                        <ActiveMember />
                      </div>
                    </div>  
                  </div>
                </div>
                <Divider variant="middle" />
                <div className="row">
                  <div className="col-8">
                  <div className="row">
                  <div className="shadow">
                  <Reviews/>
                  </div>
                  </div>
                  
                    <div className="row">
                    <div className="shadow">
                  <History/>
                  </div>
                    </div>
                  </div>
                  <div className="col-4">
                  <div className="skills-shadow">
                  <Skills/>
                  </div>
                    
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
