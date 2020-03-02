import React from 'react'

import { Container } from 'reactstrap'

import AppRoutes from './Routes'
import Header from './components/Header/'
import Sidebar from './components/Sidebar'

const myProps: { location: { pathname: string } } = { location: { pathname: window.location.pathname } }

export default () => (
    <div className="app">
        <Header />
        <div className="app-body">
            <Sidebar {...myProps} />
            <main className="main">
                <Container fluid={true}>
                    <AppRoutes />
                </Container>
            </main>
        </div>
    </div>
)