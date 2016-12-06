import request from 'superagent';
const TYPE = 'ACTIVITIES';
const endpoint = 'api/v1/activities';

export function fetch(params = {}) {
  return dispatch => {
		  return request
      .get(endpoint)
      .end((err, res) => {
        if(err) return dispatch({ type: `${TYPE}_FAIL`, payload: res.body});
				return dispatch({ type: `${TYPE}_FETCH`, payload: res.body});
      });
	}
}
