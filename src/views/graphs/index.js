import React from 'react'
import Graph from './graph'
import SelectAxes from './selectAxes'
import SelectPlotType from './selectPlotType'

const Graphs = () => (
  <React.Fragment>
    <SelectAxes />
    <SelectPlotType />
    <Graph />
  </React.Fragment>
)


export default Graphs