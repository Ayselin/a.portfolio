import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AboutMe from './AboutMe';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Route exact path='/'component={AboutMe} /> 
      </div>
      </Router> 
    );
  }
}



export default App;

