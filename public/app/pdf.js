require('babel-polyfill');
import React from 'react';
import {render} from 'react-dom';
import Pdf from './pdf/index';
import request from 'axios';
let quotations = [{id: 1}, {id: 2}];
let data = document.getElementById("pdf").dataset.quotation;

try {
	data = JSON.parse( data.replace(/font-family: "Stratum2 Regular","serif";/g, '') );
} catch(e) {

}

render( <Pdf quotation={data} />, document.getElementById("pdf"));
	

