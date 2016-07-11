'use strict';
import React from 'react';

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
    const quotation = this.props.quotation;
    if(quotation.service_approval === 0) {
      this.props.onServiceApproval(1);
    } else {
      this.props.onServiceApproval(0);
    }
  },

  render: function() {
    const quotation = this.props.quotation;
    let serviceApprovalText = 'Quitar aprobación de servicio';
    if(quotation.service_approval === 0) {
      serviceApprovalText = 'Agregar aprobación de servicio';
    }

    return (
      <div className="panel">
        <div className="panel-body">
          <ul className="list-inline">
            <li>
                <a href={"/quotations/" + quotation.id + "/pdf/"+ quotation.id} target="_new" >PDF</a>
                <a href={"/quotations/" + quotation.id + "/pdfbn"} target="_blank" > PDF BN</a>
                <a href={"/quotations/" + quotation.id + "/pdflogos"}  target="_blank"> PDF con logos</a>
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
