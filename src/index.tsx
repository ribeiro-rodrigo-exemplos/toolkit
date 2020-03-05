import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

import './scss/style.scss'
import './scss/core/_dropdown-menu-right.scss'

import StoreProvider from './app/store'
import App from './app/views/App'

ReactDOM.render(
    <StoreProvider>
        <Router>
            <App />
        </Router>
    </StoreProvider>,
    document.getElementById('root')
)


