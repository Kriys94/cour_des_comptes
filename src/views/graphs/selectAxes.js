import React from 'react'
import { connect } from "react-redux";

import {
    addXAxis,
    addYAxis,
} from "./../../redux/actions/graph";


const SelectAxes = ({
  columns,
  addXAxis,
  addYAxis
}) => {
  const listItemsX = columns.map((col) =>
    <option value={col}>
      {col}
    </option>
  );
  const listItemsY = columns.map((col) =>
    <option value={col}>
      {col}
    </option>
  );

  // default
  addXAxis(columns[0]);
  addYAxis(columns[0]);

    return (

      <div>
        Axe X: 
        <select onChange={(col) => addXAxis(col.target.value)}>
          {listItemsX}
        </select>

        Axe Y: 
        <select onChange={(col) => addYAxis(col.target.value)}>
          {listItemsY}
        </select>

        </div>

    )

}

const mapStateToProps = state => ({
    columns: state.data.columns,
    x: state.x,
    y: state.y
});

const mapDispatchToProps = {
    addXAxis: addXAxis,
    addYAxis: addYAxis,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectAxes)
