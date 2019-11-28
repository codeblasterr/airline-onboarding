import { mockData } from "../../tools/mockData";

const getPassengers = flightNo => {
    let flightInfo = mockData.flightInfo || [];
    let flight = flightInfo.filter(
      flight => flight.number === parseInt(flightNo)
    );
    return flight && flight[0].passengerInfo ? flight[0].passengerInfo : [];
};

export const passengerList = (flightNo) => {
    let list = getPassengers(flightNo);
    return {
        type: "PASSENGER_LIST",
        payLoad: [...list]
    }
}