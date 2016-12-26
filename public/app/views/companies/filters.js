'use strict';
import React from 'react';

export default React.createClass({
  getInitialState() {
    return {
      offset: 0
    }
  },

  getDefaultProps() {
    return {
      base: 15,
      offset: 0
    }
  },

  search(e) {
    if(typeof this.props.onSearch === 'function') {
      this.props.onSearch(e.currentTarget.value);
    }

  },

  handlePrev() {
    let offset = parseInt(this.props.offset) - this.props.base;
    if(typeof this.props.onPrev === 'function') {
      this.props.onPrev(offset);
    }
  },

  handleNext() {
    let offset = parseInt(this.props.offset) + this.props.base;
    if(typeof this.props.onNext === 'function') {
      this.props.onNext(offset);
    }
  },

  render() {
    return (
      <div className="panel">
        <div className="panel-body">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar empresas o contactos"
              onChange={this.search}
            />
          </div>

          <div className="btn-group" role="group">
            <button
              className="btn btn-default btn-sm"
              onClick={this.handlePrev}
              disabled={!this.props.offset}
            >
              <i className="fa fa-chevron-left"></i>
            </button>

            <button
              className="btn btn-default btn-sm"
              onClick={this.handleNext}
            >
              <i className="fa fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    )
  }
});
