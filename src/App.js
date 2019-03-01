import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./Pages/Global/Component/Navigation/Layout/Navbar";
import Footer from "./Pages/Global/Component/Navigation/Layout/Footer";
import Home from './Pages/100_Home/Home.jsx';
import CustomerLogin from './Pages/101_CustomerLogin/CustomerLogin';
import ContractorLogin from './Pages/102_ContractorLogin/ContractorLogin';
import Membership from './Pages/103_Membership/Membership';
import firebase from './Config/Firebase';
import SignUp from './Pages/104_SignUp/SignUp';
import Dashboard from "./Pages/105_Dashboard/Dashboard";
import ProjectDashboard from "./Pages/108_Browse/ProjectDashboard";
import ProjectDetails from "./Pages/108_Browse/Component/ProjectDetail";
import WizardForm from "./Pages/106_JobPosts/pj";
import ListJobs from "./Pages/106_JobPosts/Component/ListJobs";

class App extends Component {

  render() {

    return (
      <Router>

        <div className="App">
          <Navbar />
          <Switch>
            <Route
              path="/106_JobPosts/Component/ListJobs"
              component={ListJobs}
            />
            <Route
              path="/106_JobPosts/PostJob"
              component={WizardForm}
            />
            <Route
              path='/jobs/:id'
              component={ProjectDetails}
            />
            <Route
              path="/108_Browse/ProjectDashboard"
              component={ProjectDashboard}
            />
            <Route
              path="/105_Dashboard/Dashboard"
              component={Dashboard}
            />
            <Route
              path="/104_SignUp/SignUp"
              component={SignUp}
            />
            <Route
              path="/103_Membership/Membership"
              component={Membership}
            />
            <Route
              path="/102_ContractorLogin/ContractorLogin"
              component={ContractorLogin}
            />
            <Route
              path="/101_CustomerLogin/CustomerLogin"
              component={CustomerLogin}
            />
            <Route
              exact path="/"
              component={Home}
            />
          </Switch>


        </div>
      </Router>
    );
  }
}

export default App;
