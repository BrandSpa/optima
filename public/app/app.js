'use strict';
var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var App = require('views/app.jsx');
var CompanyCreate = require('views/companies/create_panel.jsx');
var ContactCreate = require('views/contacts/create_panel.jsx');
var Quotation = require('views/quotation/quotation.jsx');
var Companies = require('views/companies/list.jsx');
var Contacts = require('views/contacts/list.jsx');
var Services = require('views/services/section.jsx');

React.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="company/create" component={CompanyCreate} />
      <Route path="company/:companyId/contact/create" component={ContactCreate} />
      <Route path="quotations/:id" component={Quotation} />
      <Route path="companies" component={Companies} />
      <Route path="services" component={Services} />
    </Route>
  </Router>
), document.body);
