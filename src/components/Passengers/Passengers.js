import React from 'react';
import Passenger from './Passenger/Passenger';

import './Passengers.scss'

const passengers = (props) => {
    let passengers = props.passengers.map(passenger => <Passenger key={passenger.id} passenger={{...passenger}} />)
    return (
        <div className="pasngr-list-cont">
            {passengers}
        </div>
    );
}

export default passengers;