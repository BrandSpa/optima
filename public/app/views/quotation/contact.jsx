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
      <div className="panel">
        <div className="panel-body">
        <button className="btn btn-default btn-sm">Editar</button>
        <button className="btn btn-default btn-sm">Cambiar contacto</button>

          <hr/>
          <b>{contact.name} {contact.lastname}</b>
          <hr/>
          {contact.email}
          <hr/>
          {contact.phone_1}
          <span className={contact.phone_2 ? "hidden" : ""}>| {contact.phone_2}</span>
          <hr/>
          {contact.mobile_1}
          <span className={contact.mobile_2 ? "hidden" : ""}>| {contact.mobile_2}</span>
          <hr/>
          <button className="btn btn-primary btn-sm">Agregar contacto</button>
        </div>
      </div>
    );
  }
});