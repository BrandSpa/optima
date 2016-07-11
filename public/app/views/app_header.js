'use strict';
const React = require('react');

module.exports = React.createClass({

  render() {
    return (
      <div id="app-header">
        <nav className="navbar top-bar">
          <div className="container-fluid">
              <a className="navbar-brand" href="#">OPTIMA</a>
               <ul className="nav navbar-nav navbar-collapse">
                  <li><a href="">Dashboard</a></li>
                  <li><a href="company/create">Nueva Cotización</a></li>
                  <li><a href="companies">Empresas</a></li>
                  <li><a href="services">Servicios</a></li>
               </ul>
          </div>
        </nav>
      </div>
    );
  }
});
