import React from 'react'
import Lottie from "react-lottie";
import animationLoading from "./loading.json";
import { updateData } from "./../../redux/actions/data";
import { connect } from 'react-redux'

const Loading = ({
    updateData,
}) => {

    updateData('http://localhost:8080/api')

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

const mapDispatchToProps = {
    updateData: updateData,
};

export default connect(null, mapDispatchToProps)(Loading)