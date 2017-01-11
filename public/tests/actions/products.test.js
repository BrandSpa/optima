import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import * as action from '../../app/actions/products';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

const TYPE = 'PRODUCTS';
const endpoint = '/api/v1/products';

describe('products actions', () => {

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
		
		moxios.stubRequest(`${endpoint}?quotation_id=3300`, {status: 200, response: stubResponse});
		
		return store.dispatch(action.fetch({quotation_id: 3300}))
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

	it('should delete', () => {
		const store = mockStore({});
		const stubResponse = {id: 5040};
		const expectedActions = [{ type: `${TYPE}_REMOVE`, payload: stubResponse}];
		moxios.stubRequest(`${endpoint}/${stubResponse.id}`, {status: 200, response: stubResponse});

		return store.dispatch(action.remove(stubResponse.id))
			.then(() => expect(store.getActions()).toEqual(expectedActions));
	})
});
