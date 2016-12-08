import request from 'axios';
const TYPE = 'QUOTATIONS';
const endpoint = 'api/v1/quotations';

export function fetch(params = {}) {
  return dispatch => {
		  return request
      .get(endpoint, {params})
      .then(res => dispatch({ type: `${TYPE}_FETCH`, payload: res.data}))
      .catch(err => dispatch({ type: `${TYPE}_FAIL`, payload: err.response.data}));
	}
}

export function store(quotation = {}) {
  return dispatch => {
    return request
      .post('/api/v1/quotations', quotation)
      .then(res => dispatch({ type: `${TYPE}_STORE`, payload: res.data}))
      .catch(err => dispatch({ type: `${TYPE}_FAIL`, payload: err.response.data}));
  }
}