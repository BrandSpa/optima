'use strict';
var React = require('react');
var request = require('superagent');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      services: []
    }
  },

  componentDidMount: function() {
    request
    .get('/api/v1/services')
    .end(function(err, res) {
      if(err) return console.log(err.body);
      this.setState({services: res.body});
    }.bind(this));
  },

  render: function() {
    var serviceNodes = this.state.services.map(function(service) {
      return (
        <tr key={service.id}>
          <td>{service.title}</td>
          <td>{service.price_1}</td>
          <td>{service.price_2}</td>
          <td>
            <button >Editar</button>
          </td>
        </tr>
      )
    }.bind(this));

    return (
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Título</th>
              <th>Precio 1</th>
              <th>Precio 2</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {serviceNodes}
          </tbody>

        </table>
      </div>
    );
  }
});