'use strict';
import React from 'React';
import request from 'superagent';
import Form from 'views/todos/form_create';
import List from 'views/todos/list';

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

  render() {
    return (
      <div className="panel">
        <div className="panel-body">
          <Form onSubmit={this.handleSubmit}/>
          <List todos={this.state.todos} />
        </div>
      </div>
    )
  }
});
