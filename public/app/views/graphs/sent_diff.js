'use strict';
const React = require('react');
const BarChart = require("react-chartjs").Bar;
const LineChart = require("react-chartjs").Line;

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
     const data1 = this.state.sent_diff.map(function(num) {
      return parseInt(num)
    });

    const data = {
        labels: [
          "Dentro - Inventario",
          "Fuera - Inventario",
          "Dentro - Pedido",
          "Fuera - Pedido"
        ],
        datasets: [
            {
                label: "My First dataset",
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