import request from 'axios';

export default function(endpoint, type, singularType) {
	
	const actions = {
		fetch(params = {}, dispatch) {
			if(dispatch) {
				return request
				.get(endpoint, {params})
				.then(res => dispatch({ type: `${type}_FETCH`, payload: res.data}))
				.catch(err => dispatch({ type: `${type}_FAIL`, payload: err.response? err.response.data : 'unknown error'}));
			} else {
				return console.error('rest dispatch it is missing on fetch'); 
			}
		},

		store(model = {}, dispatch) {
			if(dispatch && typeof dispatch == 'function') {
				return request
				.post(endpoint, model)
				.then(res => dispatch({ type: `${type}_STORE`, payload: res.data}))
				.catch(err => dispatch({ type: `${type}_FAIL`, payload: err.response? err.response.data : 'unknown error'}));
			} else {
				return console.error('rest dispatch it is missing on store'); 
			}
		},

		fetchOne(id, params = {}, dispatch) {
			return request
				.get(`${endpoint}/${id}`, {params})
				.then(res => dispatch({ type: `${type}_SET_${singularType}`, payload: res.data}))
				.catch(err => dispatch({ type: `${type}_FAIL`, payload: err.response? err.response.data : 'unknown error'}));
		},
		
		update(model = {}, dispatch) {
			if(dispatch && typeof dispatch == 'function') {
				return request
					.put(`${endpoint}/${model.id}`, model)
					.then(res => dispatch({ type: `${type}_UPDATE`, payload: res.data}))
					.catch(err => dispatch({ type: `${type}_FAIL`, payload: err.response? err.response.data : 'unknown error'}));
			} else {
				return console.error('rest dispatch it is missing on update'); 
			}
		},

		remove(id, dispatch) {
			if(dispatch && typeof dispatch == 'function') { 
				return request
				.delete(`${endpoint}/${id}`)
				.then(res => dispatch({ type: `${type}_REMOVE`, payload: res.data}))
				.catch(err => dispatch({ type: `${type}_FAIL`, payload: err.response? err.response.data : 'unknown error'}));
			} else {
				return console.error('rest dispatch it is missing on remove');
			}
			
		}

	};

	return actions;
}


