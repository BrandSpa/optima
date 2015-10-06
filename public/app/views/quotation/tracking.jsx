'use strict';
var React = require('react');
var moment = require('moment');
var request = require('superagent');
var Form = require('views/todos/form_create.jsx');
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

  componentWillRecieveProps: function(props) {
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
    var tracking = this.props.tracking;
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
    var show = this.state.showForm;
    if(show) {
      show = false;
    } else {
      show = true;
    }

    this.setState({showForm: show});
  },

  render: function() {
    var tracking = this.props.tracking;
    var contact;
    var by;
    var todoNodes = this.state.todos.map(function(todo) {
      if(todo.user && todo.user.name) {
        by = todo.user.name +" "+ todo.user.lastname;
      }

      return (
        <tr key={todo.id}>
          <td><b>{todo.title}</b> : {todo.description}</td>
          <td>{todo.created_at}</td>
          <td>{todo.expires_date}</td>
          <td>{by}</td>
        </tr>
      );
    });

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

        <table className="table">
          <thead>
            <tr>
              <th>Tarea</th>
              <th>Creada</th>
              <th>Vence</th>
              <th>Usuario</th>
            </tr>
        </thead>
          <tbody>
            {todoNodes}
          </tbody>
        </table>

      </div>
    )
  }
});
