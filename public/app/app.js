'use strict';
import React from 'react';
import page from 'page';
import {render} from 'react-dom';
import App from './views/app';
import CompanyCreate from './views/companies/create_panel';
import ContactCreate from './views/contacts/create_panel';
import Quotation from './views/quotation/section';
import Companies from './views/companies/list';
import Contacts from './views/contacts/section';
import Services from './views/services/section';
import Todos from './views/todos/section';

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

page('/quotation/create', () => {
  return root(
    <div>
    <CompanyCreate/>
    </div>
  );
});

page('/todos', () => {
  return root(<div className="col-md-8"><Todos /></div>);
})

page('/contacts', () => {
  return root(<Contacts/>);
});

page('/services', () => {
  return root(<Services/>);
});

page('/quotations/:id', (ctx) => {
  return root(<Quotation params={ctx.params}/>)
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
