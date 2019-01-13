import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./Pages/Global/Component/Navigation/Layout/Navbar";
import Footer from "./Pages/Global/Component/Navigation/Layout/Footer";
import Home from './Pages/100_Home/Home.jsx';
import CustomerLogin from './Pages/101_CustomerLogin/CustomerLogin';
import ContractorLogin from './Pages/102_ContractorLogin/ContractorLogin';
import Membership from './Pages/103_Membership/Membership';
import firebaseApp from './Firebase';
import SignUp from './Pages/104_SignUp/SignUp';
import Dashboard from "./Pages/105_Dashboard/Dashboard";
import ProjectList from "./Pages/108_Browse/ProjectList";

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
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/108_Browse/ProjectList" component={ProjectList} />
            <Route path="/105_Dashboard/Dashboard" component={Dashboard} />
            <Route path="/104_SignUp/SignUp" component={SignUp} />
            <Route path="/103_Membership/Membership" component={Membership} />
            <Route path="/102_ContractorLogin/ContractorLogin" component={ContractorLogin} />
            <Route path="/101_CustomerLogin/CustomerLogin" component={CustomerLogin} />
            <Route path="/" component={Home} />
          </Switch>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
