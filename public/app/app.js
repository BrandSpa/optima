'use strict';
import React from 'react';
import {render} from 'react-dom';
import page from 'page';
import axios from 'axios';
import {Provider} from 'react-redux';
import store from './store';
import App from './views/app';
import Dashboard from 'views/quotations/dashboard';
import CompanyCreate from './views/companies/create_panel';
import Login from './login';
import Quotation from './views/quotation/section';
import Companies from './views/companies/list';
import Contacts from './views/contacts/section';
import Services from './views/services/section';
import Reports from './views/graphs/section';
import Todos from './views/todos/section';

function root(component) {
  return render(
    <App>
      <Provider store={store}>
        {component}
      </Provider>
    </App>,
    document.getElementById("app")
  );
}

function checkAuth(ctx, next) {
  return next();
  // let token = localStorage.getItem('optima-token');
  
  // if(token) {
  //   axios.defaults.headers.common['Authorization'] = `bearer ${token}`;
    
  // } else {
  //    page.redirect('/login');
  // } 
}

// page('/login', function() {
//   render(<Login />, document.getElementById("app"));
// });

// page('/*', checkAuth);

page('/', () => {
  let user = JSON.parse(localStorage.getItem('user'));
  return root(<Dashboard user={user} />);
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
});

page('/contacts', () => {
  return root(<Contacts/>);
});

page('/services', () => {
  return root(<Services/>);
});

page('/reports', () => {
  return root(<Reports/>);
});

page('/quotations/:id', (ctx) => {
  return root(<Quotation params={ctx.params}/>)
});

page();
