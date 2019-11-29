import React from 'react';
import Passengers from './Passengers';
import {shallow} from 'enzyme';

function renderPassengers (args) {
    const defaultProps = {
        passengers: [],
        checkIn: false,
        flightNo: ''
    };

    const props = {...defaultProps, ...args};
    return shallow(<Passengers {...props} />);
}

it('Renders empty message dom', () => {
    const wrapper = renderPassengers();
    expect(wrapper.find('div').length).toBe(2);
});

it('Renders empty message', () => {
    const wrapper = renderPassengers();
    expect(wrapper.find('.pasngr-list-cont div').text()).toEqual('No passengers available in the list to display.');
});