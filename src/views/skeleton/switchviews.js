import React from 'react'
import { Route, Switch } from 'react-router-dom'
import DataTable from './../datatable'
import Graphs from './../graphs'
import Maps from './../maps'

const SwitchViews = () => (
    <div
        style={{
            height: "calc(100vh - 74px)"
        }}
    >
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
    </div>
)

export default SwitchViews