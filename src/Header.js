import React, {Component} from "react";
import Background from './img/moonlight.jpg';
import './Header.css'

const myStyles = {
    backgroundImage: `url( ${Background} )`,
    width: '100%',
    height: '100vh',
    backgroundSize: 'cover'
}


class Header extends Component {
    render(){
        return (
            <header style= {myStyles}>
                <h1>{this.props.title}</h1>
                <p></p>
                <a href="#buttom">{this.props.buttom}</a>
            </header>
        );

    }
};

export default Header;