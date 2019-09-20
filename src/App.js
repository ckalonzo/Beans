import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Navbar from "./Pages/Global/Component/Navigation/Layout/Navbar";
import Footer from "./Pages/Global/Component/Navigation/Layout/Footer";
import Home from "./Pages/100_Home/Home.jsx";
import CustomerLogin from "./Pages/101_CustomerLogin/CustomerLogin";
import ContractorLogin from "./Pages/102_ContractorLogin/ContractorLogin";
import Membership from "./Pages/103_Membership/Membership";
import firebase from "./Config/Firebase";
import SignUp from "./Pages/104_SignUp/SignUp";
import ContractorSignUp from "./Pages/104_SignUp/contractorSignUp";
import Dashboard from "./Pages/105_Dashboard/Dashboard";
import ProjectDashboard from "./Pages/108_Browse/ProjectDashboard";
import ProjectDetails from "./Pages/108_Browse/Component/ProjectDetail";
import WizardForm from "./Pages/106_JobPosts/PostJob";
import CustomerDashboard from "./Pages/109_CustomerDashboard/CustomerDashboard";
import ForgotPassword from "./Pages/101_CustomerLogin/Component/ForgotPassword";
import Recipe from "./Pages/103_Membership/component/Recipe";
import Cart from "./Pages/103_Membership/component/Cart";
import MainChat from "./Pages/Chat/mainChat";
import ChatModule from "./Pages/Chat/Chat-module";
// import Main from './Pages/Chat/Component/Main/Main'
import ContractorCreateAccount from "./Pages/104_SignUp/Contractor-Create-Account";
import Profile from "./Pages/Profile/Layout/Profile";
import Thankyou from "./Pages/104_SignUp/component/Thankyou";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/Profile/Layout/Profile" component={Profile} />
            <Route path="/106_JobPosts/PostJob" component={WizardForm} />
            <Route path="/Chat/Chat-module" component={ChatModule} />
            <Route path="/Chat/mainChat" component={MainChat} />
            <Route path="/jobs/:id" component={ProjectDetails} />
            <Route
              path="/108_Browse/ProjectDashboard"
              component={ProjectDashboard}
            />
            <Route path="/104_SignUp/component/Thankyou" component={Thankyou} />
            <Route
              path="/109_CustomerDashboard/CustomerDashboard"
              component={CustomerDashboard}
            />
            <Route path="/105_Dashboard/Dashboard" component={Dashboard} />
            <Route
              path="/104_SignUp/contractorSignUp"
              component={ContractorSignUp}
            />
            <Route path="/104_SignUp/SignUp" component={SignUp} />
            <Route
              path="/104_SignUp/Contractor-Create-Account"
              component={ContractorCreateAccount}
            />
            <Route path="/103_Membership/component/Recipe" component={Recipe} />
            <Route path="/103_Membership/component/cart" component={Cart} />
            <Route path="/103_Membership/Membership" component={Membership} />
            <Route
              path="/101_CustomerLogin/Component/ForgotPassword"
              component={ForgotPassword}
            />
            <Route
              path="/102_ContractorLogin/ContractorLogin"
              component={ContractorLogin}
            />
            <Route
              path="/101_CustomerLogin/CustomerLogin"
              component={CustomerLogin}
            />
            <Route exact path="/" component={Home} />
          </Switch>
        <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
