'use strict';
import React from 'react';
import Solicitudes from 'views/solicitudes/list';

const dashboardSolicitudes = React.createClass({
  render: function() {
    let {user} = this.props;

    return (
      <div>form-group col-sm-4
        <div className="col-md-12">
        <Solicitudes />
        </div>
      </div>
    );
  }
});

export default dashboardSolicitudes;