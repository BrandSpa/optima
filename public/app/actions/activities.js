import request from 'axios';
import restActions from '../lib/rest_actions';
const TYPE = 'ACTIVITIES';
const endpoint = '/api/v1/activities';
const rest = restActions(endpoint, TYPE, 'ACTIVITY');

export function fetch(params = {}) {
  return dispatch => rest.fetch(params, dispatch);
}

export function store(activity = {}) {
  return dispatch => rest.store(activity, dispatch);
}
