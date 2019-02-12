import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navigation from '../Navigation/Navigation.js';
import Header from '../Header/Header';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
//import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';
import './App.css';
import Footer from '../Footer/Footer';


class App extends Component {
    render() {
        return (
            <div>
            <Navigation />
            <Header title="Aysel Rzayeva" />
            <About />
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));


export default App;

