'use strict';
const React = require('react');
const Form = require('views/contacts/form_create');
const request = require('superagent');
const _ = require('underscore');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      contacts: [],
      errorMessages: []
    }
  },

  componentDidMount: function() {
    this.fetchContacts();
  },

  fetchContacts: function() {
    request
      .get('api/v1/contacts')
      .query({company_id: this.props.params.companyId})
      .end(function(err, res) {
        this.setState({contacts: res.body});
      }.bind(this));
  },

  store: function(contact) {
    const contactData = _.extend({company_id: this.props.companyId}, contact);
    request
      .post('/api/v1/contacts')
      .send(contactData)
      .end(function(err, res) {
        if(err) return this.setState({errorMessages: err.response.body});
        return this.handleQuote(res.body.id);
      }.bind(this));
  },

  handleQuote: function(id, e) {
    if(e) e.preventDefault();
    const quotationData = {company_id: this.props.params.companyId, contact_id: id};
    request
      .post('/api/v1/quotations')
      .send(quotationData)
      .end(function(err, res) {
        location.hash = `#/quotations/${res.body.id}`;
      });
  },

  handleSubmit: function(contact) {
    this.store(contact);
  },

  render: function() {

    let contactNodes = this.state.contacts.map(function(contact) {
      return (
        <tr key={contact.id}>
          <td>{contact.name} {contact.lastname}</td>
          <td>{contact.email}</td>
          <td><a className="btn btn-primary btn-xs" onClick={this.handleQuote.bind(null, contact.id)}>Cotizar</a></td>
        </tr>
        )
     }.bind(this));

    const errorMessages = this.state.errorMessages.map(function(msg, i) {
      return (<span className="alert alert-danger" key={i}>{msg}</span>)
    });

    if(contactNodes.length < 1) {
      contactNodes = null;
    }

    return (
      <div className="col-md-6">

      <div className={contactNodes ? "panel panel-default" : "hidden"}>
          <div className="panel-body">
          <table className="table table-striped">
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Opciones</th>
            </tr>
            <tbody>
            {contactNodes}
            </tbody>
          </table>
          </div>
      </div>

      <div className="panel panel-default">
          <div className="panel-body">
          {errorMessages}
            <Form onSubmit={this.handleSubmit} />
          </div>
        </div>
      </div>
    );
  }
});
