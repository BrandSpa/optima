'use strict';
var React = require('react');
var BarChart = require("react-chartjs").Bar;

module.exports = React.createClass({
  getInitialState: function() {
    return {
      sent_diff: []
    }
  },

  componentWillReceiveProps: function(props) {
    console.log('nea');
    if(props.graphsData.sent_diff) {
      this.setState({
        sent_diff: props.graphsData.sent_diff
      });
    }
  },

  render: function() {
     var data1 = this.state.sent_diff.map(function(num) {
      return parseInt(num)
    });

    var data = {
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

    var options = {
      responsive: true,
      legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
    };

    return (
      <div className="col-md-6">
        <div className="panel">
          <div className="panel-body">
             <div className="col-md-12">
              <BarChart
                data={data}
                options={options}
                height="200"
                redraw
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
});