import React from 'react'
import { 
    Icon, 
    Menu,
    Segment,
} from 'semantic-ui-react'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import DataHeader from './../datatable/header'
import { 
    toggleSlider,
} from "./../../redux/actions/views";

const Header = ({ path, history, toggleSlider }) => {

    return (
        <Segment inverted style={{borderRadius: 0, margin: 0}}>
            <Menu inverted pointing secondary>
                <Menu.Item
                    active={path === '/'}
                    onClick={() => history.push('/')}
                >
                    <Icon name='database' />
                    Données
                </Menu.Item>
                <Menu.Item
                    active={path === '/graphs'}
                    onClick={() => history.push('/graphs')}
                >
                    <Icon name='pie chart' />
                    Graphiques
                </Menu.Item>
                <Menu.Item
                    active={path === '/map'}
                    onClick={() => history.push('/map')}
                >
                    <Icon name='map' />
                    Cartographie
                </Menu.Item>
                <Menu.Item
                    active={path === '/map'}
                    onClick={() => toggleSlider()}
                >
                    <Icon name='options' />
                    Outils
                </Menu.Item>
                <DataHeader />
            </Menu>
        </Segment>
    )
}

export const mapStateToProps = state => ({
    path: state.router.location.pathname,
});

const mapDispatchToProps = {
    toggleSlider: toggleSlider,
};

const RoutedHeader = withRouter(Header);

export default connect(mapStateToProps, mapDispatchToProps)(RoutedHeader);