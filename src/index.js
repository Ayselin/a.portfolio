import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Navigation from './Navigation/Navigation.js';
import Header from './Header/Header.js';
import About from './About/About';
import Projects from './Projects/Projects';


class App extends Component {
    render() {
        return (
            <div>
            <Navigation logoTitle="Aysel Rzayeva"/>
            <Header title="Welcome!" />
            <About />
            <Projects/>
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
