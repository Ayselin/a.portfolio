import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import Navigation from './Navigation/Navigation.js';
import Header from './Header/Header.js';



class App extends Component {
    render() {
        return (
            <div>
            <Navigation logoTitle="Aysel Rzayeva"/>
            <Header title="Welcome to My Page :)" />
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
