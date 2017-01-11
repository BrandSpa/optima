import request from 'axios';
import restActions from '../lib/rest_actions';
const TYPE = 'TRACKINGS';
const endpoint = '/api/v1/trackings';
const rest = restActions(endpoint, TYPE, 'TRACKING');

export function fetch(params = {}) {
  return dispatch => rest.fetch(params, dispatch);
}

export function store(product) {
	return dispatch => rest.store(product, dispatch);
}
