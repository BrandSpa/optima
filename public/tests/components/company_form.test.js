import React from 'react';
import { shallow, mount } from 'enzyme';
import CompanyForm from '../../app/views/companies/form_create';

describe('company form component', () => {
	it('should change state', () => {
		const fnMock = jest.fn();
		const wrapper = shallow(<CompanyForm onSubmit={fnMock} />);
		const preventDefault = () => false;

		const expectedState = {
			name: 'Brand Spa',
      nit: '123456789-4',
      address: 'calle 147',
      phone: '30034980',
      web: 'brandspa.com',
		};

		wrapper.find('input').at(0).simulate('change', {preventDefault, currentTarget: {value: expectedState.name}});
		wrapper.find('input').at(1).simulate('change', {preventDefault, currentTarget: {value: expectedState.nit}});
		wrapper.find('input').at(2).simulate('change', {preventDefault, currentTarget: {value: expectedState.address}});
		wrapper.find('input').at(3).simulate('change', {preventDefault, currentTarget: {value: expectedState.phone}});
		wrapper.find('input').at(4).simulate('change', {preventDefault, currentTarget: {value: expectedState.web}});
		expect(wrapper.find('input').length).toBe(5);
		expect(wrapper.state().company).toEqual(expectedState);
		

	})
})