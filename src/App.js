import React, { Component } from 'react';
import photo from './me2.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={photo} alt='my photo'/>
      </div>
    );
  }
}

export default App;
