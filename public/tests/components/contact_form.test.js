import React from 'react';
import { shallow, mount } from 'enzyme';
import ContactForm from '../../app/views/contacts/form_create';

describe('contact form component', () => {
	it('should change state', () => {
		const fnMock = jest.fn();
		const wrapper = shallow(<ContactForm onSubmit={fnMock} />);
		const preventDefault = () => false;
		const expectedState = {
			"birthday": "07/02/1990",
			"comment": "esto es una nota",
			"company_id": null, 
			"email": "ale@brandspa.com", 
			"fax": "fax num",
			"lastname": "Sanabria", 
			"mobile_1": "3057374066", 
			"mobile_2": "3057374067", 
			"name": "Alejandro", 
			"phone_1": "3057374", 
			"phone_2": "3057375", 
			"position": "Developer", 
			"title": "Sr"
		};

		wrapper.find('input').at(0).simulate('change', {preventDefault, currentTarget: {value: expectedState.name}});
		wrapper.find('input').at(1).simulate('change', {preventDefault, currentTarget: {value: expectedState.lastname}});
		wrapper.find('input').at(2).simulate('change', {preventDefault, currentTarget: {value: expectedState.email}});
		wrapper.find('input').at(3).simulate('change', {preventDefault, currentTarget: {value: expectedState.title}});
		wrapper.find('input').at(4).simulate('change', {preventDefault, currentTarget: {value: expectedState.position}});
		wrapper.find('input').at(5).simulate('change', {preventDefault, currentTarget: {value: expectedState.phone_1}});
		wrapper.find('input').at(6).simulate('change', {preventDefault, currentTarget: {value: expectedState.phone_2}});
		wrapper.find('input').at(7).simulate('change', {preventDefault, currentTarget: {value: expectedState.mobile_1}});
		wrapper.find('input').at(8).simulate('change', {preventDefault, currentTarget: {value: expectedState.mobile_2}});
		wrapper.find('input').at(9).simulate('change', {preventDefault, currentTarget: {value: expectedState.fax}});
		wrapper.find('input').at(10).simulate('change', {preventDefault, currentTarget: {value: expectedState.birthday}});
		wrapper.find('input').at(11).simulate('change', {preventDefault, currentTarget: {value: 'adicional random'}});

		wrapper.find('textarea').at(0).simulate('change', {preventDefault, currentTarget: {value: 'esto es una nota'}});

		expect(wrapper.state().contact).toEqual(expectedState);
		expect(wrapper.find('input').length).toBe(11);

	})
})