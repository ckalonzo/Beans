import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/100_Home/Home.jsx';
import CustomerLogin from './Pages/101_CustomerLogin/CustomerLogin';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/101_CustomerLogin/CustomerLogin" component={CustomerLogin} />
          <Route exact path="/" component={Home} />

        </div>
      </Router>
    );
  }
}

export default App;
