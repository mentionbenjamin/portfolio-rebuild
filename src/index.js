import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/SidePanelContainer.css';
import './css/ProjectPreviewWrapper.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
