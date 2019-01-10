import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/100_Home/Home.jsx';
import CustomerLogin from './Pages/101_CustomerLogin/CustomerLogin';
import ContractorLogin from './Pages/102_ContractorLogin/ContractorLogin';
import Membership from './Pages/103_Membership/Membership';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
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
