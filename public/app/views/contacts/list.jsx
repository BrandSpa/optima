'use strict';
var React = require('react');
var request = require('superagent');
var Contact = require('views/contacts/contact.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      contacts: []
    }
  },

  componentDidMount: function() {
    request
      .get('/api/v1/contacts')
      .end(function(err, res) {
        this.setState({contacts: res.body});
      }.bind(this));
  },

  render: function() {
    var contacts = this.state.contacts;

    var contactNodes = contacts.map(function(contact) {
      return (<Contact key={contact.id} contact={contact} />);
    });

    return (
      <div className="col-md-12">
        <div className="panel">
          <div className="panel-body">
          <button className="btn btn-primary btn-sm">Agregar contacto</button>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Teléfonos</th>
                    <th>Celulares</th>
                    <th>Empresa</th>
                  </tr>
                </thead>
                <tbody>
                  {contactNodes}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
});