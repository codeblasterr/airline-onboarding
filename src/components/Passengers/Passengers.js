import React from 'react';
import Passenger from './Passenger/Passenger'

const passengers = (props) => {
    let passengers = props.passengers.map(passenger => <Passenger passenger={{...passenger}} />)
    return passengers;
}

export default passengers;