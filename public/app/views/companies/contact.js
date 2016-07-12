'use strict';
import React from 'React';

export default React.createClass({
  render() {
    let contact = this.props.contact;
    
    return (
      <tr>
        <td>{contact.name} {contact.lastname}</td>
        <td>{contact.email}</td>
        <td>{contact.phone_1} {contact.phone_2}</td>
        <td>
        <button
          onClick={this.props.onEdit(contact)}
          className="btn btn-default btn-xs">Editar</button>
        </td>
      </tr>
    )
  }
});
