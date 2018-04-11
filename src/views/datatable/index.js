import React from 'react'
import ReactTable from 'react-table'
import { makeData } from "./../../utilis"
import 'react-table/react-table.css'

const TableComponent = () => {

    return (
        <ReactTable
            filterable
            noDataText='Aucune donnée'
            previousText='Précédent'
            nextText='Suivant'
            loadingText='Chargement...'
            ofText='sur'
            rowsText='données'
            defaultPageSize={50}
            data={makeData(1000)}
            style={{
                height: "calc(100vh - 70px)"
            }}
            className="-striped -highlight"
            columns={[
                {
                    Header: "First Name",
                    accessor: "firstName"
                },
                {
                    Header: "Last Name",
                    id: "lastName",
                    accessor: d => d.lastName
                },
                {
                    Header: "Age",
                    accessor: "age"
                },
                {
                    Header: "Status",
                    accessor: "status"
                },
                {
                    Header: "Visits",
                    accessor: "visits"
                }
            ]}
        />
    )
}

export default TableComponent