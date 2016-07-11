'use strict';
import React from 'React';
import request from 'superagent';
import Form from 'views/todos/form_create';
import List from 'views/todos/list';
import _ from 'lodash';

export default React.createClass({
  getInitialState() {
    return {
      todos: [],
      showForm: false
    }
  },

  componentDidMount() {
    request
      .get('api/v1/todos')
      .end((err, res) => {
        if(err) console.log(err.body);
        this.setState({todos: res.body});
      });
  },

  handleSubmit(todo) {
    request
      .post('/api/v1/todos')
      .send(todo)
      .end((err, res) => {
        this.setState({
          todos: this.state.todos.concat([res.body])
        });
      });
  },

  updateTodos(td) {
    let todos = this.state.todos.map(todo => {
      if(td.id == todo.id) return _.extend(todo, td);
      return todo;
    });

    this.setState({todos: todos});
  },

  handleCompleted(todo) {
    request
    .put(`/api/v1/todos/${todo.id}`)
    .send(_.extend(todo, {completed: !todo.completed}))
    .end((err, res) => {
      this.updateTodos(res.body);
    });
  },



  render() {
    return (
      <div className="panel">
        <div className="panel-body">
          <Form onSubmit={this.handleSubmit}/>
          <hr/>
          <List todos={this.state.todos} onCompleted={this.handleCompleted} />
        </div>
      </div>
    )
  }
});
