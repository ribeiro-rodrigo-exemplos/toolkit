import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Import Pages 
import Dashboard from '../views/pages/dashboard/Dashboard'
import FindBuckets from '../views/pages/find/buckets/Buckets'
import FindMachines from '../views/pages/find/machines/Machines'
import MFA from '../views/pages/mfa/MFA'

export default () => (
    <Switch>
        <Route path="/" component={Dashboard} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/find/buckets" component={FindBuckets} />
        <Route path="/find/machines" component={FindMachines} />
        <Route path="/mfa" component={MFA} />
    </Switch>
)