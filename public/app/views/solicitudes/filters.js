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
import _ from 'lodash'

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
      verEmpresas: false,
      verAsesores: false,
      counter: [],
      asesorCounter: [],
      companyCounter: [],
      states: [
        {
          name:  'Borrador',
          key: 'Borrador'
        },
        {
          name:  'Anuladas',
          key: 'Nula'
        },
        {
          name:  'No enviadas',
          key: 'No enviada'
        },
        {
          name:  'Cotización',
          key: 'Cotización'
        }
      ]
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
    });
    
    const queryAsesor = {...query, asesor: true};
    axios.get('/solicitudes/counter', {params: queryAsesor }).then((counter) => {
      if( counter.data ) {
        this.setState({asesorCounter: counter.data})
        this.render();
      }
    });

    const queryCompany = {...query, company: true};
    axios.get('/solicitudes/counter', {params: queryCompany }).then((counter) => {
      if( counter.data ) {
        this.setState({companyCounter: counter.data})
        this.render();
      }
    });
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

  getCount( key ) {
    if (this.state.counter) {
      const items = _.filter(this.state.counter, {status: key});
      if( items.length ) {
        return items[0].total;
      }
    }

    return 0
   
  },

  getTotal() {
    let count = 0;
    if(this.state.counter ) {
      this.state.counter.forEach( item => count += parseInt(item.total, 10));
    }
    return count;
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
            <div className="form-group col-md-2">
              <button 
                className="btn btn-primary btn-sm" 
                onClick={this.download}
              >
              Descargar
            </button>
            </div>
            <div className="form-group col-md-4 counter-container">
            <div className="counter">
              <div className="counter-data">
                <div className="number">{ this.getTotal() }</div>
              </div>
              <div className="name">Solicitudes</div>
            </div>

              {
                this.state.counter ? 
                this.state.states.map( (item) =>  {
                  return <div className="counter" key={item.key}>
                    <div className="counter-data">
                      <div className="number">{ this.getCount(item.key) }</div>
                    </div>
                    <div className="name">{item.name}</div>
                  </div>
                })
                :null
              }

            <div className="counter" onClick={ () => this.setState({verEmpresas: true})}>
              <div className="counter-data">
                <div className="number">
                  <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-box-arrow-in-up-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5z"/>
                    <path fill-rule="evenodd" d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0v-5z"/>
                  </svg>
                </div>
              </div>
              <div className="name">Empresas</div>
            </div>

            <div className="counter" onClick={() => this.setState({verAsesores: true})}>
              <div className="counter-data">
                <div className="number">
                  <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-box-arrow-in-up-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5z"/>
                  <path fill-rule="evenodd" d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0v-5z"/>
                  </svg>
                </div>
              </div>
              <div className="name">Asesores</div>
            </div>

            </div>
          </div>
        </div>
        <div className={`panel-contador ${this.state.verAsesores || this.state.verEmpresas ? 'active': ''}`} >
          <div className="close-icon" onClick={() => this.setState({verEmpresas: false, verAsesores: false})}>
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </div>
          <div className="panel-contador-body">
            <ul>
              <li>
                <div className="name">Nombre</div>
                <div className="number">Cantidad</div>
              </li>
              {
                this.state.asesorCounter && this.state.verAsesores ? 
                this.state.asesorCounter.map( (item) =>  {
                  return <li key={item.asesor_id}>
                    <div className="name">{item.asesor.name}</div>
                    <div className="number">{ item.total }</div>
                  </li>
                })
                :null
              }

              {
                this.state.companyCounter && this.state.verEmpresas ? 
                this.state.companyCounter.map( (item) =>  {
                  return <li key={item.company_id}>
                    <div className="name">{item.company.name}</div>
                    <div className="number">{ item.total }</div>
                  </li>
                })
                :null
              }   
            </ul>
          </div>
        </div>
      </div>
    )
  }
});

export default quoFilters;
