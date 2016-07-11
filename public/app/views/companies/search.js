'use strict';
const React = require('react');
const Input = require('components/form_input');

module.exports = React.createClass({

  render() {
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
