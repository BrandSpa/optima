'use strict';
import React from 'react';
import request from 'superagent';
import moment from 'moment';
import Select from 'components/form_select';
import DateTime from 'components/datetime';

module.exports = React.createClass({
  getInitialState: function() {
    return {
      tracking: {
        contact: {},
        register_date: '',
        register_time: '',
        report: '',
        contact_id: null
      },
      contacts: []
    }
  },

  componentDidMount: function() {
    this.fetch();
  },

  fetch() {
    // request
    // .get('/api/v1/contacts')
    // .query({quotation_id: this.props.quotationId})
    // .end((err, res) =>{
    //   this.setState({contacts: res.body});
    // });
  },

  handleContact: function(e) {
    let contact = e.currentTarget.value;
    this.handleChange({ contact_id: parseInt(contact) });
  },

  handleReport: function() {
    this.handleChange({ report: this.refs.report.value });
  },

  handleChange: function(data) {
    this.setState({
      tracking: {...this.state.tracking, ...data}
    });
  },

  handleSubmit: function(e) {
    e.preventDefault();
    this.handleReport();
    console.log(this.state.tracking);
    this.props.onSubmit(this.state.tracking);
    // this.setState({tracking: {
    //   report: ''
    // }});
  },

  handleDateTime(dateObj, dateStr) {
    let datetime = moment(dateObj).format('YYYY/MM/DD HH:mm:ss').split(' ');
    let date = datetime[0];
    let time = datetime[1];
    this.handleChange({register_date: date, register_time: time});
  },

  render: function() {
    const tracking = this.state.tracking;
    let contactValue;
    let contactSelect;

    if(tracking.contact_id) {
      contactSelect = this.state.contacts.filter(contact => contact.id == tracking.contact_id);
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
          <DateTime
            enableTime
            styles='form-control'
            onChange={this.handleDateTime}
          />
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="">Seleccionar o buscar contacto</label>
          <Select
            options={contactOptions}
            placeholder="Seleccionar contacto"
            onSelectChange={this.handleContact}
            value={this.state.tracking.contact_id}
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
