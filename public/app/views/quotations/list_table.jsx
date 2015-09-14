'use strict';
var React = require('react');
var Timeago = require('components/timeago.jsx');

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
          <div className="btn-group">
            <button className="btn btn-default btn-xs dropdown-toggle" type="button" data-toggle="dropdown">
              <i className="fa fa-file-pdf-o"></i> <span className="caret"></span>
            </button>
            <ul className="dropdown-menu" role="menu">
              <li>
                <a href={"/quotations/" + quotation.id + "/pdf/"+ quotation.id} target="_blank"> PDF </a>
              </li>
              <li>
                <a href={"/quotations/" + quotation.id + "/pdfbn"} target="_blank" > PDF BN </a>
              </li>
              <li>
                <a href={"/quotations/" + quotation.id + "/pdflogos"}  target="_blank" > PDF con logos </a>
              </li>
            </ul>
          </div>

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