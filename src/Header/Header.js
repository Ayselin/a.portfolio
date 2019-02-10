import React, { Component } from "react";
import './Header.css'



class Header extends Component {

constructor() {
    super();
    this.state = {
        welcomeMessage: 'Hi, I am a Web Developer from London, UK.'
    };
}

componentDidMount() {
    setTimeout(() => {
        this.setState({
            greetingMessage: 'Nice to Meet You !'
        })
    }, 3000);
}

    render() {
        return (
            <header>
                <div className='headerImg'>
                    <div className='paragraph'>
                            <h1>{this.props.title}</h1>
                            <div className='header-p'>{this.state.welcomeMessage}</div>
                            <div className='greeting'>{this.state.greetingMessage}</div>
                    </div>
                </div>
            </header>
        );

    }
};

export default Header;