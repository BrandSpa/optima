'use strict';
import React from 'react';
import request from 'axios';
import moment from 'moment';
import DateTime from 'components/datetime';
import Select from 'components/form_select';

const todoForm = React.createClass({
  
  getInitialState() {
    return {
      todo: {
        expires_date: '',
        expires_time: '',
        company_id: null,
        title: '',
        description: ''
      },
      company: {},
      companies: [],
      users: []
    }
  },

  componentDidMount() {
    request
    .get('/api/v1/users')
    .then(res => this.setState({users: res.data}));
  },

  /**
   * Divide datetime and set it.
   */
  handleDateTime(dateObj, dateStr) {
    let datetime = moment(dateObj).format('YYYY/MM/DD HH:mm:ss').split(' ');
    let date = datetime[0];
    let time = datetime[1];
    this.handleChange({expires_date: date, expires_time: time});
  },

  handleContact(id) {
    this.handleChange({
      user_id: parseInt(id)
    })
  },

  handleChange(data) {
    this.setState({todo: {...this.state.todo, ...data}});
  },

  handleSubmit(e) {
    e.preventDefault();
    let trackingId = {};

    if(this.props.trackingId) {
      trackingId = {tracking_id: this.props.trackingId};
    }

    this.props.onSubmit({...this.state.todo, ...trackingId});
    this.clean();
  },

  clean() {
    let todo = {...this.state.todo, title: '', description: ''};
    this.setState({todo: todo});
  },

  searchQuo(e) {
    let val = e.currentTarget.value;

    request 
    .get('/api/v1/companies/', {params: {'query': val}})
    .then(res => this.setState({...this.state, companies: res.data}) );
  },

  setCompany(q, e) {
    if(e) e.preventDefault();

    this.setState({
      todo:{...this.state.todo, company_id: q.id}, 
      companies: [],
      company: q
    });
  },

  render() {
    const todo = this.state.todo;
    let contactSelect;
    let contactValue;

    const userOptions = this.state.users.map(user => {
      if(user) {
        return {value: user.id, label: user.name +" "+ user.lastname}
      }
    });

    return (
      <form className="form" onSubmit={ e => e.preventDefault() }>
        <br/>

        <div className="form-group col-md-6">
          <label >Fecha vencimiento</label>
          <DateTime
            styles="form-control"
            altFormat="Y-d-m H:i:s"
            onChange={this.handleDateTime}
            enableTime
            />
        </div>

        <div className="form-group col-md-6">
          <label >Usuario</label>
          <Select
            value={todo.user_id}
            options={userOptions}
            onSelectChange={e => this.handleChange({user_id: e.currentTarget.value})}
          />
        </div>
        
        <div className="form-group col-md-12">
          <label>Cliente</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Cliente"
            value={this.state.company.name}
            onChange={this.searchQuo}
          />

          <ul className="list-group">
            {this.state.companies.map(company => 
              <li className="list-group-item" key={company.id}>
               <a href="#" onClick={this.setCompany.bind(null, company)}>{company.name}</a> 
              </li> 
            )}
          </ul>
        </div>

        <div className="form-group col-md-12">
          <label >Título</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => this.handleChange({title: e.currentTarget.value})}
            value={todo.title}
            />
        </div>

        <div className="form-group col-md-12">
          <label >Descripción</label>
          <textarea
            className="form-control"
            onChange={e => this.handleChange({description: e.currentTarget.value})}
            value={todo.description}
          ></textarea>
        </div>

        <div className="form-group col-md-12">
          <button
            className="btn btn-primary btn-sm"
            onClick={this.handleSubmit}>
            Guardar
          </button>
        </div>

      </form>
    );
  }
});

export default todoForm;