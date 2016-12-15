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
        labels: ["Andres Rójas", "Diego Peña"],
        datasets: [{
            label: 'Cotizaciones',
            data: data1,
            backgroundColor: [
                'rgba(255, 194, 1, 0.3)',
                'rgba(255, 182, 61, 0.3)'
            ]
        }]
    }

    return (
      <div className="col-md-6">
        <div className="panel">
          <div className="panel-body">
            <Bar data={myChart} type={this.props.type}/>
          </div>
        </div>
      </div>
    );
  }
});
