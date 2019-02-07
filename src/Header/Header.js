import React, { Component } from "react";
import './Header.css'


class Header extends Component {
    render() {
        return (
            <header>
                <div className='headerImg'>
                    <div className='paragraph'>
                        <div className='transbox'>
                            <h1>{this.props.title}</h1>
                            <p>Hello, My name is Aysel and I am a Web Developer from London, UK.
                            I am using HTML CSS and Javascript on a day-to-day basis.
                            I like to build things that work and look good. I am constantly improving and learning.</p>
                        </div>
                    </div>
                </div>
            </header>
        );

    }
};

export default Header;