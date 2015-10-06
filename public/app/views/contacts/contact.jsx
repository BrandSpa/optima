'use strict';
var React = require('react');

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      contact: {}
    }
  },

  render: function() {
    var contact = this.props.contact;
    return (
      <tr>
        <td>{contact.name} {contact.lastname}</td>
        <td>{contact.email}</td>
        <td>{contact.phone_1} {contact.phone_2}</td>
        <td>{contact.mobile_1} {contact.mobile_2}</td>
        <td>{contact.company ? contact.company.name : ''}</td>
      </tr>
    );
  }
});