'use strict';
import React from 'react';
import _ from 'lodash';
import request from 'superagent';
import Form from 'views/contacts/form_create';
import Filters from 'views/companies/filters';
import updateItem from 'lib/update_item';
import List from 'views/contacts/list';

module.exports = React.createClass({
  getInitialState() {
    return {
      contact: {},
      contacts: [],
      filters: {
        offset: 0
      }
    }
  },

  componentDidMount() {
    this.fetch();
  },

  fetch(filters) {
    let query = filters ? filters : {};

    request
      .get('/api/v1/contacts')
      .query(query)
      .end((err, res) => this.setState({contacts: res.body}));
  },

  handleSearch: function(val) {
    this.setState({filters: {query: val }});
    this.fetch({query: val});
  },

  paginate: function(offset) {
    let filters = _.extend(this.state.filters, {offset: offset});
    this.setState({ filters: filters });
    this.fetch(filters);
  },

  handleEdit(contact) {
    this.setState({contact: contact});
  },

  handleSubmit(contact) {
    if(contact.id) {
      this.update();
    } else {
      this.store();
    }
  },

  update(contact) {
    request
    .put(`/api/v1/contacts/${contact.id}`)
    .end((err, res) => {
      let contacts = updateItem(this.state.contacts, res.body, 'id');
      this.setState({contacts: contacts});
    });
  },

  store(contact) {
    request
    .post('/api/v1/contacts')
    .end((err, res) => {
      console.log(res.body);
    });
  },

  render() {
    let contacts = this.state.contacts;


    return (
      <div>
        <div className="col-md-8">
        <Filters
          onSearch={this.handleSearch}
          onNext={this.paginate}
          onPrev={this.paginate}
          offset={this.state.filters.offset}
        />
          <div className="panel">
            <div className="panel-body">
              <List contacts={contacts}/>
            </div>
          </div>
        </div>
        <div className="col-md-4">
        <div className="panel sidebar__right-fixed">
          <div className="panel-body">
            <Form contact={this.state.contact} btnText="Guardar" onSubmit={this.handleSubmit} />
          </div>
        </div>
        </div>
      </div>
    );
  }
});
