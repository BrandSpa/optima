import React from 'react';
import { shallow, mount } from 'enzyme';
import ProductForm from '../../app/views/products/form_create';

describe('test product form component', () => {
	it('should change state', () => {
		let fnMock = jest.fn();
		let wrapper = shallow(<ProductForm onSubmit={fnMock} />);
		let preventDefault = () => false;
		wrapper.find('input').at(0).simulate('change', {preventDefault, currentTarget: {value: 'I7'}});
		wrapper.find('input').at(1).simulate('change', {preventDefault, currentTarget: {value: '4GB'}});
		wrapper.find('input').at(2).simulate('change', {preventDefault, currentTarget: {value: '1TB'}});
		wrapper.find('input').at(3).simulate('change', {preventDefault, currentTarget: {value: 'quemador lg'}});
		wrapper.find('input').at(4).simulate('change', {preventDefault, currentTarget: {value: '100/1000'}});
		wrapper.find('input').at(5).simulate('change', {preventDefault, currentTarget: {value: '3500mghz'}});
		wrapper.find('input').at(6).simulate('change', {preventDefault, currentTarget: {value: '22 pulgadas'}});
		wrapper.find('input').at(7).simulate('change', {preventDefault, currentTarget: {value: 'español'}});
		wrapper.find('input').at(8).simulate('change', {preventDefault, currentTarget: {value: 'windows 10'}});
		wrapper.find('input').at(9).simulate('change', {preventDefault, currentTarget: {value: 'office 2010'}});
		wrapper.find('input').at(10).simulate('change', {preventDefault, currentTarget: {value: 'node302'}});
		wrapper.find('input').at(11).simulate('change', {preventDefault, currentTarget: {value: 'adicional random'}});
		wrapper.find('input').at(12).simulate('change', {preventDefault, currentTarget: {value: 'adicional random'}});
		wrapper.find('input').at(13).simulate('change', {preventDefault, currentTarget: {value: 'adicional random'}});
		wrapper.find('input').at(14).simulate('change', {preventDefault, currentTarget: {value: 'adicional random'}});
		wrapper.find('input').at(15).simulate('change', {preventDefault, currentTarget: {value: 'adicional random'}});
		wrapper.find('input').at(16).simulate('change', {preventDefault, currentTarget: {value: 'adicional random'}});
		wrapper.find('input').at(17).simulate('change', {preventDefault, currentTarget: {value: '3'}});
		wrapper.find('input').at(18).simulate('change', {preventDefault, currentTarget: {value: '20'}});
		wrapper.find('input').at(19).simulate('change', {preventDefault, currentTarget: {value: '150000'}});
		wrapper.find('textarea').at(0).simulate('change', {preventDefault, currentTarget: {value: 'una nota'}});
		wrapper.find('input').at(20).simulate('change', {preventDefault, currentTarget: {value: 1}});
		wrapper.find('input').at(21).simulate('change', {preventDefault, currentTarget: {value: 1}});
		wrapper.find('input').at(22).simulate('change', {preventDefault, currentTarget: {value: 2}});

		expect(wrapper.state().product).toEqual({
			quotation_id: '',
        name: '',
        type: '',
        processor: 'I7',
        ram: '4GB',
        hdd: '1TB',
        burner: 'quemador lg',
        network_card: '100/1000',
        battery: '3500mghz',
        monitor: '22 pulgadas',
        keyboard: 'español',
        os: 'windows 10',
        office: 'office 2010',
        antivirus: 'node302',
        additional_1: 'adicional random',
        additional_2: 'adicional random',
        additional_3: 'adicional random',
        additional_4: 'adicional random',
        additional_5: 'adicional random',
        additional_6: 'adicional random',
        lapse: '3',
        period: '',
        quantity: '20',
        price: '150000',
        total: 9000000,
        show: 1,
        iva: 1,
        note: 'una nota',
        spaces: 2,
		});
	})


})
