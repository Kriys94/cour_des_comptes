import {
    DATA_LOADED,
} from "../actions/views";

const initialUiState = {
    dataLoaded: false,
};

const uiReducer = (state = initialUiState, { type, payload }) => {
    switch (type) {
        case DATA_LOADED:
            return {
                ...state,
                dataLoaded: true
            };

        default:
            return state;
    }
};

export default uiReducer;
