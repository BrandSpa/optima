'use strict';
import React from 'react';
import Bar from 'components/chart_bar';

module.exports = React.createClass({
  getInitialState() {
    return {
      advisors: [],
    }
  },

  componentWillReceiveProps(props) {
    if(props.graphsData.advisors) {
      this.setState({
        advisors: props.graphsData.advisors
      });
    }
  },

  render() {
    const data1 = this.state.advisors.map(num => parseInt(num));

    var myChart = {
        labels: ['Andrés Rojas', 'Diego Peña', 'No aplica', 'Otros'],
        datasets: [{
            label: 'Cotizaciones',
            data: data1,
            backgroundColor: [
                'rgba(255, 194, 1, 0.3)',
                'rgba(255, 182, 61, 0.3)',
                'rgba(255, 182, 61, 0.2)',
                'rgba(255, 182, 61, 0.2)'
            ]
        }]
    }

    return (
      <div className="col-md-6">
        <div className="panel">
          <div className="panel-body">
            <Bar data={myChart} />
          </div>
        </div>
      </div>
    );
  }
});
