'use strict';
import React from 'react';
import request from 'axios';
import qs from 'qs';
import statusOptions from 'options/status.json';
import advisorOptions from 'options/advisors.json';
import typeOptions from 'options/type.json';
import clientOptions from 'options/client_type.json';
import Select from 'components/form_select';
import DataTime from 'components/datetime';

export default React.createClass({
  getInitialState() {
    return {
      query: {
        offset: 0,
        query: null,
        status: null,
        advisor: null,
        client_type: null,
        type: null,
        date_start: null,
        date_end: null
      },
      loading: false
    }
  },

  triggerChange(query) {
    if(typeof this.props.onChange === 'function') {
      this.props.onChange(query);
    }
  },

  changeQuery(field, value) {
    let query = {};
    query[field] = value;
    query = {...this.state.query, ...query};
    this.triggerChange(query);
    this.setState({query: query});
  },

  handleDates(type, date, dateStr) {
    let field = type;
    let value = `${dateStr} 00:00:00`;
    this.changeQuery(field, value);
  },

  handleChange(type, e) {
    let field = type;
    let value = e.currentTarget.value;
    this.changeQuery(field, value);
  },

  download(e) {
    if(e) e.preventDefault();
    this.setState({laoding: true});
    let url = encodeURI(`${location.origin}/quotations/excel?${qs.stringify(this.state.query)}`);
    window.location = url;
    this.setState({laoding: false});
  },

  render() {
    let {query} = this.state;
  
    return (
      <div className="panel">
        <div className="panel-body">
            <div className="form-group col-md-3">
              <DataTime
                placeholder="Seleccionar desde"
                styles="form-control"
                onChange={(date, str) => {this.handleDates('date_start', date, str)}}
              />
            </div>

            <div className="form-group col-md-3">
                <DataTime
                  placeholder="Seleccionar hasta"
                  styles="form-control"
                  onChange={(date, str) => {this.handleDates('date_end', date, str)}}
                />
            </div>

            <div className="form-group col-sm-3">
              <Select
                options={statusOptions}
                default="Seleccionar estado"
                value={query.status}
                onSelectChange={e => this.handleChange('status', e)}
              />
            </div>

            <div className="form-group col-sm-3">
              <Select
                options={clientOptions}
                default="Seleccionar cliente"
                value={query.client_type}
                onSelectChange={e => this.handleChange('client_type', e)}
              />
            </div>

            <div className="form-group col-sm-3">
              <Select
                ref="type"
                options={typeOptions}
                 default="Seleccionar tipo"
                 value={query.type}
                 onSelectChange={e => this.handleChange('type', e)}
              />
            </div>
            <div className="form-group col-sm-3">
              <button onClick={this.download} className="btn-sm btn btn-primary" disable={this.state.loading}>Descargar Reporte</button>
            </div>
          </div>
        </div>

    )
  }
});
