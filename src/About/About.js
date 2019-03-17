import React, { Component } from "react";
import './About.css'


class About extends Component {
    render() {
        return (
            <div className='about' id='about'>
                <h1 className='about-title'> About Me </h1>
                <div className='about-content'>
                    <div className='about-img2'>
                    </div>
                    <div className='about-discription'>
                        <p className='about-paragrath'>I am a Front End Developer who is passionate about React.js and JavaScript.<br></br>
                        I am keen to explore and utilise all the tools available to make my work effective, efficient and industry leading.
                        I am passionate about learning and building something that impacts the way the world works and lives.<br></br>
                        Having divided my time between employment and education for the past few years, I am now looking to work in an environment where
                        I can progress and continue my professional development of code.
                        I do believe that i will add value to any business as I have an excellent work ethic and excel in past paced, high pressured working environment.
                        </p>
                    </div>
                </div>
            </div>
        )
    }

}

export default About;
