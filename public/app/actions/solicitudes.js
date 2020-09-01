import request from 'axios';
import restActions from '../lib/rest_actions';
const TYPE = 'SOLICITUDES';
const endpoint = '/api/v1/solicitudes';
const rest = restActions(endpoint, TYPE, 'SOLICITUD');

export function fetch(params = {}) {
  return dispatch => rest.fetch(params, dispatch);
}

export function fetchOne(id, params = {}) {
  return dispatch => rest.fetchOne(id, params, dispatch);
}

export function store(solicitud = {}) {
  return dispatch => rest.store(solicitud, dispatch);
}

export function update(solicitud = {}) {
  return dispatch => rest.update(solicitud, dispatch);
}

export function updateContact(contact = {}) {
   return dispatch => {
		return new Promise((resolve, reject) => {
			let action = { type: `${TYPE}_UPDATE_CONTACT`, payload: contact};
			dispatch(action);
			return resolve(action);
		});
	}
}

export function sendMail(id) {
   return dispatch => {
    return request
      .post(`${endpoint}/${id}/sendmail`)
      .then(res => dispatch({ type: `${TYPE}_SET_SOLICITUD`, payload: res.data}))
      .catch(err => dispatch({ type: `${TYPE}_FAIL`, payload: err.response.data}));
  }
}

//services

export function fetchServices(solicitudId) {
  return dispatch => {
    return request
      .get(`${endpoint}/${solicitudId}/services`)
      .then(res => dispatch({ type: `${TYPE}_FETCH_SERVICES`, payload: res.data}))
      .catch(err => dispatch({ type: `${TYPE}_FAIL`, payload: err.response.data})); 
  }
}

export function storeService(solicitudId, service) {
  return dispatch => { 
    return request
    .post(`${endpoint}/${solicitudId}/services`, service)
    .then(res => dispatch({ type: `${TYPE}_ADD_SERVICE`, payload: res.data}))
    .catch(err => dispatch({ type: `${TYPE}_FAIL`, payload: err.response.data})); 
  }
}

export function updateService(service) {
  return dispatch => {
		return new Promise((resolve, reject) => {
			let action = { type: `${TYPE}_UPDATE_SERVICE`, payload: service};
			dispatch(action);
			return resolve(action);
		});
	}
}

export function removeService(id, solicitud_id) {
  return dispatch => { 
    return request
    .delete(`/api/v1/services/${id}`, {params: {solicitud_id}} )
    .then(res => dispatch({ type: `${TYPE}_REMOVE_SERVICE`, payload: res.data}))
    .catch(err => dispatch({ type: `${TYPE}_FAIL`, payload: err.response.data}));
  }
}
