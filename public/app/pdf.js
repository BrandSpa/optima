require('babel-polyfill');
import React from 'react';
import {render} from 'react-dom';
import Pdf from './pdf/index';
let quotations = [];
request
      .get('/api/v1/quotations')
			.then(res =>  quotations = res.data);
render( <Pdf quotations={quotations} />, document.getElementById("pdf"));