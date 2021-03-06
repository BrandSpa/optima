'use strict';
import React from 'react';
import statusOptions from '../../options/status.json';
import advisorOptions from '../../options/advisors.json';
import typeOptions from '../../options/type.json';
import clientOptions from '../../options/client_type.json';
import priorityOptions from '../../options/priority.json';
import Select from '../../components/form_select';
import DataTime from '../../components/datetime';

const quoFilters = React.createClass({
  getInitialState() {
    return {
      query: {
        offset: 0,
        query: null,
        status: null,
        advisor: null,
        client_type: null,
        quotation_type: null,
        date_start: null,
        date_end: null,
        priority: null
      }
    }
  },

  triggerChange(query) {
    if(typeof this.props.onChange === 'function') {
      this.props.onChange(query);
    }
  },

  changeQuery(field, value) {
    let query = {...this.state.query, [field]: value};
    this.triggerChange(query);
    this.setState({query});
  },

  handleDates(type, date, dateStr) {
    let field = type;
    let value = `${dateStr} 00:00:00`;
    this.changeQuery(field, value);
  },

  handleChange(field, e) {
    let value = e.currentTarget.value;
    this.changeQuery(field, value);
  },

  render() {
    let {query} = this.state;
    return (
      <div className="panel">
        <div className="panel-body">
          <div className="row">

            <div className="form-group col-md-3">
              <input
                placeholder="Buscar cotizaciones"
                className="form-control input-query"
                onChange={ this.handleChange.bind(null, 'query') }
                value={ query.query || '' }
              />
            </div>

             <div className="form-group col-sm-3 filter-priority">
              <Select
                options={priorityOptions}
                default="Seleccionar prioridad"
                value={query.priority}
                onSelectChange={this.handleChange.bind(null, 'priority')}
              />
            </div>

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
          </div>

          <div className="row">
            <div className="form-group col-sm-3">
              <Select
                options={statusOptions}
                default="Seleccionar estado"
                value={query.status}
                onSelectChange={this.handleChange.bind(null, 'status')}
              />
            </div>

            <div className="form-group col-sm-3">
              <Select
                options={advisorOptions}
                default="Seleccionar asesor"
                value={query.advisor}
                onSelectChange={ this.handleChange.bind(null, 'advisor') }
              />
            </div>

            <div className="form-group col-sm-3">
              <Select
                options={clientOptions}
                default="Seleccionar cliente"
                value={query.client_type}
                onSelectChange={this.handleChange.bind(null, 'client_type')}
              />
            </div>

            <div className="form-group col-sm-3">
              <Select
                ref="type"
                options={typeOptions}
                 default="Seleccionar tipo"

                 value={query.quotation_type}
                 onSelectChange={e => this.handleChange('quotation_type', e)}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
});

export default quoFilters;
