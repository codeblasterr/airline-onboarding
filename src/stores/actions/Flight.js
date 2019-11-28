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