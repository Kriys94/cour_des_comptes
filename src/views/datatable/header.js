import React from 'react'
import {
    Icon,
    Menu,
    Dropdown,
} from 'semantic-ui-react'
import { connect } from "react-redux";
import {
    resetAll,
    resetSorted,
    resetPage,
    resetPageSize,
    resetExpanded,
    resetResized,
    resetFiltered
} from "./../../redux/actions/reactTable";
import { CSVLink } from 'react-csv';

const Header = ({
    reactTable,
    resetAll,
    resetSorted,
    resetPage,
    resetPageSize,
    resetExpanded,
    resetResized,
    resetFiltered,
    sortedData,
    columns
}) => {
    return (
        <Menu.Menu position='right'>
            <Menu.Item name='help'>
                <Icon name='add' />
                Aggréger
            </Menu.Item>
            <Menu.Item
                name='save'
            >
                <Icon name='save' />
                <CSVLink
                    filename={"my-file.csv"}
                    headers={columns}
                    data={sortedData}
                    target="_blank"
                >
                    Exporter ({sortedData.length})
                </CSVLink>
            </Menu.Item>
            <Dropdown
                item
                text='Réinitialiser'
                icon='erase'
                className='icon'
            >
                <Dropdown.Menu>
                    <Dropdown.Item 
                        onClick={() => resetAll()}
                    >
                        Tout
                    </Dropdown.Item>
                    <Dropdown.Item
                        onClick={() => resetSorted()}
                    >
                        Le tri
                    </Dropdown.Item>
                    <Dropdown.Item
                        onClick={() => resetFiltered()}
                    >
                        Les filtres
                    </Dropdown.Item>
                    <Dropdown.Item
                        onClick={() => resetPage()}
                    >
                        Page
                    </Dropdown.Item>
                    <Dropdown.Item
                        onClick={() => resetPageSize()}
                    >
                        Nb d'obs/page
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Menu>
    )
}

export const mapStateToProps = state => ({
    reactTable: state.reactTable,
    sortedData: state.data.sortedData,
    columns: state.data.columns
});

const mapDispatchToProps = {
    resetAll: resetAll,
    resetSorted: resetSorted,
    resetPage: resetPage,
    resetPageSize: resetPageSize,
    resetExpanded: resetExpanded,
    resetResized: resetResized,
    resetFiltered: resetFiltered,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);