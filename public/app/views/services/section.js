'use strict';
import React from 'react';
import {connect} from 'react-redux';
import * as action from 'actions/services';
import Form from 'views/services/form_create';
import List from 'views/services/list';

const section = React.createClass({

  getInitialState() {
    return {
      allServices: [],
      service: {
        price_1: '',
        price_2: '',
      },
      filters: {
        query: '',
        offset: 0,
      },
      base: 15
    }
  },

  componentDidMount() {
   this.fetch();
  },

  componentWillReceiveProps(props) {
    if(props.items.length) {
      this.setState({allServices: props.items});
    }
  },

  fetch(query = {}) {
    this.props.dispatch(action.fetch(query));
  },

  handleEdit(service) {
    this.props.dispatch(action.setService(service));
  },

  handleSubmit(service) {
    if(service.id) {
      this.props.dispatch(action.update(service));
    } else {
      this.props.dispatch(action.store(service));
    }
  },

  search(e) {
    let val = e.currentTarget.value;
    this.setState({query: val});
    this.fetch({...this.state.filters, query: val});
  },

  // search(e) {
  //   let val = e.currentTarget.value;
  //   let q = new RegExp(val, 'i');
  //   let services = this.state.services.filter(service => service.title.match(q));
  //   if(val.length == 0) {
  //     this.setState({services: this.state.allServices});
  //   } else {
  //     this.setState({services});
  //   }
  // },

  clean() {
    this.setState({
      service: cleanObject(this.state.service),
    });
  },

  handlePrev() {
    let {filters, base} = this.state;
    let offset = parseInt(filters.offset) - this.state.base;
    this.setState({filters: {...this.state.filters, offset}});
    this.fetch({...this.state.filters, offset});
  },

  handleNext() {
    let {filters, base} = this.state;
    let offset = parseInt(filters.offset) + this.state.base;
    this.setState({filters: {...this.state.filters, offset}});
    this.fetch({...this.state.filters, offset});
  },

  render: function() {
    return (
      <div>
      <div className="col-md-8">
      <div className="panel">
        <div className="panel-body">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar"
            onChange={this.search}
            />
            <br/>
             <div className="btn-group" role="group">
            <button
              className="btn btn-default btn-sm"
              onClick={this.handlePrev}
              disabled={!this.state.filters.offset}
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
      <div className="panel">
        <div className="panel-body">
          <List
            services={this.props.items}
            onEdit={this.handleEdit}
          />
        </div>
      </div>
    </div>

        <div className="col-md-4">
          <div className="panel sidebar__right-fixed">
            <div className="panel-body">
              <Form
                service={this.props.service}
                errors={this.props.errors}
                onSubmit={this.handleSubmit}
                onCancel={this.clean}
              />
            </div>
          </div>

        </div>
      </div>

    );
  }
});

export default connect(store => store.services)(section);