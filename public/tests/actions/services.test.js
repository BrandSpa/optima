import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import * as action from '../../app/actions/services';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

const TYPE = 'SERVICES';
const endpoint = 'api/v1/services';

describe('services actions', () => {

	beforeEach(() => {
  	moxios.install()
  })

  afterEach(() => {
  	moxios.uninstall()
  })
	
	it('should fetch', () => {
		const store = mockStore({});
		const stubResponse = [{id: 2020}, {id: 9090}];
		const expectedActions = [{ type: `${TYPE}_FETCH`, payload: stubResponse}];
		
		moxios.stubRequest(endpoint, {status: 200, response: stubResponse});
		
		return store.dispatch(action.fetch())
			.then(() => expect(store.getActions()).toEqual(expectedActions));
	})

	it('should store', () => {
		const store = mockStore({});
		const stubResponse = {id: 4040, name: 'Desktop'};
		const expectedActions = [{ type: `${TYPE}_STORE`, payload: stubResponse}];
		moxios.stubRequest(endpoint, {status: 200, response: stubResponse});

		return store.dispatch(action.store(stubResponse))
			.then(() => expect(store.getActions()).toEqual(expectedActions) );
	})

	it('should update', () => {
		const store = mockStore({});
		const stubResponse = {id: 4040, name: 'Desktop'};
		const expectedActions = [{ type: `${TYPE}_UPDATE`, payload: stubResponse}];
		
		moxios.stubRequest(`${endpoint}/${stubResponse.id}`, {status: 200, response: stubResponse});

		return store.dispatch(action.update(stubResponse))
			.then(() => expect(store.getActions()).toEqual(expectedActions));
	})

	it('should set service', () => {
		const store = mockStore({});
		const service = {id: 1010, title: 'mantenimiento'};
		const expectedActions = [{ type: `${TYPE}_SET_SERVICE`, payload: service}];
		return store.dispatch(action.setService(service)).then(() => expect(store.getActions()).toEqual(expectedActions));
	})

	it('should clean items', () => {
		const store = mockStore({});
		const service = {id: 1010, title: 'mantenimiento'};
		const expectedActions = [{ type: `${TYPE}_CLEAN_ITEMS`, payload: []}];
		return store.dispatch(action.cleanItems()).then(() => expect(store.getActions()).toEqual(expectedActions));
	})
});

