import React, { Component } from 'react';
import photo from './me2.jpg';
export default function AboutMe() {
    return (
      <div>
   <div className='mainpage'>
          <img className='mainphoto' src={photo} alt='my photo' />
            <div><h3 className='about'>Hello, My name is Aysel and I am a web developer from London, UK.
               I am using HTML CSS and Javascript on a day-to-day basis.
               I like to build things that work and look good. I am constantly improving and learning </h3>
            </div>
          </div>
      </div>
    )
  }