'use strict';
import React from 'React';
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

  linkQuotation(tracking) {
    if(tracking) {
      return <a href={`#quotations/${tracking.quotation_id}`}>{tracking.quotation_id}</a>;
    }
  },

  render() {
    let todo = this.props.todo;

    return (
      <tr>
        <td>{todo.title}</td>
        <td>{todo.description}</td>
        <td><Timeago date={todo.created_at} /></td>
        <td><Timeago date={`${todo.expires_date} ${todo.expires_time}`} /></td>
        <td>{todo.assigned.name} {todo.assigned.lastname}</td>
        <td>{todo.user.name} {todo.user.lastname}</td>
        <td>{this.linkQuotation(todo.tracking)}</td>
        <td><input type="checkbox" onChange={e => this.props.onCompleted(todo)} checked={todo.completed} /></td>
      </tr>
    )
  }
});
