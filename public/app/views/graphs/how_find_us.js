'use strict';
const React = require('react');
const BarChart = require("react-chartjs").Bar;
const LineChart = require("react-chartjs").Line;

module.exports = React.createClass({
  getInitialState: function() {
    return {
      findUs: [],
      count: []
    }
  },

  componentWillReceiveProps: function(props) {
    console.log();
    console.log(props.graphsData.findUSCount);

    if(props.graphsData.findUS && props.graphsData.findUSCount) {
      this.setState({
        findUs: props.graphsData.findUS,
        count: props.graphsData.findUSCount
      });
    }
  },

  render: function() {
     const data1 = this.state.findUs.map(function(num) {
      return parseInt(num)
    });

     const data2 = this.state.count.map(function(num) {
      return parseInt(num)
    });

    const data = {
        labels: [
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