import React, { Component } from "react";
import './Header.css'


class Header extends Component {
    render() {
        return (
            <header>
                <div className='headerImg'>
                    <div className='paragraph'>
                            <h1>{this.props.title}</h1>
                            <div className='header-p'>Hi, I am a Web Developer from London, UK.</div>
                    </div>
                </div>
            </header>
        );

    }
};

export default Header;