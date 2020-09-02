'use strict';
import React from 'react';
import Solicitudes from 'views/solicitudes/list';

const dashboardSolicitudes = React.createClass({
  render: function() {
    let {user} = this.props;

    return (
      <div>
        <div className="col-md-9">
        <Solicitudes />
        </div>
      </div>
    );
  }
});

export default dashboardSolicitudes;