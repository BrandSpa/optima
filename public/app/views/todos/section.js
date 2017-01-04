'use strict';
import React from 'react';
import {connect} from 'react-redux';
import * as action from 'actions/todos';
import * as activityAction from 'actions/activities';
import Form from 'views/todos/form_create';
import List from 'views/todos/list';

const section = React.createClass({

  getInitialState() {
    return {
      showForm: false
    }
  },

  componentDidMount() {
    let query = {};

    if(this.props.quotation_id) {
      query = {...query, quotation_id: this.props.quotation_id};
    }

    if(this.props.user_id) {
      query = {...query, user_id: this.props.user_id};
    }

    this.props.dispatch(action.fetch(query));
  },

  handleSubmit(todo) {
    if(this.props.quotation_id) {
      todo = {...todo, quotation_id: this.props.quotation_id};
    }

   this.props.dispatch(action.store(todo))
   .then(res => this.props.dispatch(action.sendMail(res.payload.id)));
  },

  handleCompleted(todo) {
    this.props.dispatch(action.completed(todo));
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
