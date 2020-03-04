import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

import './scss/style.scss'
import './scss/core/_dropdown-menu-right.scss'

import Store from './store/Store'
import App from './views/App'


//ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));

ReactDOM.render(
    <Store>
        <Router>
            <App/> 
        </Router>
    </Store>, 
    document.getElementById('root')
)


