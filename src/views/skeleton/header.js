import React from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const Header = ({ path, history }) => {

    return (
        <Segment inverted style={{borderRadius: 0, margin: 0}}>
            <Menu inverted pointing secondary>
                <Menu.Item
                    name='Données'
                    active={path === '/'}
                    onClick={() => history.push('/')}
                />
                <Menu.Item
                    name='Graphiques'
                    active={path === '/graphs'}
                    onClick={() => history.push('/graphs')}
                />
                <Menu.Item
                    name='Cartographie'
                    active={path === '/map'}
                    onClick={() => history.push('/map')}
                />
            </Menu>
        </Segment>
    )
}

export const mapStateToProps = state => ({
    path: state.router.location.pathname
});

const RoutedHeader = withRouter(Header);

export default connect(mapStateToProps)(RoutedHeader);