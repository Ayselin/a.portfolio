import React, { Component } from 'react';
import photo from './me2.jpg';
import photo2 from './me4.jpg';


export default function AboutMe() {
    return (
        <div className='mainpage'>
            <div className='container1'>
            <h1 className='title'>Front End Developer</h1>
                <img className='photo' src={photo} alt='my photo' />
                <div><h3 className='about'>Hello, My name is Aysel and I am a web developer from London, UK.
                   I am using HTML CSS and Javascript on a day-to-day basis.
               I like to build things that work and look good. I am constantly improving and learning </h3>
                </div>
                
                <div className='container2'>
                    <img className='photo' src={photo2} alt='my photo' />
                    <div><h3>
                        When life is hard, I like to take a step back and either go otside or reaad a book. </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}