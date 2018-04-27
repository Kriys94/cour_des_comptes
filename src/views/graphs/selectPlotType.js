import React from 'react'
import { connect } from "react-redux";

import {
    selectPlotType,
} from "./../../redux/actions/graph";


const SelectPlotType = ({
  selectPlotType,
}) => {
    const plotTypes = ['scatter', 'bar'];
    const listPlotTypes = plotTypes.map((col) =>
      <option value={col}>
        {col}
      </option>
    );

    // default
    selectPlotType(plotTypes[0]);

    return (

      <div>
        Type de graphique:
        <select onChange={(col) => selectPlotType(col.target.value)}>
          {listPlotTypes}
        </select>

      </div>

    )

}

const mapStateToProps = state => ({
    plotType: state.plotType
});

const mapDispatchToProps = {
    selectPlotType: selectPlotType,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectPlotType)
