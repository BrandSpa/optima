'use strict';
var React = require('react');
var ReactQuill = require('react-quill');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      service: {}
    }
  },

  render: function() {
    var service = this.state.service;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="">Título</label>
          <input
            ref="title"
            type="text"
            className="form-control"
            value={service.title}
          />
        </div>
        <div className="form-group">
        <label htmlFor="">Contenido</label>
          <ReactQuill
              ref="text"
              theme="snow"
              value={service.text}
              onChange={this.handleTextChange}
            />
        </div>


          <div className="form-group col-md-6">
            <label htmlFor="">Precio 1</label>
          <input
            ref="price_1"
            type="text"
            className="form-control"
            value={service.price_1}
          />
        </div>

        <div className="form-group col-md-6">
        <label htmlFor="">Precio 2</label>
          <input
            ref="price_2"
            type="text"
            className="form-control"
            value={service.price_2}
          />
        </div>
        <button className="btn btn-primary btn-sm">Guardar</button>
      </form>
    );
  }
});