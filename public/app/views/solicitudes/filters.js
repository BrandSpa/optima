'use strict';
import React from 'react';
import statusOptions from '../../options/status_solicitudes.json';
import advisorOptions from '../../options/advisors.json';
import typeOptions from '../../options/type.json';
import clientOptions from '../../options/client_type.json';
import priorityOptions from '../../options/priority.json';
import Select from '../../components/form_select';
import DataTime from '../../components/datetime';
import qs from 'qs';
import axios from 'axios';

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
      },
      counter: []
    }
  },

  componentWillMount() {
    this.loadCounter();
  },

  loadCounter( query = null) {
    axios.get('/solicitudes/counter', {params: query }).then((counter) => {
      if( counter.data ) {
        this.setState({counter: counter.data})
        this.render();
      }
    })
  },

  triggerChange(query) {
    if(typeof this.props.onChange === 'function') {
      this.props.onChange(query);
    }
  },

  changeQuery(field, value) {
    let query = {...this.state.query, [field]: value};
    this.triggerChange(query);
    this.loadCounter( query  );
    this.setState({query});
  },

  handleDates(type, date, dateStr) {
    let field = type;
    let value = type.indexOf('end') !== -1?`${dateStr} 23:59:59` : `${dateStr} 00:00:00`;
    this.changeQuery(field, value);
  },

  handleChange(field, e) {
    let value = e.currentTarget.value;
    this.changeQuery(field, value);
  },

  download(e) {
    if(e) e.preventDefault();
    this.setState({laoding: true});
    let url = encodeURI(`${location.origin}/solicitudes/excel?${qs.stringify(this.state.query)}`);
    console.log(url)
    window.location = url;
    this.setState({laoding: false});
  },

  render() {
    let {query} = this.state;
    return (
      <div className="panel">
        <div className="panel-body">
          <div className="row">

            <div className="form-group col-md-3">
              <input
                placeholder="Buscar solicitudes"
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
          <div className="row">
            
            <div className="form-group col-md-3">
              <DataTime
                placeholder="Cotización creada desde"
                styles="form-control"
                onChange={(date, str) => {this.handleDates('date_start_quotation', date, str)}}
              />
            </div>

            <div className="form-group col-md-3">
                <DataTime
                  placeholder="Cotización creada hasta"
                  styles="form-control"
                  onChange={(date, str) => {this.handleDates('date_end_quotation', date, str)}}
                />
            </div>
            <div className="form-group col-md-3">
              <button 
                className="btn btn-primary btn-sm" 
                onClick={this.download}
              >
              Descargar
            </button>
            </div>
            <div className="form-group col-md-3 counter-container">
              {
                this.state.counter ? 
                this.state.counter.map( (item) =>  {
                  return <div className="counter" key={item.status}>
                    <div className="counter-data">
                      <div className="number">{item.total }</div>
                    </div>
                    <div className="name">{item.status}</div>
                  </div>
                })
                :null
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
});

export default quoFilters;
