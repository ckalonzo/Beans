import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/100_Home/Home.jsx';
import CustomerLogin from './Pages/101_CustomerLogin/CustomerLogin';
import ContractorLogin from './Pages/102_ContractorLogin/ContractorLogin';
import Membership from './Pages/103_Membership/Membership';
import firebaseApp  from './Firebase';
import SignUp from './Pages/104_SignUp/SignUp';
import Dashboard from "./Pages/105_Dashboard/Dashboard";

class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    firebaseApp.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }
  render() {

    return (
      <Router>
        <div>
        <div>{this.state.user ? ( <Home/>) : (<ContractorLogin/>)}</div>
        <Route exact path="/105_Dashboard/Dashboard" component={Dashboard} />
          <Route exact path="/104_SignUp/SignUp" component={SignUp} />
          <Route exact path="/103_Membership/Membership" component={Membership} />
          <Route exact path="/102_ContractorLogin/ContractorLogin" component={ContractorLogin} />
          <Route exact path="/101_CustomerLogin/CustomerLogin" component={CustomerLogin} />
          <Route exact path="/" component={Home} />

        </div>
      </Router>
    );
  }
}

export default App;
