'use strict';
import React from 'react';
import request from 'superagent';
import _ from 'lodash';
import moment from 'moment';
import DateTime from 'components/datetime';
import Editor from 'components/editor';
import Select from 'components/form_select';

module.exports = React.createClass({
  getInitialState() {
    return {
      todo: {
        expires_date: '',
        expires_time: ''
      },
      users: []
    }
  },

  componentDidMount() {
    request
    .get('api/v1/users')
    .end((err, res) => {
      if(err) return console.log(err.body);
      this.setState({users: res.body});
    });
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
    this.setState({todo: _.extend(this.state.todo, data)});
  },

  handleSubmit(e) {
    e.preventDefault();
    let trackingId = {};

    if(this.props.trackingId) {
      trackingId = {tracking_id: this.props.trackingId};
    }

    this.props.onSubmit(_.extend(this.state.todo, trackingId));
    this.clean();
  },

  clean() {
    let todo = _.extend(this.state.todo, { title: '', description: ''});
    this.setState({todo: todo});
  },

  searchQuo(val) {
    request 
    .get('/api/v1/quoatations/')
    .query({'query': val})
    .end((err, res) => console.log(res));
  },

  render() {
    const todo = this.state.todo;
    let contactSelect;
    let contactValue;

    const userOptions = this.state.users.map(user => {
      return {value: user.id, label: user.name +" "+ user.lastname}
    });

    return (
      <form className="form" onSubmit={ e => e.preventDefault() }>
        <br/>

        <div className="form-group col-md-6">
          <label htmlFor="">Fecha vencimiento</label>
          <DateTime
            styles="form-control"
            altFormat="Y-d-m H:i:s"
            onChange={this.handleDateTime}
            enableTime
            />
        </div>

      
        <div className="form-group col-md-6">
          <label htmlFor="">Usuario</label>
          <Select
            value={todo.user_id}
            options={userOptions}
            onSelectChange={e => this.handleChange({user_id: e.currentTarget.value})}
          />
        </div>
        
        <div className="form-group col-md-12">
          <label for="">Cotización</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Cotización num"
            onChange={e => this.searchQuo(e.currentTarget.value)}
          />
        </div>

        <div className="form-group col-md-12">
          <label htmlFor="">Título</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => this.handleChange({title: e.currentTarget.value})}
            value={todo.title}
            />
        </div>

        <div className="form-group col-md-12">
          <label htmlFor="">Descripción</label>
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
