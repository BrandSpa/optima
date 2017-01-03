import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import DateTime from '../../app/components/datetime';

describe('datetime component', () => {
	it('should render a input', () => {
		let wrapper = shallow(<DateTime />);
		expect(wrapper.length).toBe(1);
		expect(wrapper.type()).toBe('input');
	});

	it('should have state active on click', () => {
		let wrapper = shallow(<DateTime />);
		expect(	wrapper.simulate('click').state('active')).toBe(true);
	})
});
