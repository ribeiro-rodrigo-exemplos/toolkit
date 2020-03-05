import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Import Pages 
import Dashboard from './pages/Dashboard/'
import FindBuckets from './pages/find/Buckets/'
import FindMachines from './pages/find/Machines/'
import Accounts from './pages/Accounts'

export const appRoutes: any = {
    "/": { name: "Home", exact: true, component: Dashboard },
    "/dashboard": { name: "Dashboard", component: Dashboard },
    "/find": { name: "Pesquisa", component: Dashboard, hasSubRoutes: true },
    "/find/buckets": { name: "Buckets", component: FindBuckets },
    "/find/machines": { name: "Maquinas", component: FindMachines },
    "/accounts": { name: "Contas", component: Accounts }
}

export default () => (
    <Switch>
        {
            Object.keys(
                appRoutes
            ).map((path: string) => {
                const routeObject = appRoutes[path]
                if (routeObject.exact)
                    return <Route key={path} exact path={path} component={routeObject.component} />
                else
                    if(!routeObject.hasSubRoutes)
                        return <Route key={path} path={path} component={routeObject.component} />
                return null 
            })
        }
    </Switch>
)