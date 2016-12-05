'use strict';
import React from 'react';
import Bar from 'components/chart_bar';

module.exports = React.createClass({
  getInitialState: function() {
    return {
      findUs: [],
      count: []
    }
  },

  componentWillReceiveProps: function(props) {
    if(props.graphsData.findUS && props.graphsData.findUSCount) {
      this.setState({
        findUs: props.graphsData.findUS,
        count: props.graphsData.findUSCount
      });
    }
  },

  render: function() {
    let data1 = this.state.findUs.map(num => parseInt(num) );
    let data2 = this.state.count.map(num => parseInt(num) );

    const labels = [
      'Asesores comerciales',
      'Cliente',
      'Página Web Avante',
      'Google Adwords',
      'Referido',
      'Promoción',
      'Paginas Amarilladas',
      'Paginas Amarilladas Web',
      'Teléfono',
      'Redes Sociales'
    ];

    let dataSet1 = {
      label: 'Dinero',
      data: data1,
      backgroundColor: [
        'rgba(255, 136, 124, 0.5)',
        'rgba(255, 136, 124, 0.5)',
        'rgba(255, 136, 124, 0.5)',
        'rgba(255, 136, 124, 0.5)',
        'rgba(255, 136, 124, 0.5)',
        'rgba(255, 136, 124, 0.5)',
        'rgba(255, 136, 124, 0.5)',
        'rgba(255, 136, 124, 0.5)',
        'rgba(255, 136, 124, 0.5)'
      ]
    };

    let dataSet2 = {
      label: 'Número',
      data: data2
    };

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