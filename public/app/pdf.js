require('babel-polyfill');
import React from 'react';
import {render} from 'react-dom';
import Pdf from './pdf/index';
import request from 'axios';
let quotations = [{id: 1}, {id: 2}];

request
	.get('/api/v1/quotations', {responseType: 'text' })
	.then(res => {
		render( <Pdf quotations={res.data} />, document.getElementById("pdf"));
	});

