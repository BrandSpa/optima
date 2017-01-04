import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as action from '../../app/actions/companies';
import moxios from 'moxios';
import expect from 'expect';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

const TYPE = 'COMPANIES';
const endpoint = 'api/v1/companies';

describe('companies actions', () => {

	beforeEach(function () {
  	moxios.install()
  })

  afterEach(function () {
  	moxios.uninstall()
  })

	it('should fetch', () => {
		const store = mockStore({companies: {}});
		const stubResponse = [ {id: 2020, name: 'brandspa'}, {id: 2121, name: 'rentadvisor'} ];
		const expectedActions = [{type: `${TYPE}_FETCH`, payload: stubResponse}];

		moxios.stubRequest(endpoint, { status: 200, response: stubResponse });

		return store.dispatch(action.fetch())
			.then(() => expect(store.getActions()).toEqual(expectedActions));
	})

	it('should store', () => {
		const store = mockStore({});
		const stubResponse = {id: 2020, name: 'brandspa'};
		const expectedActions = [{type: `${TYPE}_STORE`, payload: stubResponse}];
		moxios.stubRequest(endpoint, { status: 200, response: stubResponse });
		
		return store.dispatch(action.store(stubResponse.id, stubResponse))
			.then(() => expect(store.getActions()).toEqual(expectedActions));
	})

	it('should update', () => {
		const store = mockStore({});
		const stubResponse = {id: 2020, name: 'brandspa'};
		const expectedActions = [{type: `${TYPE}_UPDATE`, payload: stubResponse}];

		moxios.stubRequest(`${endpoint}/${stubResponse.id}`, { status: 200, response: stubResponse });

		return store.dispatch(action.update(stubResponse))
			.then(() => expect(store.getActions()).toEqual(expectedActions));
	})

	it('should set a company', () => {
		const store = mockStore({});

	})

	it('should add a contact', () => {
		const store = mockStore({});

	})

	it('should update a contact', () => {
		const store = mockStore({});

	})

	it('should clean items', () => {
		const store = mockStore({});

	})

	
});