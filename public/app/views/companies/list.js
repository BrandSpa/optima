'use strict';
import React from 'react';
import {connect} from 'react-redux';
import * as action from 'actions/companies';
import Company from 'views/companies/company';
import Form from 'views/companies/form_create';
import Filters from 'views/companies/filters';

const list = React.createClass({
  getInitialState: function() {
    return {
      filters: {
        query: null,
        offset: 0
      }
    }
  },

  componentDidMount: function() {
    this.fetch();
  },

  fetch: function(filters) {
    let query;

    if(filters) {
      query = filters;
    } else {
      query = this.state.filters;
    }

    this.props.dispatch(action.fetch(query));
  },

  handleSearch: function(val) {
    this.setState({filters: {query: val }});
    this.fetch({query: val});
  },

  loadMore: function(offset) {
    this.setState({
      filters: {offset: offset}
    });

    this.fetch({offset: offset});
  },

  loadLess: function(offset) {
    this.setState({ filters: {offset: offset} });
    this.fetch({offset: offset});
  },

  handleEdit: function(company, e) {
    e.preventDefault();
    this.props.dispatch(action.setCompany(company));
  },

  handleSubmit: function(company) {
    if(company.id) {
       this.props.dispatch(action.update(company));
    } else {
      this.props.dispatch(action.store(company));
    }
  },

  render: function() {
    let {errors, items, company} = this.props;

    let companyNodes = items.map(company =>
      <Company
        key={company.id}
        company={company}
        onEdit={this.handleEdit}
      />
    );

    return (
      <div>
        <div className="col-md-8">
          <Filters
            onSearch={this.handleSearch}
            onNext={this.loadMore}
            onPrev={this.loadLess}
            offset={this.state.filters.offset}
          />

          <div className="companies-list">
            {companyNodes}
          </div>

        </div>

        <div className="col-md-4">
          <div className="panel sidebar__right-fixed">
            <div className="panel-body">
            <div className={errors.length ? "alert alert-danger" : ""}>
              {errors}
            </div>
              <Form
                company={company}
                btnCleanText="Cancelar"
                btnStoreText="Guardar"
                onSubmit={this.handleSubmit}
              />
            </div>
          </div>
        </div>

      </div>

    );
  }
});

export default connect(store => store.companies)(list);
