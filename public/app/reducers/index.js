'use strict';
import {combineReducers} from 'redux';
import quotations from './quotations';
import quotation from './quotation';
import todos from './todos';
import activities from './activities';
import reports from './reports';
import companies from './companies';
import contacts from './contacts';

export default combineReducers({
	todos,
	quotations,
	quotation,
	activities,
	reports,
	companies,
	contacts
});
