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
		const company = {id: 7070, name: 'brandspa'};
		const expectedActions = [{type: `${TYPE}_SET_COMPANY`, payload: company}];
		return store.dispatch(action.setCompany(company))
			.then(() => expect(store.getActions()).toEqual(expectedActions));

	})

	it('should add a contact', () => {
		const store = mockStore({});
		const company = {id: 7070, name: 'brandspa'}; 
		const contact = {id: 7070, name: 'Alejandro Sanabria'};
		const expectedActions = [{type: `${TYPE}_ADD_CONTACT`, payload: {company, contact}}];
		return store.dispatch(action.addContact(company, contact))
			.then(() =>  expect(store.getActions()).toEqual(expectedActions));
	})

	it('should update a contact', () => {
		const store = mockStore({});
		const company = {id: 7070, name: 'brandspa'}; 
		const contact = {id: 7070, name: 'Alejandro Sanabria'};
		const expectedActions = [{type: `${TYPE}_UPDATE_CONTACT`, payload: {company, contact}}];
		return store.dispatch(action.updateContact(company, contact))
			.then(() =>  expect(store.getActions()).toEqual(expectedActions));
	})

});