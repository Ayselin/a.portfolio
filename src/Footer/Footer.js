import React, { Component } from "react";
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className='footer-contact'>
                    <a className='footer-github'
                        href='https://github.com/Ayselin'
                        target="_blank"
                        rel="noreferrer noopener">
                        Github
                        </a>
                    <a className='footer-linkedin'
                        href='https://www.linkedin.com/in/aysel-rzayeva-722a39172/'
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        LinkedIn
                        </a>
                    <a className='footer-email'
                        href='mailto:ayselrzayeva@hotmail.com'
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        Email
                        </a>
                    </div>
                    {/*<div className="legal">
                        &copy; 2019 made by me. All rights reserved.
        </div>*/}
            </div>
        )
    }

}

export default Footer;
