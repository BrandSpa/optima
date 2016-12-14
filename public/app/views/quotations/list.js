'use strict';
import React from 'react';
import {connect} from 'react-redux';
import * as quo from 'actions/quotations';
import Filters from 'views/quotations/filters';
import ListTable from 'views/quotations/list_table';

const quotations = React.createClass({
  
  getInitialState() {
    return {
      query: {
        offset: 0
      },
    }
  },

  componentDidMount() {
    this.props.dispatch(quo.fetch());
  },

  loadMore() {
    let offset = this.state.query.offset + 10;
    var query = {...this.state.query, offset: offset};

    this.setState({
      query: query
    });
    
    this.props.dispatch(quo.fetch(query));
  },

  loadLess() {
    const offset = this.state.query.offset - 10;

    if ( offset >= 0) {
      var query = {...this.state.query, offset: offset};
      this.setState({query: query});
      this.props.dispatch(quo.fetch(query));
    }
  },

  handleFilters(query) {
    this.props.dispatch(quo.fetch(query));
    this.setState({query: query});
  },

  render() {

    return (
      <div>
        <Filters onChange={this.handleFilters} />
        <div className="panel quotations-table">
          <div className="panel-body" style={{minHeight: '600px'}}>
            <a href="/quotation/create" className="btn btn-primary btn-sm">Nueva cotización</a>
            <span className="pull-right">BD-COM-03</span>
            <hr />
             <div className="btn-group" role="group">
              <button
                className="btn btn-default btn-sm"
                onClick={this.loadLess}>
                <i className="fa fa-chevron-left"></i>
              </button>

              <button
                className="btn btn-default btn-sm"
                onClick={this.loadMore}>
                <i className="fa fa-chevron-right"></i>
              </button>
            </div>

            <ListTable quotations={this.props.items} />

            <div className="btn-group" role="group">
              <button
                className="btn btn-default btn-sm"
                onClick={this.loadLess}><i className="fa fa-chevron-left"></i>
              </button>
              <button
                className="btn btn-default btn-sm"
                onClick={this.loadMore}><i className="fa fa-chevron-right"></i>
              </button>
              </div>
          </div>
        </div>
      </div>
    )
  }
});

export default connect(store => store.quotations)(quotations);
