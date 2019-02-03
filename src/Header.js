import React, {Component} from "react";
import Background from './img/moonlight.jpg';
import './Header.css'

const myStyles = {
    backgroundImage: `url( ${Background} )`,
    width: '100%',
    height: '80vh',
    backgroundSize: 'cover'
}


class Header extends Component {
    render() {
        return (
            <header style={myStyles}>
            <div className='paragraph'>
                <div className='transbox'>
                <h1>{this.props.title}</h1>
                <p>Hello, My name is Aysel and I am a web developer from London, UK.
		         I am using HTML CSS and Javascript on a day-to-day basis.
		         I like to build things that work and look good. I am constantly improving and learning.</p>
                <a href="#buttom">{this.props.buttom}</a>
                </div>
            </div>
            </header>
        );

    }
};

export default Header;