'use strict';
var React = require('react');

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      quotation: {
        id: 0
      }
    }
  },

  getInitialState: function() {
    return {
      quotation: {}
    }
  },

  openComment: function() {
    this.props.onShowComment();
  },
  openMails: function() {
    this.props.onShowMails();
  },

  handleServiceApproval: function() {
    var quotation = this.props.quotation;
    if(quotation.service_approval === 0) {
      this.props.onServiceApproval(1);
    } else {
      this.props.onServiceApproval(0);
    }
  },

  render: function() {
    var quotation = this.props.quotation;
    var serviceApprovalText = 'Quitar aprobación de servicio';
    if(quotation.service_approval === 0) {
      serviceApprovalText = 'Agregar aprobación de servicio';
    }

    return (
      <div className="panel">
        <div className="panel-body">
          <ul className="list-inline">
            <li>
              <DropdownButton
                bsStyle="default"
                bsSize="small"
                title={<i className="fa fa-file-pdf-o"></i>}
              >
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
            </li>
            <li>
              <a
                href={"/quotations/" + quotation.id + "/duplicate"}
                className="btn btn-default btn-sm">Duplicar</a>
            </li>

            <li>
              <button
                className="btn btn-default btn-sm"
                onClick={this.openComment}>
              Editar Comentario
              </button>
            </li>

            <li>
              <button
                className="btn btn-default btn-sm"
                onClick={this.openMails}
              >
                Editar Mail
              </button>
              </li>

              <li>
                <button
                  className="btn btn-default btn-sm"
                  onClick={this.handleServiceApproval}
                >
                {serviceApprovalText}
                </button>
              </li>
            </ul>
        </div>
      </div>
    );
  }
});