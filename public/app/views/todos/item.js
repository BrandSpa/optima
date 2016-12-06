'use strict';
import React from 'react';
import Timeago from 'components/timeago';

export default React.createClass({
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
      quotation
    } = todo;

    return (
      <tr>
        <td>{title}</td>
        <td>{description}</td>
        <td><Timeago date={created_at} /></td>
        <td><Timeago date={`${expires_date} ${expires_time}`} /></td>
        <td>{assigned ? `${assigned.name} ${assigned.lastname}` : "" }</td>
        <td>{user.name} {user.lastname}</td>
        <td>{quotation ? quotation.company.name : ''}</td>
        <td>{this.linkQuotation(todo)}</td>
        <td><input type="checkbox" onChange={e => this.props.onCompleted(todo)} checked={todo.completed} /></td>
      </tr>
    )
  }
});
