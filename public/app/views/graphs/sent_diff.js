'use strict';
import React from 'react';
import Bar from 'components/chart_bar';

module.exports = React.createClass({
  getInitialState: function() {
    return {
      sent_diff: []
    }
  },

  componentWillReceiveProps: function(props) {
    if(props.graphsData.sent_diff) {
      this.setState({
        sent_diff: props.graphsData.sent_diff
      });
    }
  },

  render: function() {
    const data1 = this.state.sent_diff.map((num) => parseInt(num));

    let labels = [
      "Dentro - Inventario",
      "Fuera - Inventario",
      "Dentro - Pedido",
      "Fuera - Pedido"
    ];

    let dataSet1 = {
      label: 'Cotizaciones',
      data: data1
    };

    let chartData = {
      labels: labels,
      datasets: [dataSet1]
    };

    return (
      <div className="col-md-6">
        <div className="panel">
          <div className="panel-body">
            <b>tipo</b>
            <Bar data={chartData} />
          </div>
        </div>
      </div>
    );
  }
});
