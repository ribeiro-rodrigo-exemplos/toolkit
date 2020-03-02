import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Import Pages 
import Dashboard from './pages/Dashboard/'
import FindBuckets from './pages/find/Buckets/'
import FindMachines from './pages/find/Machines/'
import MFA from './pages/MFA/'

export default () => (
    <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/find/buckets" component={FindBuckets} />
        <Route path="/find/machines" component={FindMachines} />
        <Route path="/mfa" component={MFA} />
    </Switch>
)