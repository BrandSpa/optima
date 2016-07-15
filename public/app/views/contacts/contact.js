'use strict';
const React = require('react');

module.exports = React.createClass({
  getDefaultProps() {
    return {
      contact: {}
    }
  },

  handleClick() {
    if (typeof this.props.onEdit === 'function') {
      this.props.onEdit(this.props.contact);
    }
  },

  render() {
    const contact = this.props.contact;

    return (
      <tr>
        <td>{contact.name} {contact.lastname}</td>
        <td>{contact.email}</td>
        <td>{contact.phone_1} {contact.phone_2}</td>
        <td>{contact.mobile_1} {contact.mobile_2}</td>
        <td>{contact.company ? contact.company.name : ''}</td>
        <td><button className="btn btn-sm" onClick={this.handleClick}>Editar</button></td>
      </tr>
    );
  }
});
