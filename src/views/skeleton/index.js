import React from 'react'
import { connect } from "react-redux"
import Loading from './loading'
import Header from './header'
import SwitchViews from './switchviews'
import { withRouter } from 'react-router'

const Skeleton = ({ dataLoaded }) => {

    if(!dataLoaded) {
        return (
            <div>
                <Header />
                <SwitchViews />
            </div>
        )
    } else {
        return <Loading />
    }

}

const mapStateToProps = state => ({
    dataLoaded: state.views.dataLoaded,
});

export default withRouter(connect(mapStateToProps)(Skeleton))