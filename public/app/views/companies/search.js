'use strict';
const React = require('react');

export default React.createClass({
  render() {
    return (
      <input
        className="form-control"
        ref="search"
        onInputChange={this.handleChange}
        placeholder="Buscar empresas"
        value={this.state.query}
      />
    );
  }
});
