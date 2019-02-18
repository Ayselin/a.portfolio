import React, { Component } from 'react';
import './Navigation.css';


class Navigation extends Component {
    render() {
        return (
            <nav>
                <div className='nav-links'>
                    <a href='https://www.linkedin.com/in/aysel-rzayeva-722a39172/' rel='noopener noreferrer' target='_blank'>
                        <i className='fa fa-linkedin-square' aria-hidden='true' />
                    </a>
                    <a href='https://github.com/Ayselin' rel='noopener noreferrer' target='_blank'>
                        <i className='fa fa-github-square' aria-hidden='true' />
                    </a>
                    <a href='mailto:ayselrzayeva@hotmail.com' ><i className='fa fa-envelope' aria-hidden='true' /> </a>
                    
                </div>
                <ul>
                   <li><a className='smoothscroll' href='#about'>About</a></li>
                   <li><a className='smoothscroll' href='#skills'>My Skills</a></li>
                   <li><a className='smoothscroll' href='#projects'>My Projects</a></li>
                   <li><a className='smoothscroll' href='#contact'>Contact</a></li>

                </ul>
            </nav>

        );
    }
}


export default Navigation;
