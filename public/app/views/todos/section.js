'use strict';
import React from 'react';
import {connect} from 'react-redux';
import request from 'superagent';
import * as todos from 'actions/todos';

import Form from 'views/todos/form_create';
import List from 'views/todos/list';
import _ from 'lodash';

const section = React.createClass({

  getInitialState() {
    return {
      showForm: false
    }
  },

  componentDidMount() {
    this.props.dispatch(todos.fetch());
  },

  handleSubmit(todo) {
   this.props.dispatch(todos.store(todo));
  },

  handleCompleted(todo) {
    this.props.dispatch(todos.completed(todo));
  },

  render() {
    const todos = this.props.todos.items;
    return (
      <div className="panel">
        <div className="panel-body">
          <Form onSubmit={this.handleSubmit}/>
          <hr/>
          <List
            todos={todos}
            onCompleted={this.handleCompleted} 
          />
        </div>
      </div>
    )
  }
});

export default connect(store => store)(section);
