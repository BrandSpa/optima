'use strict';
import React from 'react';
import moment from 'moment';
import request from 'superagent';
import _ from 'underscore';
import Filters from 'views/quotations/filters';
import ListTable from 'views/quotations/list_table';
import emmiter from 'lib/emitter';
const Emmiter = emmiter();

module.exports = React.createClass({
  getInitialState: function() {
    return {
      quotations: [],
      query: {
        offset: 0
      },
    }
  },

  fetch(query) {
    query = query ? query : {};

    request
      .get('/api/v1/quotations')
      .query(query)
      .end((err, resp) => {
        this._onChange(resp.body);
      });
  },

  componentDidMount: function() {
    this.fetch();
  },

  loadMore: function() {
    let offset = this.state.query.offset + 10;
    var query = _.extend(this.state.query, {offset: offset});

    this.setState({
      query: query
    });

    this.fetch(query);
  },

  loadLess: function() {
    const offset = this.state.query.offset - 10;

    if ( offset >= 0) {
      var query = _.extend(this.state.query, {offset: offset});
      this.setState({query: query});
      this.fetch(query);
    }
  },

  _onChange: function(quotations) {
    this.setState({
      quotations: quotations
    });
  },

  handleFilters(query) {
    this.fetch(query);
    this.setState({query: query});
  },

  render: function() {
    Emmiter.emit('quotations_dashboard_render');

    return (
      <div>
        <Filters onChange={this.handleFilters} />
        <div className="panel quotations-table">
          <div className="panel-body" style={{minHeight: '600px'}}>
            <a href="#company/create" className="btn btn-primary btn-sm">Nueva cotización</a>
            <span className="pull-right">BD-COM-03</span>
            <hr />
             <div className="btn-group" role="group">
              <button
                className="btn btn-default btn-sm"
                onClick={this.loadLess}><i className="fa fa-chevron-left"></i></button>
              <button
                className="btn btn-default btn-sm"
                onClick={this.loadMore}><i className="fa fa-chevron-right"></i></button>
              </div>

            <ListTable quotations={this.state.quotations} />

            <div className="btn-group" role="group">
              <button
              className="btn btn-default btn-sm"
              onClick={this.loadLess}><i className="fa fa-chevron-left"></i></button>
              <button
                className="btn btn-default btn-sm"
                onClick={this.loadMore}><i className="fa fa-chevron-right"></i></button>
              </div>
          </div>
        </div>
      </div>
    )
  }
});
