'use strict';
import React from 'react';
import Chart from 'chart.js';
import uid from 'uid';

export default React.createClass({
  getInitialState() {
    return {
      id: `chart-${uid()}`,
      chart: {}
    }
  },

  getDefaultProps() {
    return {
      data: {
        type: 'bar',
        data: {}
      },
      options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
      },
      type: 'bar'
    }
  },

  componentDidMount() {
    let data = {data: this.props.data, options: this.props.options, type: this.props.type};
    let ctx = document.getElementById(this.state.id).getContext("2d");
    let myChart = new Chart(ctx, data);
    this.setState({chart: myChart});
  },

  componentWillReceiveProps(props) {
    if(props.data) {
      this.updateChart(props.data);
    };
  },

  componentWillUnmount() {
    this.state.chart.destroy();
  },

  updateChart(data) {
    let chart = this.state.chart;
    chart.data.datasets = data.datasets;
    chart.update();
  },

  render() {
    return (
      <canvas
        id={this.state.id}
        width="400"
        height="400"
      >
      </canvas>
    )
  }
});
