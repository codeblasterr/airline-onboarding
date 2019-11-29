import { mockData } from "../../tools/mockData";

const getFlight = flightNo => {
    let flightInfo = mockData.flightInfo || [];
    let flight = flightInfo.filter(
      flight => flight.number === parseInt(flightNo)
    );
    return flight && flight[0] ? flight[0] : {};
};

const getFlightIndex = flightNo => {
    let flightInfo = mockData.flightInfo || [];
    for(let index = 0; index < flightInfo.length; index++) {
        if(flightInfo[index].number === parseInt(flightNo))
            return index;
    }
}

const getPassengerIndex = (flightNo, passengerId) => {
    let flightInfo = mockData.flightInfo || [];
    let flight = flightInfo[getFlightIndex(flightNo)];
    let passengers = flight.passengerInfo || [];
    for(let index = 0; index < passengers.length; index++) {
        if(parseInt(passengerId) === passengers[index].id)
            return index;
    }
}

const updatePassengerData = (flightId, passengerId, value) => {
    let flightIndex = getFlightIndex(flightId);
    let passengerIndex = getPassengerIndex(flightId, passengerId);
    let passenger = mockData.flightInfo[flightIndex].passengerInfo[passengerIndex];
    passenger.name = value.name;
    passenger.seatNo = value.seatNo;
    passenger.address = value.address;
    passenger.passport = value.passportNo;
    passenger.ancilaryServices = value.ancilaryServices;
    passenger.specialMeals = value.specialMeals;
    alert('Passenger information updated');
}

export const updatePassenger = (flightId, passengerId, values) => {
    updatePassengerData(flightId, passengerId, values);
    let info = getFlightWithPassenger(flightId, passengerId);
    return {
        type: "UPDATE_PASSENGER",
        payLoad: {...info}
    }
}


export const flight = (flightNo) => {
    let flight = getFlight(flightNo);
    return {
        type: "PASSENGER_LIST",
        payLoad: {
            flightName: flight.name,
            passengers: flight.passengerInfo
        }
    }
}

export const getFlightWithPassenger = (flightId, passengerId) => {
    let flight = mockData.flightInfo.filter(flight => flight.number === parseInt(flightId));
    let passenger = flight[0].passengerInfo.filter(passenger => passenger.id === parseInt(passengerId));
    return {
        ...flight[0],
        passengerInfo: [...passenger]
    }
}

export const setFlightWithPassenger = (flightId, passengerId) => {
    let info = getFlightWithPassenger(flightId, passengerId);
    return {
        type: "SET_FLIGHT_WITH_PASSENGER",
        payLoad: {...info}
    }
}