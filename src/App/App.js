import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navigation from '../Navigation/Navigation.js';
import Header from '../Header/Header';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import './App.css';


class App extends Component {
    render() {
        return (
            <div>
            <Navigation logoTitle="Aysel Rzayeva"/>
            <Header title="Welcome!" />
            <About />
            <Skills/>
            <Projects/>
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));


export default App;

