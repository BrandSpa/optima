'use strict';
var React = require('react');
var BarChart = require("react-chartjs").Bar;

module.exports = React.createClass({
  getInitialState: function() {
    return {
      advisors: []
    }
  },

  componentWillReceiveProps: function(props) {

    if(props.graphsData.advisors) {
      this.setState({
        advisors: props.graphsData.advisors
      });
    }
  },

  render: function() {
     var data1 = this.state.advisors.map(function(num) {
      return parseInt(num)
    });

    var data = {
        labels: [
          'Andrés Rojas',
          'Diego Peña'
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