import React, { Component } from 'react';
import './Navigation.css';
import gitHub from '../img/github.svg';
import linkedin from '../img/linkedin.svg';
import email from '../img/email.svg';

class Navigation extends Component {
    render() {
        return (
            <nav>
                <div className='nav-links'>
                    <a href='https://www.linkedin.com/in/aysel-rzayeva-722a39172/' rel='noopener noreferrer' target='_blank'>
                        <img className='nav-icon' src={linkedin} alt='guthub'></img>
                    </a>
                    <a href='https://github.com/Ayselin' rel='noopener noreferrer' target='_blank'>
                        <img className='nav-icon'src={gitHub} alt='github'></img>
                    </a>
                    <a href='mailto:ayselrzayeva@hotmail.com' ><img className='nav-icon' src={email} alt='email' aria-hidden='true' /> </a>
                    
                </div>
                <ul>
                   <li><a className='smoothscroll' href='#home'>Home</a></li>
                   <li><a className='smoothscroll' href='#about'>About</a></li>
                   <li><a className='smoothscroll' href='#skills'>Skills</a></li>
                   <li><a className='smoothscroll' href='#projects'>Projects</a></li>
                </ul>
            </nav>

        );
    }
}


export default Navigation;
