import request from 'axios';
const TYPE = 'COMPANIES';
const endpoint = 'api/v1/companies';

export function fetch(params = {}) {
  return dispatch => {
		  return request
      .get(endpoint, {params})
      .then(res => dispatch({ type: `${TYPE}_FETCH`, payload: res.data}))
			.catch(err => dispatch({ type: `${TYPE}_FAIL`, payload: err}));
	}
}

export function store(company) {
	return dispatch => {
		return request
		.post(endpoint, company)
		.then(res => dispatch({ type: `${TYPE}_STORE`, payload: res.data}))
		.catch(err => dispatch({ type: `${TYPE}_FAIL`, payload: err.response.data}));
	}
}

export function update(company) {
	return dispatch => {
		return request
    .put(`${endpoint}/${company.id}`, company)
    .end(res => dispatch({ type: `${TYPE}_UPDATE`, payload: res.data}))
		.catch(err => dispatch({ type: `${TYPE}_FAIL`, payload: err.response.data}));
	}
}

export function setCompany(company) {
	return dispatch => {
		return new Promise((resolve, reject) => {
			let action = { type: `${TYPE}_SET_COMPANY`, payload: company};
			dispatch(action);
			return resolve(action);
		});
	
	}
}

export function cleanItems() {
	return { type: `${TYPE}_CLEAN_ITEMS`, payload: []};	
}
