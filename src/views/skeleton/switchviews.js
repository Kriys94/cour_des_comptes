import React from 'react'
import { Route, Switch } from 'react-router-dom'
import DataTable from './../datatable'
import Graphs from './../graphs'
import Maps from './../maps'

const SwitchViews = () => (
    <Switch>
        <Route
            exact
            strict
            path={'/'}
            component={DataTable}
        />
        <Route
            exact
            strict
            path={'/graphs'}
            component={Graphs}
        />
        <Route
            exact
            strict
            path={'/map'}
            component={Maps}
        />
    </Switch>
)

export default SwitchViews