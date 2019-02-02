import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import Navigation from './Navigation.js';

ReactDOM.render(<Navigation logoTitle="Welcome to My Portfolio"/>, document.getElementById('root'));

serviceWorker.unregister();
