import React from 'react'
import Lottie from "react-lottie";
import animationLoading from "./loading.json";

const Loading = () => {
    return (
        <div style={{    display: 'flex',
            alignItems: 'center', height: '100vh'}}>
            <Lottie
                isClickToPauseDisabled={true}
                options={{
                    loop: true,
                    autoplay: true,
                    renderer: "svg",
                    animationData: animationLoading,
                    rendererSettings: {},
                }}
                heigth={"20%"}
            />
        </div>
    );
};

export default Loading