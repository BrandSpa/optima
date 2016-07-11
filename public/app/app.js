'use strict';
import React from 'react';
import page from 'page';
import {render} from 'react-dom';
import App from 'views/app';
import CompanyCreate from 'views/companies/create_panel';
import ContactCreate from 'views/contacts/create_panel';
import Quotation from 'views/quotation/quotation';
import Companies from 'views/companies/list';
import Contacts from 'views/contacts/list';
import Services from 'views/services/section';

function root(component) {
  return render(
    <App>{component}</App>,
    document.getElementById("app")
  );
}

function checkAuth(ctx, next) {
  return next();
}

page('/', checkAuth, () => {
  return root();
});

page('/companies', () => {
  return root(<Companies/>);
});

page('/company/create', () => {
  return root(<CompanyCreate/>);
});

page('/services', () => {
  return root(<Services/>);
});

page({hashbang: true});

// render((
//   <Router history={ hashHistory }>
//     <Route path="/" component={App}>
//       <Route path="company/create" component={CompanyCreate} />
//       <Route path="company/:companyId/contact/create" component={ContactCreate} />
//       <Route path="quotations/:id" component={Quotation} />
//       <Route path="companies" component={Companies} />
//       <Route path="services" component={Services} />
//     </Route>
//   </Router>
// ), document.getElementById("app"));
