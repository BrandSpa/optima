'use strict';
import React from 'react';
import Timeago from '../../components/timeago';

const TodoItem =  React.createClass({
  getDefaultProps() {
    return {
      title: '',
      description: '',
      created_at: '',
      expires_time: '',
      assigned: {
        name: '',
        lastname: '',
      },
      user: {
        name: '',
        lastname: '',
      },
      tracking: ''
    }
  },

  linkQuotation(todo) {
    if(todo.quotation_id) {
      return <a href={`/quotations/${todo.quotation_id}`}>{todo.quotation_id}</a>;
    } else if(todo.tracking && todo.tracking.quotation_id) {
      return <a href={`/quotations/${todo.tracking.quotation_id}`}>{todo.tracking.quotation_id}</a>;
    }
  },

  render() {
    const {todo} = this.props;
    const {
      title, 
      description, 
      created_at, 
      expires_date, 
      expires_time, 
      assigned, 
      user, 
      tracking,
      company
    } = todo;

    return (
      <tr>
        <td>{title}</td>
        <td>{description}</td>
        <td><Timeago date={created_at} /></td>
        <td><Timeago date={`${expires_date} ${expires_time}`} /></td>
        <td>{assigned ? `${assigned.name} ${assigned.lastname}` : "" }</td>
        <td>{user ? user.name : ''} {user ? user.lastname : ''}</td>
        <td></td>
        <td>{this.linkQuotation(todo)}</td>
        <td>
          <input 
            type="checkbox" 
            value={todo.completed ? todo.completed : false} 
            onChange={e => this.props.onCompleted(todo)} 
            checked={todo.completed == 1 ? true : false} 
          />
        </td>
      </tr>
    )
  }
});

export default TodoItem;