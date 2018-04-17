export const UPDATE_DATA = "UPDATE_DATA";

// const fetchData = async (url) => {
//     const response = await fetch(url);
//     const json = await response.json();
//     return json.data
// };

export const updateData = (url) => ({
    type: UPDATE_DATA,
    payload: (async () => {
        const response = await fetch(url);
        const json = await response.json();
        return json
    })
});

// export const UPDATE_COLUMNS = "UPDATE_COLUMNS";
// export const updateColumns = (columns) => ({
//     type: UPDATE_COLUMNS,
//     payload: columns
// });
export const RESET_RENDER_COLUMNS = "RESET_RENDER_COLUMNS";
export const resetRenderColumns = () => ({
    type: RESET_RENDER_COLUMNS
});
// export const RESET_SORTEDDATA = "RESET_SORTEDDATA";
// export const resetSortedData = () => ({
//     type: RESET_SORTEDDATA
// });
export const RESET_PIVOT = "RESET_PIVOT";
export const resetPivot = () => ({
    type: RESET_PIVOT
});
export const ADD_RENDER_COLUMNS = "ADD_RENDER_COLUMNS";
export const addRenderColumns = (renderedColumns) => ({
    type: ADD_RENDER_COLUMNS,
    payload: renderedColumns
});
export const REMOVE_RENDER_COLUMNS = "REMOVE_RENDER_COLUMNS";
export const removeRenderColumns = (renderedColumns) => ({
    type: REMOVE_RENDER_COLUMNS,
    payload: renderedColumns
});
export const UPDATE_SORTEDDATA = "UPDATE_SORTEDDATA";
export const updateSortedData = (sortedData) => ({
    type: UPDATE_SORTEDDATA,
    payload: sortedData
});

export const ADD_PIVOT = "ADD_PIVOT";
export const addPivot = (pivot) => ({
    type: ADD_PIVOT,
    payload: pivot
});

export const REMOVE_PIVOT = "REMOVE_PIVOT";
export const removePivot = (pivot) => ({
    type: REMOVE_PIVOT,
    payload: pivot
});
