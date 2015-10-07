'use strict';
var React = require('react');
var BarChart = require("react-chartjs").Bar;

module.exports = React.createClass({
  getInitialState: function() {
    return {
      no_effective: [],
      count: []
    }
  },

  componentWillReceiveProps: function(props) {
    if(props.graphsData.no_effective && props.graphsData.no_effective_count) {
      this.setState({
        no_effective: props.graphsData.no_effective,
        count: props.graphsData.no_effective_count
      });
    }
  },

  render: function() {
     var data1 = this.state.no_effective.map(function(num) {
      return parseInt(num)
    });

     var data2 = this.state.count.map(function(num) {
      return parseInt(num)
    });

    var data = {
        labels: [
          "No disponible",
          "No confiable",
          "Competencia",
          "Por cliente",
          ""
        ],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,0.8)",
                highlightFill: "rgba(220,220,220,0.75)",
                highlightStroke: "rgba(220,220,220,1)",
                data: data1
            },
              {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0)",
                strokeColor: "rgba(220,220,220,0)",
                highlightFill: "rgba(220,220,220,0)",
                highlightStroke: "rgba(220,220,220, 0)",
                data: data2
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