'use strict';
const React = require('react');

module.exports = React.createClass({

  render() {
    return (
      <div className="hidden-xs" id="sidebar-nav">
          <ul>
              <li >
                <a href="#" className="navbar-brand">Optima</a>
              </li>
              <li><a href="/#">Dashboard</a></li>
              <li ><a href="/#companies">Empresas</a></li>
              <li><a href="/#contacts">Contactos</a></li>
              <li><a href="/#services">servicios</a></li>
              <li><a href="/#results">Resultados</a></li>
              <li><a href="/#logout">Cerrar Sesion</a></li>
          </ul>
      </div>
    );
  }
});