'use strict';
import React from 'react';
import numeral from 'numeral';
import Bar from 'components/chart_bar';

module.exports = React.createClass({
  getInitialState: function() {
    return {
      status: [],
      count: []
    }
  },

  componentWillReceiveProps: function(props) {
    if(props.graphsData.status && props.graphsData.statusCount) {
      this.setState({
        status: props.graphsData.status,
        count: props.graphsData.statusCount
      });
    }
  },

  render: function() {
     const data1 = this.state.status.map(function(num) {
      return parseInt(num);
    });

     const data2 = this.state.count.map(function(num) {
      return parseInt(num)
    });

    let labels = [
      'Borrador',
      'Enviada',
      'Entregada',
      'Seguimiento',
      'Efectiva',
      'No efectiva',
      'No enviada',
      'Replanteada',
      'Por Confirmar',
      'Nula'
    ];

    let dataSet1 = {
      label: 'Dinero',
      data: data1,
      backgroundColor: [
        'rgba(0, 49, 103, 0.3)',
        'rgba(0, 49, 103, 0.3)',
        'rgba(0, 49, 103, 0.3)',
        'rgba(0, 49, 103, 0.3)',
        'rgba(0, 49, 103, 0.3)',
        'rgba(0, 49, 103, 0.3)',
        'rgba(0, 49, 103, 0.3)',
        'rgba(0, 49, 103, 0.3)',
      ]
    };

    let dataSet2 = {
      label: 'Cantidad',
      data: data2
    };

    let chatData = {
      labels: labels,
      datasets: [dataSet1, dataSet2]
    };

    let options = {
      scales: {
        yAxes: [{
        ticks: {
          callback: function(value) { return `$ ${numeral(value).format('0,0')}`; }
          }
        }]
      },
    };

    return (
      <div className="col-md-6">
        <div className="panel">
          <div className="panel-body">
          <b>Estado de cotización</b>
            <Bar data={chatData} options={options}/>
          </div>
        </div>
      </div>
    );
  }
});
