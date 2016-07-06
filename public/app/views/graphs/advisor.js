'use strict';
const React = require('react');
const BarChart = require("react-chartjs").Bar;
const LineChart = require("react-chartjs").Line;

module.exports = React.createClass({
  getInitialState() {
    return {
      advisors: []
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

    const data = {
      labels: [
        'Andrés Rojas',
        'Diego Peña'
      ],
      datasets: [
        {
          fillColor: "rgba(220,220,220,0.5)",
          strokeColor: "rgba(220,220,220,0.8)",
          highlightFill: "rgba(220,220,220,0.75)",
          highlightStroke: "rgba(220,220,220,1)",
          data: data1
        }
      ]
    };

    const options = {
      responsive: true,
      legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
    };

    let chart;

    if(this.props.shape === 'Bar') {
      chart = <BarChart
                data={data}
                options={options}
                height="200"
                redraw
              />
    } else {
      chart = <LineChart
        data={data}
        options={options}
        height="200"
        redraw
      />
    }

    return (
      <div className="col-md-6">
        <div className="panel">
          <div className="panel-body">
            <div className="col-md-12">
              {chart}
            </div>
          </div>
        </div>
      </div>
    );
  }
});