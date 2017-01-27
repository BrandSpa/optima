import React from 'react';
import { shallow, mount } from 'enzyme';
import Status from '../../app/views/quotation/status';

describe('component quotation service', () => {
	it('should change state to Enviada', () => {
		const services = [{id: 1, title: 'the service title'}];
		const dispatch = jest.fn();
		const onStatusChange = jest.fn();
		const preventDefault = () => {};

		const wrapper = shallow(
			<Status
				disabled={false} 
				quotation={{id: 2}}
				dispatch={dispatch} 
				onStatusChange={onStatusChange}
			/>
		);

		wrapper.find('.btn').at(0).simulate('click', {preventDefault});
		expect(onStatusChange).toBeCalledWith({status: 'Enviada'}, "Cambio estado a Enviada");
		expect(onStatusChange).toHaveBeenCalledTimes(1);
	})

	it('should change state to Entregada', () => {
		const services = [{id: 1, title: 'the service title'}];
		const dispatch = jest.fn();
		const onStatusChange = jest.fn();
		const preventDefault = () => {};

		const wrapper = shallow(
			<Status
				disabled={false} 
				quotation={{id: 2}}
				dispatch={dispatch} 
				onStatusChange={onStatusChange}
			/>
		);

		wrapper.find('.btn').at(1).simulate('click', {preventDefault});
		expect(onStatusChange).toBeCalledWith({status: 'Entregada'}, "Cambio estado a Entregada");
		expect(onStatusChange).toHaveBeenCalledTimes(1);
	})

	it('should change state to Efectiva', () => {
		const services = [{id: 1, title: 'the service title'}];
		const dispatch = jest.fn();
		const onStatusChange = jest.fn();
		const preventDefault = () => {};

		const wrapper = shallow(
			<Status
				disabled={false} 
				quotation={{id: 2}}
				dispatch={dispatch} 
				onStatusChange={onStatusChange}
			/>
		);

		wrapper.find('.btn').at(2).simulate('click', {preventDefault});
		expect(onStatusChange).toBeCalledWith({status: 'Efectiva'}, "Cambio estado a Efectiva");
		expect(onStatusChange).toHaveBeenCalledTimes(1);
	})

	it('should change state to No efectiva', () => {
		const services = [{id: 1, title: 'the service title'}];
		const dispatch = jest.fn();
		const handleOpenNoEffective = jest.fn();
		const preventDefault = () => {};

		const wrapper = shallow(
			<Status
				disabled={false} 
				quotation={{id: 2}}
				dispatch={dispatch} 
				handleOpenNoEffective={handleOpenNoEffective}
			/>
		);

		wrapper.find('.btn').at(4).simulate('click', {preventDefault});
		expect(handleOpenNoEffective).toBeCalledWith("Cambio estado a No efectiva");
		expect(handleOpenNoEffective).toHaveBeenCalledTimes(1);
	})

	it('should change state to Nula', () => {
		const services = [{id: 1, title: 'the service title'}];
		const dispatch = jest.fn();
		const handleOpenNoEffective = jest.fn();
		const onStatusChange = jest.fn();
		const preventDefault = () => {};

		const wrapper = shallow(
			<Status
				disabled={false} 
				quotation={{id: 2}}
				dispatch={dispatch} 
				onStatusChange={onStatusChange}
			/>
		);

		wrapper.find('.btn').at(6).simulate('click', {preventDefault});
		expect(onStatusChange).toBeCalledWith({status: 'Nula'}, 'Cambio estado a Nula');
		expect(onStatusChange).toHaveBeenCalledTimes(1);
	})

	it('should change state to por confirmar', () => {
		const services = [{id: 1, title: 'the service title'}];
		const dispatch = jest.fn();
		const handleOpenNoEffective = jest.fn();
		const onStatusChange = jest.fn();
		const preventDefault = () => {};

		const wrapper = shallow(
			<Status
				disabled={false} 
				quotation={{id: 2}}
				dispatch={dispatch} 
				onStatusChange={onStatusChange}
			/>
		);

		wrapper.find('.btn').at(7).simulate('click', {preventDefault});
		expect(onStatusChange).toBeCalledWith({status: 'Por confirmar'}, 'Cambio estado a Por confirmar');
		expect(onStatusChange).toHaveBeenCalledTimes(1);
	})

	
})
