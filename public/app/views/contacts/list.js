'use strict';
const React = require('react');
const request = require('superagent');
const Contact = require('views/contacts/contact');

module.exports = React.createClass({
  getInitialState() {
    return {
      contacts: []
    }
  },

  componentDidMount() {
    request
      .get('/api/v1/contacts')
      .end((err, res) => this.setState({contacts: res.body}));
  },

  render() {
    const contacts = this.state.contacts;

    const contactNodes = contacts.map(contact => <Contact key={contact.id} contact={contact} />);

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
