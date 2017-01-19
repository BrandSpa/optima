require('babel-polyfill');
import React from 'react';
import {render} from 'react-dom';
import Pdf from './pdf/index';
import {Provider} from 'react-redux';
import store from './store';

render( <Pdf />, document.getElementById("pdf"));