import React, { Component } from 'react';
import './Navigation.css';
//import gitHub from '../img/github.svg';
//import linkedin from '../img/linkedin.svg';
//import email from '../img/email.svg';

class Navigation extends Component {
    render() {
        return (
            <nav>
                <div className='nav-links'>
                        <a className='nav-link'
                            href='https://github.com/Ayselin'
                            target="_blank"
                            rel="noreferrer noopener">
                            <i className="fab fa-github" />
                        </a>
                        <a className='nav-link'
                            href='https://www.linkedin.com/in/aysel-rzayeva-722a39172/'
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <i className="fab fa-linkedin" />
                        </a>
                        <a className='nav-link'
                            href='mailto:ayselrzayeva@hotmail.com'
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <i className="fas fa-envelope" />
                        </a>
                    </div>
                <ul>
                    <li><a className='nav-bar' href='#home'>Home</a></li>
                    <li><a className='nav-bar' href='#about'>About</a></li>
                    <li><a className='nav-bar' href='#skills'>Skills</a></li>
                    <li><a className='nav-bar' href='#projects'>Projects</a></li>
                </ul>
            </nav>

        );
    }
}


export default Navigation;
