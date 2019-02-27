import React, { Component } from "react";
import './About.css'


class About extends Component {
    render() {
        return (
            <div className='about' id = 'about'>
                <h1 className='about-title'> About Me </h1>
                <div className='about-content'>
                    <div className='about-img2'>
                    </div>
                    <div className='about-discription'>
                        <p className='about-paragrath'>I am keen to explore and utilise all of the tools available to make my work effective, 
                           efficient and industry leading. I like to build things that work and look good. 
                           I am constantly improving and learning and I believe that anyone can learn from anyone.
                           Having divided my time between employment and education for the past few months,
                           I am now looking to work in an environment where I can contribute to a business.I like to build things that work and look good.
                           I pride myself on finding innovative and modern solutions to problems and I love teamwork.
                           My approach to work is accuracy and working hard to achieve the goals.</p>
                    </div>
                </div>
            </div>
        )
    }

}

export default About;
