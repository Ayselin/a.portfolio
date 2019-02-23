import React, { Component } from "react";
import './Header.css'



export default class Header extends Component {

  constructor() {
    super();
    this.state = {
      welcomeMessage: 'Hi, I am a Web Developer from London, UK.'
    };
  }

  render() {
    return (
      <div className='home' id='home'>
        <div className='headerImg'>
          <h1 className='header-title'>Aysel Rzayeva</h1>
          <h1 className='header-p'>{this.state.welcomeMessage}
          </h1>
        </div>
      </div>
    );
  }

}
