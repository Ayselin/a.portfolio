import React, {Component} from "react";
import Background from './img/moonlight.jpg';

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
                
            </header>
        );

    }
};

export default Header;