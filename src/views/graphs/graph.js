import React from 'react'
import { connect } from "react-redux";

import { VictoryScatter } from 'victory';
import { VictoryBar, VictoryChart } from 'victory';

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
          <VictoryChart>
            <VictoryScatter
              data={data}
              x={graph.xAxis}
              y={graph.yAxis}
            />
          </VictoryChart>
        )
      case 'bar':
        return (
          <VictoryChart>
            <VictoryBar
              data={data}
              x={graph.xAxis}
              y={graph.yAxis}
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