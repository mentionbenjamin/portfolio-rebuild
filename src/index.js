import React from 'react';
import ReactDOM from 'react-dom';
import './css/App.css';
import './css/sidepanel/SPContainer.css';
import './css/projectpreview/PPContainer.css';
import './css/Fonts.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
