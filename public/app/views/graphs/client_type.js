'use strict';
import React from 'react';
import Bar from 'components/chart_bar';

module.exports = React.createClass({
  getInitialState: function() {
    return {
      client_type: []
    }
  },

  componentWillReceiveProps: function(props) {
    if(props.graphsData.client_type) {
      this.setState({
        client_type: props.graphsData.client_type
      });
    }
  },

  render: function() {
    let data1 = this.state.client_type.map((num) => parseInt(num));

    let labels = [
      'Activo',
      'Inactivo',
      'nuevo'
    ];

    let dataSet1 = {
      label: 'Cotizaciones',
      data: data1,
      backgroundColor: [
        'rgba(68, 228, 135, 0.5)',
        'rgba(68, 228, 135, 0.5)',
        'rgba(68, 228, 135, 0.5)'
      ]
    };

    let chartData = {
      labels: labels,
      datasets: [dataSet1]
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
