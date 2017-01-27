import React from 'react';
import { shallow, mount } from 'enzyme';
import expect from 'expect';
import sinon from 'sinon';
import Tooltip from '../../app/components/tooltip';

describe('tooltip component', () => {
	it('should be active on state true', () => {
		let wrapper = shallow(<Tooltip show={true}></Tooltip>);
		wrapper.setState({ show: true });
		expect(wrapper.find('.my-tooltip--active').length).toEqual(1);
	});

	it('should have content', () => {
		let wrapper = shallow(<Tooltip show={true}><p>some content</p></Tooltip>);
		expect(wrapper.childAt(0).type()).toBe('p');
	})

});
