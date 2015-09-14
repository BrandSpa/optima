'use strict';
var React = require('react');
var Input = require('components/form_input.jsx');

module.exports = React.createClass({

  render: function() {
    return (
      <Input
        ref="search"
        onInputChange={this.handleChange}
        placeholder="Buscar empresas"
        value={this.state.query}
      />
    );
  }
});