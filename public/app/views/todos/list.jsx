'use strict';
var React = require('react');
var Timeago = require('components/timeago.jsx');
var request = require('superagent');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      todos: []
    }
  },

  componentDidMount: function() {
    request
      .get('api/v1/todos')
      .end(function(err, res) {
        this.setState({todos: res.body});
      }.bind(this));
  },

  todoCompleted: function() {

  },

  linkQuotation: function(tracking) {
    if(trackig) {
      return <a href={"/quotations/" + tracking.quotation_id}>{tracking.quotation_id}</a>;
    }
  },

  render: function() {
    var todoNodes = this.state.todos.map(function(todo) {
      return (
        <tr key={todo.id}>
          <td><input type="checkbox" onChange={this.todoCompleted} /> </td>
          <td>{todo.title}</td>
          <td>{todo.description}</td>
          <td><Timeago date={todo.created_at} /></td>
          <td><Timeago date={todo.expires_time} /></td>
          <td>{todo.assigned.name} {todo.assigned.lastname}</td>
          <td>{todo.user.name} {todo.user.lastname}</td>
          <td>{this.linkQuotation(todo.tracking)}</td>
        </tr>
      );
    }.bind(this));

    return (
      <div className="panel">
        <div className="panel-body">
        <button className="btn btn-primary btn-sm">Nueva tarea</button>
          <div className="table-responsive">
            <table className="table">
               <thead>
            <tr>
              <th>Completada</th>
              <th>Título</th>
              <th>Descripción</th>
              <th>Creada</th>
              <th>Vencimiento</th>
              <th>De</th>
              <th>Para</th>
              <th>Cotización</th>
            </tr>
          </thead>
              <tbody>
                {todoNodes}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
});
