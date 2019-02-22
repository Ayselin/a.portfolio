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
                    <i class="fab fa-node"></i>
                    <i class="fab fa-js-square"></i>
                    <i class="fab fa-react"></i>
                    <i class="fab fa-html5"></i>
                    <i class="fab fa-css3-alt"></i>
                    <i class="fab fa-git"></i>
                    <i class="fab fa-slack"></i>
                </div>
            </div>
        )
    }

}

export default Skills;
