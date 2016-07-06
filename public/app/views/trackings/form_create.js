'use strict';
const React = require('react');
const request = require('superagent');
const DateTimeField = require('react-bootstrap-datetimepicker');
const Select = require('react-select');
const _ = require('lodash');
const moment = require('moment');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      tracking: {
        contact: {}
      },
      contacts: []
    }
  },

  componentDidMount: function() {
    request
    .get('/api/v1/contacts')
    .query({quotation_id: this.props.quotationId})
    .end(function(err, res) {
      this.setState({contacts: res.body});
    }.bind(this));
  },

  handleDate: function(date) {
    this.handleChange({
      register_date: date
    });
  },

   handleTime: function(time) {
    this.handleChange({
      register_time: moment(time, 'x').format('HH:mm:ss'),
      time: time
    });
  },

  handleContact: function(contact) {
    this.handleChange({
      contact_id: parseInt(contact)
    });
  },

  handleReport: function() {
    this.handleChange({
      report: React.findDOMNode(this.refs.report).value
    });
  },

  handleChange: function(data) {
    this.setState({
      tracking: _.extend(this.state.tracking, data)
    });
  },

  handleSubmit: function(e) {
    e.preventDefault();
    this.handleReport();
    this.props.onSubmit(this.state.tracking);
    this.setState({tracking: {
      report: ''
    }});
  },

  render: function() {
    const tracking = this.state.tracking;
    let contactValue;
    let contactSelect;

    if(tracking.contact_id) {
      contactSelect = _.findWhere(this.state.contacts, {id: tracking.contact_id});
      contactValue = contactSelect.name +" "+ contactSelect.lastname;
    }

    const contactOptions = this.state.contacts.map(function(contact, i) {
      return {value: contact.id, label: contact.name +" "+ contact.lastname}
    });

    return (
      <form onSubmit={this.handleSubmit} onSubmit={this.handleSubmit}>
      <br/>
        <div className="form-group col-md-6">
          <label htmlFor="">Fecha</label>
          <DateTimeField
            defaultText="Seleccionar fecha"
            mode="date"
            dateTime={moment().format('YYYY-MM-DD')}
            format="YYYY-MM-DD"
            onChange={this.handleDate}
            value={tracking.register_date}
            />
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="">Hora</label>
          <DateTimeField
            defaultText="Seleccionar hora"
            mode="time"
            onChange={this.handleTime}
            value={tracking.time}
          />
        </div>

        <div className="form-group col-md-12">
          <label htmlFor="">Seleccionar o buscar contacto</label>
          <Select
            options={contactOptions}
            placeholder="Seleccionar contacto"
            onChange={this.handleContact}
            value={contactValue}
          />
        </div>

        <div className="form-group col-md-12">
          <label htmlFor="">Reporte</label>
          <textarea
            ref="report"
            rows="2"
            className="form-control"
            onChange={this.handleReport}
            value={tracking.report}
            ></textarea>
        </div>

        <button className="btn btn-primary btn-sm">Guardar</button>
      </form>
    );
  }
});