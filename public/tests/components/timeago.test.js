import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import TimeAgo from '../../app/components/timeago';

describe('component timeago', () => {
	it('should render time realtively', () => {
		const wrapper = shallow(<TimeAgo />);
		expect(wrapper.find('.timeago').text()).toBe('justo ahora');
	});
});
