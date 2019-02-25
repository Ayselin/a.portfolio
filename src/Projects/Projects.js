import React, { Component } from "react";
import './Projects.css';
import kodflix from '../img/kodflix.png';
import coding from '../img/codingwoman.png';

class Projects extends Component {
    render() {
        return (
            <div className="projects" id='projects'>
                <h1 className='project-title'> My Projects </h1>
                <div className='project-container'>
                    <div className='projects-container1'>
                        <a href='https://kodflix-aysel.herokuapp.com/'
                            target="_blank"
                            rel="noreferrer noopener" ><img className='project-kodflix' src={kodflix} alt='guthub'></img>
                        </a>
                        <h2>KODFLIX</h2>
                        <p className='project-description'>A full stack project simulating the production of Netflix.<br />
                           Used technologies: React.jsm Styling: CSS</p>
                    </div>
                    <div className='projects-container2'>
                        <a href='https://kodiri.github.io/8-days-a-week/#/'
                            target="_blank"
                            rel="noreferrer noopener" ><img className='project-coding' src={coding} alt='guthub'></img>
                        </a>
                        <h2>8 Days a Week</h2>
                    </div>

                </div>
            </div>
        )
    }

}

export default Projects;
