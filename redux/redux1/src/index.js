//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//require('./redux-demo5');
require('./google_maps');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();