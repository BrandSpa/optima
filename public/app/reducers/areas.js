const TYPE = 'AREAS';
const initialState = {
	items: [],
	errors: [],
	contact: {}
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case `${TYPE}_FETCH`:
			return {
        ...state,
        items: action.payload
      };
		break;

		case `${TYPE}_SET_AREA`:
			return {
        ...state,
				errors: [],
        contact: action.payload
      };
		break;

		case `${TYPE}_STORE`:
			return {
        ...state,
				contact: {},
				errors: [],
        items: [action.payload, ...state.items]
      };
		break;

		case `${TYPE}_UPDATE`:
			let updated = action.payload;
			
			return {
        ...state,
				contact: {},
				errors: [],
				items: state.items.map(model => model.id == updated.id ? {...model, ...updated} : model)
      };
		break;

		case `${TYPE}_CLEAN_ITEMS`:
			return {
        ...state,
				items: []
      };
		break;

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
