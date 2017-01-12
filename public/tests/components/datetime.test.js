import React from 'react';
import { shallow, mount } from 'enzyme';
import expect from 'expect';
import sinon from 'sinon';
import DateTime from '../../app/components/datetime';

describe('datetime component', () => {
	it('should render a input', () => {
		let wrapper = shallow(<DateTime />);
		expect(wrapper.length).toBe(1);
		expect(wrapper.type()).toBe('input');
	});

});
