import { mockData } from "../../tools/mockData";

const getFlight = flightNo => {
    let flightInfo = mockData.flightInfo || [];
    let flight = flightInfo.filter(
      flight => flight.number === parseInt(flightNo)
    );
    return flight && flight[0] ? flight[0] : {};
};

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
    delete flight[0].passengerInfo;
    return {
        ...flight[0],
        passengerInfo: {...passenger[0]}
    }
}

export const setFlightWithPassenger = (flightId, passengerId) => {
    let info = getFlightWithPassenger(flightId, passengerId);
    return {
        type: "SET_FLIGHT_WITH_PASSENGER",
        payLoad: {...info}
    }
}