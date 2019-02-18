import React, { Component } from "react";
import './Skills.css'
import reactImg from '../img/react.svg'

class Skills extends Component {
    render() {
        return (
            <div className="skills" id='skills'>
                <h1> My Skills </h1>
                <div className='skills-row'>
                    <div>
                        <img src={reactImg} alt='react'></img>
                    </div>
                    <div>
                        <span><ion-icon name="logo-html5"></ion-icon></span>
                    </div>
                    <div>
                        <span><ion-icon name="logo-css3"></ion-icon></span>
                    </div>
                    <div>
                        <span><ion-icon name="git-branch"></ion-icon></span>
                    </div>
                    <div>
                        <span><ion-icon name="logo-nodejs"></ion-icon></span>
                    </div>
                    <div>
                        <span></span>
                    </div>
                </div>
            </div>
        )
    }

}

export default Skills;
