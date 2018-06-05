import React from 'react'
import { 
    Icon, 
    Menu,
    Segment,
} from 'semantic-ui-react'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import DataHeader from './../datatable/header'

const Header = ({ path, history, toggleSlider }) => {

    const id = path.split('/')[2];

    return (
        <Segment inverted style={{borderRadius: 0, margin: 0}}>
            <Menu inverted pointing secondary>
                <Menu.Item
                    active={path === '/data'}
                    onClick={() => history.push('/data')}
                >
                    <Icon name='database' />
                    Données
                </Menu.Item>
                <Menu.Item
                    active={path === '/graphs'}
                    onClick={() => history.push('/graphs')}
                >
                    <Icon name='pie chart' />
                    Graphique
                </Menu.Item>
                <DataHeader />
            </Menu>
        </Segment>
    )
}

export const mapStateToProps = state => ({
    path: state.router.location.pathname,
});

const RoutedHeader = withRouter(Header);

export default connect(mapStateToProps)(RoutedHeader);