'use strict';
const React = require('react');
const moment = require('moment');
const request = require('superagent');
const Form = require('views/todos/form_create');
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
      .end(function(err, res) {
        this.setState({
          todos: this.state.todos.concat([res.body])
        });
      }.bind(this));
  },

  showForm: function(e) {
    if(e) e.preventDefault();
    let show = this.state.showForm;
    if(show) {
      show = false;
    } else {
      show = true;
    }

    this.setState({showForm: show});
  },

  render: function() {
    const tracking = this.props.tracking;
    const todos = this.state.todos;
    let showTable = false;
    let contact;
    let by;

    const todoNodes = todos.map(function(todo) {
      if(todo.user && todo.user.name) {
        by = todo.user.name +" "+ todo.user.lastname;
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
      contact = tracking.contact.name +" "+ tracking.contact.lastname;
    }

    if(tracking.user.name) {
      by = tracking.user.name +" "+ tracking.user.lastname;
    }

    return (
      <div>
        <ul>
            <li><b>Reporte:</b> {tracking.report}</li>
            <li><b>Contacto:</b> {contact}</li>
            <li><b>Por:</b> {by}</li>
            <li><b>Creado:</b> {moment(tracking.register_date +" " +tracking.register_time ).fromNow()}</li>
        </ul>
        <br/>
        <button className="btn btn-primary btn-sm" onClick={this.showForm}>Agregar tarea</button><br/>
        <br/>
        <div className={this.state.showForm ? "" : "hidden"}>
          <Form
            trackingId={tracking.id}
            onSubmit={this.handleSubmit}
            hideForm={this.showForm}
          />
        </div>

        <div className="table-responsive">
          {todoNodes}
        </div>
      </div>
    )
  }
});
