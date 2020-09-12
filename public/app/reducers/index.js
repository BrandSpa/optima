'use strict';
import {combineReducers} from 'redux';
import quotations from './quotations';
import todos from './todos';
import activities from './activities';
import reports from './reports';
import companies from './companies';
import contacts from './contacts';
import services from './services';
import products from './products';
import trackings from './trackings';
import solicitudes from './solicitudes';
import asesores from './asesores';
import areas from './areas';
import user from './user';

export default combineReducers({
	todos,
	quotations,
	solicitudes,
	activities,
	reports,
	companies,
	contacts,
	services,
	products,
	trackings,
	asesores,
	areas,
	user
});
