const TYPE = 'SOLICITUDES';
const initialState = {
	items: [],
	errors: [],
	quotation: {},
	contact: {},
	company: {},
	services: []
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case `${TYPE}_FETCH`:
			console.log(action.payload)
			return {
        ...state,
        items: action.payload
      };
		break;

		case `${TYPE}_STORE`:
			return {
        ...state,
        solicitud: action.payload
      };
		break;
		
		case `${TYPE}_UPDATE`:
			return {
        ...state,
        solicitud: action.payload,
				company: action.payload.company,
				contact: action.payload.contact
      };
		break;

		case `${TYPE}_SET_SOLICITUD`:
			return {
        ...state,
        solicitud: action.payload,
				company: action.payload.company,
				contact: action.payload.contact
      };
		break;

		case `${TYPE}_UPDATE_CONTACT`:
			return {
        ...state,
				contact: action.payload
      };
		break;

		case `${TYPE}_FETCH_SERVICES`:
			return {
        ...state,
        services: action.payload
      };
		break;

		case `${TYPE}_ADDED_SERVICE`:
			return state
		break;

		case `${TYPE}_ADD_SERVICE`:
			return {
        ...state,
        services: [action.payload].concat(state.services)
      };
		break;

		case `${TYPE}_UPDATE_SERVICE`:

			let services = state.services.map((serv) => {
				return serv.id == action.payload.id ? {...serv, ...action.payload} : serv	
			});

			return {
        ...state,
        services
      };
		break;

		case `${TYPE}_REMOVE_SERVICE`:
			return {
        ...state,
        services: state.services.filter(service => service.id !== action.payload.id)
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
