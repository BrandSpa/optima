import request from 'axios';

export default function(endpoint, type, singularType) {
	
	const actions = {
		fetch(params = {}, dispatch) {
			return request
				.get(endpoint, {params})
				.then(res => dispatch({ type: `${type}_FETCH`, payload: res.data}))
				.catch(err => dispatch({ type: `${type}_FAIL`, payload: err.response.data}));
		},

		store(model = {}, dispatch) {
			return request
				.post(endpoint, model)
				.then(res => dispatch({ type: `${type}_STORE`, payload: res.data}))
				.catch(err => dispatch({ type: `${type}_FAIL`, payload: err.response.data}));
		},

		fetchOne(id, params = {}, dispatch) {
			return request
				.get(`${endpoint}/${id}`, {params})
				.then(res => dispatch({ type: `${type}_SET_${singularType}`, payload: res.data}))
				.catch(err => dispatch({ type: `${type}_FAIL`, payload: err.response.data}));
		},

		update(id, model = {}, dispatch) {
			return request
				.put(`${endpoint}/${id}`, model)
				.then(res => dispatch({ type: `${type}_SET_${singularType}`, payload: res.data}))
				.catch(err => dispatch({ type: `${type}_FAIL`, payload: err.response.data}));
		}

	};

	return actions;
}


