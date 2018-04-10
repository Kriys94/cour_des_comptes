import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import DataTable from './../datatable'
import Graphs from './../graphs'
import Maps from './../maps'
import { withRouter } from "react-router-dom";
import { Menu, Segment } from 'semantic-ui-react'

// const SwitchViews = () => {
    
//     return (
//         <div>
//         <Router>
//         <Switch>
//             <Route
//                 exact
//                 path={'/'}
//                 component={DataTable}
//             />
//             <Route
//                 path={'/graphs'}
//                 component={Graphs}
//             />
//             <Route
//                 path={'/map'}
//                 component={Maps}
//             />

//         </Switch>
//         </Router>
//         </div>
//     )

// }

class SwitchViews extends React.Component {

    render() {
        const { location, push, history } = this.props;

        return (
            <div>
            <Segment inverted style={{borderRadius: 0}}>
            <Menu inverted pointing secondary>
                <Menu.Item
                    name='Données'
                    onClick={() => history.push('/')}
                />
                <Menu.Item
                    name='Graphiques'
                    onClick={() => history.push('/graphs')}
                />
                <Menu.Item
                    name='Cartographie'
                    onClick={() => history.push('/map')}
                />
            </Menu>
            </Segment>

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
    }
}

export default withRouter(SwitchViews)