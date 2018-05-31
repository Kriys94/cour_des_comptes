import React from 'react'
import { connect } from "react-redux";

import {
  VictoryScatter,
  VictoryBar,
  VictoryChart,
  VictoryZoomContainer,
  VictoryTooltip,
} from 'victory';

const Graph = ({
  data,
  graph,
}) => {
    if (graph.xAxis === undefined || graph.yAxis === undefined) {
      return (
        <div>
          Choisissez les axes
        </div>
      );
    }

    switch (graph.plotType) {
      case 'scatter':
        return (
          <VictoryChart
            containerComponent={<VictoryZoomContainer />}
          >
            <VictoryScatter
              data={data}
              x={graph.xAxis}
              y={graph.yAxis}
              labels={(d) => d.y}
              labelComponent={<VictoryTooltip/>}
            />
          </VictoryChart>
        )
      case 'bar':
        return (
          <VictoryChart
            containerComponent={<VictoryZoomContainer />}
          >
            <VictoryBar
              data={data}
              x={graph.xAxis}
              y={graph.yAxis}
              labels={(d) => d.y}
              labelComponent={<VictoryTooltip/>}
            />
          </VictoryChart>
        )
      default:
        return (
          'Choisir un type de graphique'
        )
    }

}

const mapStateToProps = state => ({
    data: state.data.data,
    graph: state.graph,
});


export default connect(mapStateToProps)(Graph)