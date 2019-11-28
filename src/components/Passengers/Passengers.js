import React from 'react';
import Passenger from './Passenger/Passenger';

import './Passengers.scss'

const passengers = (props) => {
    console.log("Props",props)
    let passengerList = [];
    if(props.checkIn) {
        passengerList = [...props.passengers];
    } else {
        passengerList = props.passengers.filter(passenger => passenger.checkedIn === true);
    }
    console.log("passengerList", passengerList);
    let passengers = [];
    if(passengerList.length)
        passengers = passengerList.map(passenger =>< Passenger {...props} checkIn={props.checkIn} key={passenger.id} passenger={{...passenger}} flightNo={props.flightNo}/> )
    else
        passengers = <div>No passengers available in the list to display.</div>
    return (
        <div className="pasngr-list-cont">
            {passengers}
        </div>
    );
}

export default passengers;