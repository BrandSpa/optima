import request from 'axios';
import restActions from '../lib/rest_actions';
const TYPE = 'QUOTATIONS';
const endpoint = '/api/v1/quotations';
const rest = restActions(endpoint, TYPE, 'QUOTATION');

export function fetch(params = {}) {
  return dispatch => rest.fetch(params, dispatch);
}

export function fetchOne(id, params = {}) {
  return dispatch => rest.fetchOne(id, params, dispatch);
}

export function store(quotation = {}) {
  return dispatch => rest.store(quotation, dispatch);
}

export function update(quotation = {}) {
  return dispatch => rest.update(quotation, dispatch);
}

export function sendMail(id) {
   return dispatch => {
    return request
      .post(`${endpoint}/${id}/sendmail`)
      .then(res => dispatch({ type: `${TYPE}_SET_QUOTATION`, payload: res.data}))
      .catch(err => dispatch({ type: `${TYPE}_FAIL`, payload: err.response.data}));
  }
}

//services

export function fetchServices(quotationId) {
  return dispatch => {
    return request
      .get(`${endpoint}/${quotationId}/services`)
      .then(res => dispatch({ type: `${TYPE}_FETCH_SERVICES`, payload: res.data}))
      .catch(err => dispatch({ type: `${TYPE}_FAIL`, payload: err.response.data})); 
  }
}

export function storeService(quotationId, service) {
  return dispatch => { 
    return request
    .post(`${endpoint}/${quotationId}/services`, service)
    .then(res => dispatch({ type: `${TYPE}_ADD_SERVICE`, payload: res.data}))
    .catch(err => dispatch({ type: `${TYPE}_FAIL`, payload: err.response.data})); 
  }
}

export function removeService(id, quotation_id) {
  return dispatch => { 
    return request
    .delete(`api/v1/services/${id}`, {params: {quotation_id}} )
    .then(res => dispatch({ type: `${TYPE}_REMOVE_SERVICE`, payload: res.data}))
    .catch(err => dispatch({ type: `${TYPE}_FAIL`, payload: err.response.data}));
  }
}
