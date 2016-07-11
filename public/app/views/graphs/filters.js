'use strict';
import React from 'React';
import _ from 'underscore';

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
        quotation_type: null,
        date_start: null,
        date_end: null
      }
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
    query = _.extend(this.state.query, query);
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
                options={advisorOptions}
                default="Seleccionar asesor"
                value={query.advisor}
                onSelectChange={e => this.handleChange('advisor', e)}
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

                 value={query.quotation_type}
                 onSelectChange={e => this.handleChange('quotation_type', e)}
              />
            </div>
          </div>
        </div>

    )
  }
});
