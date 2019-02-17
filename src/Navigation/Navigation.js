import React, { Component } from 'react';
import './Navigation.css';


class Navigation extends Component {
    render() {
        const sections = ['Home', 'About', 'Skills', 'Projects', 'Contact'];
        const navLinks = sections.map(section => {
            return (
                <li><a href={section}>{section}</a></li>
            )
        })
        return (
            <nav>
                <div className='nav-links'>
                    <a href='https://www.linkedin.com/in/aysel-rzayeva-722a39172/' rel='noopener noreferrer' target='_blank'>
                        <i className='fa fa-linkedin-square' aria-hidden='true' />
                    </a>
                    <a href='https://github.com/Ayselin' rel='noopener noreferrer' target='_blank'>
                        <i className='fa fa-github-square' aria-hidden='true' />
                    </a>
                </div>
                <ul>
                    {navLinks}
                </ul>
            </nav>

        );
    }
}


export default Navigation;
