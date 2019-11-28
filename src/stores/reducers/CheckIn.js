import { mockData } from "./../../tools/mockData";

const initialVals = {
  passengers: []
};

const getPassengers = flightNo => {
  let flightInfo = mockData.flightInfo || [];
  let flight = flightInfo.filter(
    flight => flight.number === parseInt(flightNo)
  );
  return flight && flight[0].passengerInfo ? flight[0].passengerInfo : [];
};

const passengersReducer = (state = initialVals, action) => {
  switch (action.type) {
    case "PASSENGER_LIST":
      return {
        passengers: [...action.payLoad]
      };
      break;
  }
  return state;
};

export default passengersReducer;
