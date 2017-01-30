'use strict';
import React from 'react';
import moment from 'moment';
import Editor from 'components/editor';
import Select from 'components/form_select';
import DateTime from 'components/datetime';

const trackingForm = React.createClass({
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

  handleContact: function(e) {
    let contact = e.currentTarget.value;
    this.handleChange({ contact_id: parseInt(contact) });
  },

  handleReport: function(html) {
    this.handleChange({ report: html });
  },

  handleChange: function(data) {
    this.setState({
      tracking: {...this.state.tracking, ...data}
    });
  },

  handleSubmit: function(e) {
    e.preventDefault();
    this.handleReport();
    this.props.onSubmit(this.state.tracking);
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
      contactSelect = this.props.contacts.filter(contact => contact.id == tracking.contact_id);
      contactValue = contactSelect.name +" "+ contactSelect.lastname;
    }

    const contactOptions = this.props.contacts.map(function(contact, i) {
      return {value: contact.id, label: contact.name +" "+ contact.lastname}
    });

    return (
      <form onSubmit={this.handleSubmit} onSubmit={this.handleSubmit}>
      <br/>
        <div className="form-group col-md-6">
          <label>Fecha</label>
          <DateTime
            enableTime
            styles='form-control'
            onChange={this.handleDateTime}
          />
        </div>

        <div className="form-group col-md-6">
          <label>Seleccionar o buscar contacto</label>
          <Select
            options={contactOptions}
            placeholder="Seleccionar contacto"
            onSelectChange={this.handleContact}
            value={this.state.tracking.contact_id}
          />
        </div>

        <div className="form-group col-md-12">
          <label>Reporte</label>
          <Editor
            style={{height: '250px'}}
            value={tracking.report}
            onChange={this.handleReport}
            edit={tracking.id ? true : false}
          />
        </div>

        <button className="btn btn-primary btn-sm">Guardar</button>
      </form>
    );
  }
});

export default trackingForm;