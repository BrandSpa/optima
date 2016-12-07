'use strict';
import React from 'react';
import moment from 'moment';
import request from 'superagent';
import updateItem from 'lib/update_item';
import TodoForm from 'views/todos/form_create';
import Todos from 'views/todos/list';

require('moment/locale/es');

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      tracking: {}
    }
  },

  getInitialState: function() {
    return {
      todos: [],
      showForm: false
    }
  },

  componentWillReceiveProps: function(props) {
     if(props.tracking.todos) {
      this.setState({todos: props.tracking.todos});
    }
  },

  componentDidMount: function() {
    if(this.props.tracking.todos) {
      this.setState({todos: this.props.tracking.todos});
    }

  },

  handleSubmit: function(todo) {
    const tracking = this.props.tracking;
    request
      .post('/api/v1/todos')
      .send(todo)
      .end((err, res) => {
        this.setState({
          todos: this.state.todos.concat([res.body])
        });
      });
  },

  showForm: function(e) {
    if(e) e.preventDefault();


    this.setState({showForm: !this.state.showForm});
  },

  handleCompleted(todo) {
    todo = {...todo, completed: !todo.completed};
    
    request
    .put(`/api/v1/todos/${todo.id}`)
    .send(todo)
    .end((err, res) => {
      let todos = updateItem(this.state.todos, res.body, 'id');
      this.setState({todos});
    });
  },

  render: function() {
    const tracking = this.props.tracking;
    let showTable = false;
    let contact;
    let by;
    let todos = this.state.todos;

    const todoNodes = todos.map(function(todo) {
      if(todo.user && todo.user.name) {
        by = `${todo.user.name} ${todo.user.lastname}`;
      }

      return (
        <div key={todo.id}>
          <hr/>
          <b>Tarea {todo.title}<br/></b>
          <span>{todo.description}<br/></span>
          <span><b>Creada:</b> {todo.created_at}<br/></span>
          <span><b>vence: </b> {todo.expires_date} {todo.expires_time}<br/></span>
          <span><b>Usuario: </b>{by}</span>
        </div>
      );
    });

    if(todos.length > 0) {
      showTable = true;
    }

    if(tracking.contact.name) {
      contact = `${tracking.contact.name} ${tracking.contact.lastname}`;
    }

    if(tracking.user.name) {
      by = `${tracking.user.name} ${tracking.user.lastname}`;
    }

    // todos = this.state.todos.map(todo => _.extend(todo, {tracking: tracking}));

    return (
      <li className="list-item">
        <hr/>
        <b>Reporte:</b> {tracking.report} • <b>Contacto:</b> {contact} • <b>Por:</b> {by} {moment(`${tracking.register_date} ${tracking.register_time}` ).fromNow()}

        <p></p>

        <div className={this.state.showForm ? "" : "hidden"}>
          <TodoForm
            trackingId={tracking.id}
            onSubmit={this.handleSubmit}
            hideForm={this.showForm}
          />
        </div>

        <Todos todos={todos} onCompleted={this.handleCompleted} />
        <p></p>

        <button className="btn btn-primary btn-sm" onClick={this.showForm}>Agregar tarea</button>
      </li>
    )
  }
});
