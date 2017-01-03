'use strict';
import React from 'react';
import _ from 'underscore';
import Loader from 'components/loader';

export default React.createClass({
  getDefaultProps() {
    return {
      collection: [],
      field: 'name',
      placeholder: "Buscar",
      loading: false
    }
  },

  search(e) {
    let query = e.currentTarget.value;
    if(typeof this.props.search == 'function') {
      this.props.search(query);
    }
  },

  resultSelected(model) {
    let query = {};
    query[this.props.field] = model;
    let result = _.where(this.props.collection, query);
    
    if(typeof this.props.selected == 'function') {
      this.props.selected(result);
    }
  },

  render() {
    let options = this.props.collection.map(model => {
        return model[this.props.field];
      }
    );

    let results = options.map((model, i) =>
      <li key={i} className="list-group-item" onClick={this.resultSelected.bind(this, model)}>
        {model}
      </li>
    );

    return (
      <div className="form-group">
        <input
          placeholder="Buscar empresa"
          type="text"
          onChange={_.throttle(this.search, 1000)}
          className="form-control"
        />

        <Loader show={this.props.loading} />

        <ul className="list-group">
          {results}
        </ul>

      </div>
    )
  }
});
