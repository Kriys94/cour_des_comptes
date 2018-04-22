import React from 'react'
import Lottie from "react-lottie";
import animationLoading from "./loading.json";
import { updateData } from "./../../redux/actions/data";
import { connect } from 'react-redux'
import { serverApi } from './../../utilis/config'

const Loading = ({
    path,
    updateData,
}) => {

    const id = path.split('/')[2];
    // cde857960e8dc24c9cbcced673b496bb
    updateData(serverApi + '/' + id)

    return (
        <div style={{ display: 'flex', flex: 1, alignItems: 'center', height: '100vh', width: '100vw'}}>
            <Lottie
                isClickToPauseDisabled={true}
                options={{
                    loop: true,
                    autoplay: true,
                    renderer: "svg",
                    animationData: animationLoading,
                    rendererSettings: {},
                }}
                heigth={'100%'}
                width={'100%'}
            />
        </div>
    );
};

export const mapStateToProps = state => ({
    path: state.router.location.pathname,
});

const mapDispatchToProps = {
    updateData: updateData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Loading)