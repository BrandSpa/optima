'use strict';
import React from 'react';
import Bar from 'components/chart_bar';

module.exports = React.createClass({
  getInitialState: function() {
    return {
      no_effective: [],
      count: []
    }
  },

  componentWillReceiveProps: function(props) {
    if(props.graphsData.no_effective && props.graphsData.no_effective_count) {
      this.setState({
        no_effective: props.graphsData.no_effective,
        count: props.graphsData.no_effective_count
      });
    }
  },

  render: function() {
     let dataMoney = this.state.no_effective.map(num => parseInt(num));
     let dataCount = this.state.count.map(num => parseInt(num));

    const labels = [
      "No disponible",
      "No confiable",
      "Competencia",
      "Por cliente",
      "sin etiquetar"
    ];

    let dataSet1 = {label: 'Dinero', data: dataMoney};
    let dataSet2 = {label: 'Número', data: dataCount};

    let chartData = {
      labels: labels,
      datasets: [dataSet1, dataSet2]
    };

    return (
      <div className="col-md-6">
        <div className="panel">
          <div className="panel-body">
            <Bar data={chartData} />
          </div>
        </div>
      </div>
    );
  }
});
