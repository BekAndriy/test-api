import ReactDOM from 'react-dom';
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import { App } from './app.jsx';


ReactDOM.render( <App /> ,
    document.getElementById('content')
);