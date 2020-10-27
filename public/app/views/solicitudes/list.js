'use strict';
import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions/solicitudes';
import Filters from 'views/solicitudes/filters';
import ListTable from 'views/solicitudes/list_table_solicitudes';


const Solicitudes = React.createClass({
  
  getInitialState() {
    return {
      query: {
        offset: 0
      },
    }
  },

  componentDidMount() {
    this.props.dispatch(actions.fetch());
    // console.log(this.props)
  },

  loadMore() {
    let offset = this.state.query.offset + 10;
    var query = {...this.state.query, offset: offset};

    this.setState({
      query: query
    });
    
    this.props.dispatch(actions.fetch(query));
  },

  componentDidUpdate() {
    console.log(this.props);
  },

  loadLess() {
    const offset = this.state.query.offset - 10;

    if ( offset >= 0) {
      var query = {...this.state.query, offset: offset};
      this.setState({query: query});
      this.props.dispatch(actions.fetch(query));
    }
  },

  handleFilters(query) {
    this.props.dispatch(actions.fetch(query));
    this.setState({query: query});
  },

  render() {

    return (
      <div>
        <Filters onChange={this.handleFilters} />
        <div className="panel quotations-table">
          <div className="panel-heading"><h5>Solicitudes</h5></div>
          <div className="panel-body" style={{minHeight: '600px'}}>
            <a href="/solicitudes/create" className="btn btn-primary btn-sm">Nueva solicitud</a>
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

            <ListTable solicitudes={this.props.items} />

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

export default connect(store =>  store.solicitudes )(Solicitudes);
