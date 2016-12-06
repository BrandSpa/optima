'use strict';
import React from 'react';
import {connect} from 'react-redux';
import * as action from 'actions/contacts';
import Form from 'views/contacts/form_create';
import Filters from 'views/companies/filters';
import List from 'views/contacts/list';

const section = React.createClass({
  getInitialState() {
    return {
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
    this.props.dispatch(action.fetch(query));
  },

  handleSearch: function(val) {
    this.setState({filters: {query: val }});
    this.fetch({query: val});
  },

  paginate: function(offset) {
    let filters = {...this.state.filters, offset: offset};
    this.setState({ filters });
    this.fetch(filters);
  },

  handleEdit(contact) {
    this.props.dispatch(action.setContact(contact));
  },

  handleSubmit(contact) {
    if(contact.id) {
       this.props.dispatch(action.update(contact));
    } else {
      this.props.dispatch(action.store(contact));
    }
  },

  render() {
    let contacts = this.props.items;

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
              <List contacts={contacts} onEdit={this.handleEdit}/>
            </div>
          </div>
        </div>
        <div className="col-md-4">
        <div className="panel sidebar__right-fixed">
          <div className="panel-body">
            <div className={this.props.errors.length ? "alert alert-danger" : ""}>
              {this.props.errors}
            </div>
            <Form 
              contact={this.props.contact}
              onSubmit={this.handleSubmit}
               btnText="Guardar" 
            />
          </div>
        </div>
        </div>
      </div>
    );
  }
});

export default connect(store => store.contacts)(section);