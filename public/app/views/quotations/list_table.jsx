'use strict';
var React = require('react');
var Timeago = require('components/timeago.jsx');
var DropdownButton = require('react-bootstrap').DropdownButton;
var MenuItem = require('react-bootstrap').MenuItem;

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      quotations: []
    }
  },

  render: function() {
    var count = this.props.quotations.length;

    var quotationNodes = this.props.quotations.map(function(quotation) {
      return (
        <tr key={quotation.id}>
        <td><a href={"/#quotations/" + quotation.id}>{quotation.id}</a></td>
        <td><span className={"label label-" + quotation.status}>{quotation.status}</span></td>
        <td>{quotation.advisor}</td>
        <td>{quotation.client_type}</td>
        <td>{quotation.type}</td>
        <td>{quotation.company.name}</td>
        <td>{quotation.contact.name + " " + quotation.contact.lastname}</td>
        <td><Timeago date={quotation.created_at} /> por {quotation.user.name}</td>
        <td>
          <DropdownButton
            bsStyle="default"
            bsSize="small"
            title={<i className="fa fa-file-pdf-o"></i>}>
              <MenuItem
                eventKey="1"
                href={"/quotations/" + quotation.id + "/pdf/"+ quotation.id}
                target="_new"
                >
               PDF
              </MenuItem>
            <MenuItem eventKey="2" href={"/quotations/" + quotation.id + "/pdfbn"} target="_blank" > PDF BN
            </MenuItem>
            <MenuItem eventKey="3" href={"/quotations/" + quotation.id + "/pdflogos"}  target="_blank"> PDF con logos
            </MenuItem>
          </DropdownButton>
        </td>
      </tr>);
    });

    return (
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr className="thead">
              <th>#</th>
              <th>Estado</th>
              <th>Asesor</th>
              <th>Cliente</th>
              <th>Tipo</th>
              <th>Empresa</th>
              <th>Contacto</th>
              <th>Creada</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {quotationNodes}
          </tbody>
        </table>
      </div>
    );
  }
});