'use strict';
var React = require('react');
var Select = require('react-select');
var request = require('superagent');
var _  = require('lodash');
var Form = require('views/contacts/form_create.jsx');

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      company: {}
    }
  },

  getInitialState: function() {
    return {
      contact: {},
      contacts: [],
      contactSelected: null,
      showForm: false
    }
  },

  componentDidMount: function() {
    this.fetchContacts();
  },

  fetchContacts: function() {
    request
      .get('/api/v1/contacts')
      .query({quotation_id: this.props.quotationId})
      .end(function(err, res) {
        this.setState({contacts: res.body});
      }.bind(this));
  },

  componentWillReceiveProps: function(props) {
    console.log('receive', props);
    this.setState({contact: props.contact});
  },

  handleContact: function(id) {
    this.setState({
      contactSelected: parseInt(id)
    });
  },

  changeContact: function() {
    var contact = this.state.contactSelected;
    this.props.changeContact(contact);
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

  handleSubmit: function(contact) {
    var contactData = _.extend({company_id: this.props.company.id}, contact);
    request
      .post('/api/v1/contacts')
      .send(contactData)
      .end(function(err, res) {
        if(err) return this.setState({errorMessages: err.response.body});
        this.fetchContacts();
        this.showForm();
      }.bind(this));
  },

  render: function() {
    var contact = this.state.contact;
    var company = this.props.company;
    var contactSelect;
    var contactValue;
    contactSelect = _.findWhere(this.state.contacts, {id: this.state.contactSelected});

    if(contactSelect) {
      contactValue = contactSelect.name +" "+ contactSelect.lastname;
    }

    var contactOptions = this.state.contacts.map(function(contact, i) {
      return {value: contact.id, label: contact.name +" "+ contact.lastname}
    });

    return (
      <div className="panel">
        <div className="panel-body">
          <button className="btn btn-primary btn-sm" onClick={this.showForm}>Agregar contacto</button>
          <hr/>
          <div className={this.state.showForm ? "" : "hidden"}>
            <Form
              size="col-md-12"
              btnText="Guardar"
              onSubmit={this.handleSubmit}
              />
          </div>
          <div className="row"> </div>
          <span className={company.name ?  "": "hidden"}>{company.name}<hr/></span>
          <b className={contact.name ?  "": "hidden"}>{contact.name} {contact.lastname}<hr/></b>
          <span className={contact.email ?  "": "hidden"}>{contact.email}<hr/></span>
          <span className={contact.phone_1 ?  "": "hidden"}>{contact.phone_1}<hr/></span>
          <span className={contact.phone_2 ?  "": "hidden"}> {contact.phone_2}<hr/></span>
          <span className={contact.mobile_1 ?  "": "hidden"}>{contact.mobile_1}<hr/></span>
          <span className={contact.mobile_2 ? "" : "hidden" }> {contact.mobile_2}</span>

          <div className="form-group">
            <Select
              options={contactOptions}
              placeholder="Seleccionar contacto"
              onChange={this.handleContact}
              value={contactValue}
            />

          </div>
          <button className="btn btn-default btn-sm pull-right" onClick={this.changeContact}>Cambiar contacto</button>
        </div>
      </div>
    );
  }
});