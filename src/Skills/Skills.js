import React, { Component } from "react";
import './Skills.css';
//import reactImg from '../img/react.svg';
//import nodeJs from '../img/nodejs.svg';

class Skills extends Component {
    render() {
        return (
            <div className="skills" id='skills'>
                <h1 className='myskills'> My Skills </h1>
                <div className='skills-row'>
                    <i className="icons fab fa-node"></i>
                    <i className="icons fab fa-js-square"></i>
                    <i className="icons fab fa-react"></i>
                    <i className="icons fab fa-html5"></i>
                    <i className="icons fab fa-css3-alt"></i>
                    <i className="icons fab fa-git"></i>
                    <i className="icons fab fa-slack"></i>
                </div>
            </div>
        )
    }

}

export default Skills;
