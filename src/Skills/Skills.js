import React, { Component } from "react";
import './Skills.css';
import reactImg from '../img/react.svg';
import nodeJs from '../img/nodejs.svg';

class Skills extends Component {
    render() {
        return (
            <div className="skills" id='skills'>
                <h1> My Skills </h1>
                <div className='skills-row'>
                    <img src={reactImg} alt='react'></img>
                    <img src={nodeJs} alt='nodeJs'></img>

                </div>
            </div>
        )
    }

}

export default Skills;
