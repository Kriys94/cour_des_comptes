import React from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { withRouter, matchPath, Link } from "react-router-dom";

// class Header extends Component {
//   state = { activeItem: 'Données' }

//   handleItemClick = (e, { name }) => {
//       this.setState({ activeItem: name })
//       this.props.push('/' + name)
//   }
//   render() {
//     const { activeItem } = this.state

//     return (
//         <Segment inverted style={{borderRadius: 0}}>
//             <Menu inverted pointing secondary>
//                 <Menu.Item name='Données' active={activeItem === 'Données'} onClick={this.handleItemClick} />
//                 <Menu.Item name='graphs' active={activeItem === 'Graphiques'} onClick={this.handleItemClick} />
//                 <Menu.Item name='map' active={activeItem === 'Cartographie'} onClick={this.handleItemClick} />
//             </Menu>
//         </Segment>
//     )
//   }
// }


const Header = ({ location, push, history }) => {

    console.log(history)

    const isActiveTab = route =>
    matchPath(location.pathname, {
        path: route,
    });

    return (
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
            <div>
                <Link to="/graphs">Contact</Link>
            </div>
        </Segment>
    )
}

export const mapStateToProps = state => ({
});

export const mapDispatchToProps = {
    push,
};

const RoutedHeader = withRouter(Header);

export default connect(mapStateToProps, mapDispatchToProps)(RoutedHeader);