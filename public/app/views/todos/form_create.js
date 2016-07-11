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
        expires_time: '',
      },
      users: []
    }
  },

  componentDidMount() {
    request
    .get('api/v1/users')
    .end((err, res) => {
      this.setState({users: res.body});
    });
  },

  handleDateTime(dateObj, dateStr) {
    let datetime = moment(dateObj).format('YYYY-MM-DD HH:mm:ss').split(' ');
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

  setValue() {

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
    this.setState({todo: _.extend(this.state.todo, {
      title: '',
      description: ''
    })});
  },

  render() {
    const todo = this.state.todo;
    let contactSelect;
    let contactValue;

    console.log(todo);

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
          <Select
            default="Usuario"
            value={todo.user_id}
            options={userOptions}
            onSelectChange={(e) => this.handleChange({user_id: e.currentTarget.value})}
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
          <Editor
            onChange={html => this.handleChange({description: html})}
            value={todo.description}
          />
        </div>

        <div className="form-group col-md-12">
          <button className="btn btn-primary btn-sm pull-right" onClick={this.handleSubmit}>Guardar</button>
        </div>

      </form>
    );
  }
});
