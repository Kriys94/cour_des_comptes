import React from 'react'
import { connect } from "react-redux"
import Loading from './loading'
import Header from './header'
import SwitchViews from './switchviews'

const Skeleton = ({ dataLoaded }) => {

    if(!dataLoaded) {
        return (
            <div>
                {/* <Header /> */}
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


export default connect(
    mapStateToProps,
)(
    Skeleton
);