const TYPE = 'USER';
const initialState = {
	user: JSON.parse(localStorage.getItem('user')) || {},
	errors: []
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case `${TYPE}_FAIL`:
			return {
        ...state,
        errors: [action.payload]
      };
		break;
	
		default:
			return state;
		break;
	}
}
