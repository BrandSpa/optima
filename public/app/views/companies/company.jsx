'use strict';
var React = require('react');
var Form = require('views/contacts/form_create.jsx');
var _ = require('lodash');
var request = require('superagent');

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      company: {},
    }
  },

  getInitialState: function() {
    return {
      contact: {},
      showForm: false
    }
  },

  handleSubmit: function(contact) {
    var contactData = _.extend({company_id: this.props.company.id}, contact);
    if(contact.id) {
      this.updateContact(contactData);
    } else {
      this.storeContact(contactData);
    }
  },

  updateContact: function(contactData) {
    request
      .put('/api/v1/contacts/' + contactData.id)
      .send(contactData)
      .end(function(err, res) {
        if(err) return this.setState({errorMessages: err.response.body});
        this.setState({
          contact: {}
        });
        this.showForm();
      }.bind(this));
  },

  storeContact: function(contactData) {
    request
      .post('/api/v1/contacts')
      .send(contactData)
      .end(function(err, res) {
        if(err) return this.setState({errorMessages: err.response.body});
        this.setState({});
        this.showForm();
      }.bind(this));
  },

  showForm: function() {
    var show;
    if(this.state.showForm) {
      show = false;
    } else {
      show = true;
    }
    this.setState({showForm: show});
  },

  handleEditContact: function(contact, e) {
    e.preventDefault();
    this.setState({
      contact: contact,
      showForm: true
    });
  },

  render: function() {
    var company = this.props.company;
    var contactNodes = company.contacts.map(function(contact) {
      return (
        <li key={contact.id}>
          {contact.name} {contact.lastname} <button onClick={this.handleEditContact.bind(null, contact)} className="btn btn-default btn-xs">Editar</button>
        </li>
      );
    }.bind(this));

    return (
      <li>
        <span>{company.name}<br/></span>
        <span className={company.nit ? "" : "hidden"}><b>NIT:</b> {company.nit} </span>
        <span className={company.address ? "" : "hidden"}><b>Dirección:</b>{company.address} </span>
        <span className={company.phone_1 ? "" : "hidden"}><b>Teléfonos:</b> {company.phone_1} </span>
        <br/>
        <button onClick={this.props.onEdit.bind(null, company)} className="btn btn-default btn-sm">Editar</button>
        <hr/>
        <ul>
          {contactNodes}
        </ul>
        <button className="btn btn-primary btn-sm" onClick={this.showForm}>Agregar contacto</button>
        <div className={this.state.showForm ? "" : "hidden"}>
          <Form
            contact={this.state.contact}
            btnText="Guardar"
            onSubmit={this.handleSubmit}
          />
        </div>
        <hr/>
      </li>
    );
  }
});