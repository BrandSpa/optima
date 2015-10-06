'use strict';
var React = require('react');

module.exports = React.createClass({

  render: function() {
    return (
      <div id="app-header">
        <nav className="navbar top-bar">
          <div className="container-fluid">
              <a className="navbar-brand" href="#">OPTIMA</a>
               <ul className="nav navbar-nav">
                  <li><a href="#company/create">Nueva cotización</a></li>
                  <li><a href="#">Dashboard</a></li>
                  <li><a href="#companies">Empresas</a></li>
                  <li><a href="#contacts">Contactos</a></li>
                  <li><a href="#services">Servicios</a></li>
                  <li><a href="#results">Resultados</a></li>
               </ul>
          </div>
        </nav>
      </div>
    );
  }
});