import React, { Component } from "react";
import './Footer.css';
import gitHub from '../img/github.svg';
import linkedin from '../img/linkedin.svg';
import email from '../img/email.svg';


class Footer extends Component {
    render() {
        return (
            <div className="footer">
            <div className='footer-icons'>
                    <a href='https://www.linkedin.com/in/aysel-rzayeva-722a39172/' rel='noopener noreferrer' target='_blank'>
                        <img className='nav-icon' src={linkedin} alt='guthub'></img>
                    </a>
                    <a href='https://github.com/Ayselin' rel='noopener noreferrer' target='_blank'>
                        <img className='nav-icon'src={gitHub} alt='github'></img>
                    </a>
                    <a href='mailto:ayselrzayeva@hotmail.com' ><img className='nav-icon' src={email} alt='email' aria-hidden='true' /> </a>
            </div>
            </div>
        )
    }

}

export default Footer;
