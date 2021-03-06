import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Pages/Global/Component/Navigation/Layout/Navbar";
import Footer from "./Pages/Global/Component/Navigation/Layout/Footer";
import Home from "./Pages/Home/Home.jsx";
import CustomerLogin from "./Pages/Login/CustomerLogin/CustomerLogin";
import ContractorLogin from "./Pages/Login/ContractorLogin/ContractorLogin";
import Membership from "./Pages/Membership/Membership";
import Enrollment from "./Pages/SignUp/ContractorEnrollment/Enrollment";
import ContractorDashboard from "./Pages/Dashboard/ContractorDashboard";
import ProjectDashboard from "./Pages/Browse/ProjectDashboard";
import ProjectDetails from "./Pages/Browse/Component/ProjectDetail";
import WizardForm from "./Pages/JobPosts/PostJob";
import CustomerDashboard from "./Pages/CustomerDashboard/CustomerDashboard";
import ForgotPassword from "./Pages/Login/ForgotPassword";
import Recipe from "./Pages/Membership/component/Recipe";
import Cart from "./Pages/Membership/component/Cart";
import MainChat from "./Pages/Chat/mainChat";
import ChatModule from "./Pages/Chat/Chat-module";
// import Main from './Pages/Chat/Component/Main/Main'
import ContractorCreateAccount from "./Pages/SignUp/Contractor-Create-Account";
import Profile from "./Pages/Profile/Layout/Profile";
import UpdateProfile from "./Pages/Profile/updateProfile/updateProfile";
import Thankyou from "./Pages/SignUp/component/Thankyou";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route
              path="/Profile/updateProfile/updateProfile"
              component={UpdateProfile}
            />
            <Route path="/Profile/Layout/Profile" component={Profile} />
            <Route path="/JobPosts/PostJob" component={WizardForm} />
            <Route path="/Chat/Chat-module" component={ChatModule} />
            <Route path="/Chat/mainChat" component={MainChat} />
            <Route path="/jobs/:id" component={ProjectDetails} />
            <Route
              path="/Browse/ProjectDashboard"
              component={ProjectDashboard}
            />
            <Route path="/SignUp/component/Thankyou" component={Thankyou} />
            <Route
              path="/CustomerDashboard/CustomerDashboard"
              component={CustomerDashboard}
            />
            <Route
              path="/Dashboard/ContractorDashboard"
              component={ContractorDashboard}
            />

            <Route
              path="/SignUp/ContractorEnrollment/Enrollment"
              component={Enrollment}
            />
            <Route
              path="/SignUp/Contractor-Create-Account"
              component={ContractorCreateAccount}
            />
            <Route path="/Membership/component/Recipe" component={Recipe} />
            <Route path="/Membership/component/cart" component={Cart} />
            <Route path="/Membership/Membership" component={Membership} />
            <Route path="/Login/ForgotPassword" component={ForgotPassword} />
            <Route
              path="/Login/ContractorLogin/ContractorLogin"
              component={ContractorLogin}
            />
            <Route
              path="/Login/CustomerLogin/CustomerLogin"
              component={CustomerLogin}
            />
            <Route exact path="/" component={Home} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
