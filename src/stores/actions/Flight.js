import { mockData } from "../../tools/mockData";

const getValue = (value, defaultValue) => {
  if (typeof value !== "undefined" && value !== null && value !== "")
    return value;
  return defaultValue;
};

const getFlight = flightNo => {
  let flightInfo = mockData.flightInfo || [];
  let flight = flightInfo.filter(
    flight => flight.number === parseInt(flightNo)
  );
  return flight && flight[0] ? flight[0] : {};
};

const getFlightIndex = flightNo => {
  let flightInfo = mockData.flightInfo || [];
  for (let index = 0; index < flightInfo.length; index++) {
    if (flightInfo[index].number === parseInt(flightNo)) return index;
  }
};

const getPassengerIndex = (flightNo, passengerId) => {
  let flightInfo = mockData.flightInfo || [];
  let flight = flightInfo[getFlightIndex(flightNo)];
  let passengers = flight.passengerInfo || [];
  for (let index = 0; index < passengers.length; index++) {
    if (parseInt(passengerId) === passengers[index].id) return index;
  }
};

const updatePassengerData = (flightId, passengerId, value) => {
  let flightIndex = getFlightIndex(flightId);
  let passengerIndex = getPassengerIndex(flightId, passengerId);
  let passenger =
    mockData.flightInfo[flightIndex].passengerInfo[passengerIndex];
  passenger.name = getValue(value.name, passenger.name);
  passenger.seatNo = getValue(value.seatNo, passenger.seatNo);
  passenger.address = getValue(value.address, passenger.address);
  passenger.passport = getValue(value.passportNo, passenger.passport);
  passenger.ancilaryServices = getValue(
    value.ancilaryServices,
    passenger.ancilaryServices
  );
  passenger.specialMeals = getValue(value.specialMeals, passenger.specialMeals);
  passenger.checkedIn = getValue(value.checkedIn, passenger.checkedIn);
  alert("Passenger information updated");
};

export const updatePassenger = (flightId, passengerId, values) => {
  updatePassengerData(flightId, passengerId, values);
  let info = getFlightWithPassenger(flightId, passengerId);
  return {
    type: "UPDATE_PASSENGER",
    payLoad: { ...info }
  };
};

export const flight = (flightNo, filterParam) => {
  let flight = getFlight(flightNo);
  let passengers = [];
  if (filterParam) {
    switch (filterParam) {
      case "checkedIn":
        passengers = flight.passengerInfo.filter(
          passenger => passenger.checkedIn === true
        );
        break;
      case "wheelChair":
        passengers = flight.passengerInfo.filter(
          passenger => passenger.requireWheelChair === true
        );
        break;
      case "withInfant":
        passengers = flight.passengerInfo.filter(
          passenger => passenger.withInfant === true
        );
        break;
      default:
        passengers = flight.passengerInfo;
        break;
    }
  }
  let passengerList = passengers.length ? passengers : flight.passengerInfo;
  let checkedInSeats = passengerList
    .filter(passenger => passenger.checkedIn)
    .map(passenger => passenger.seatNo);

  console.log("checkedInSeats: ", checkedInSeats);
  return {
    type: "PASSENGER_LIST",
    payLoad: {
      flightName: flight.name || "",
      flightNo: flight.number || "",
      passengers: flight.passengerInfo || passengers,
      checkedInSeats: checkedInSeats || []
    }
  };
};

export const getFlightWithPassenger = (flightId, passengerId) => {
  let flight = [];
  let passenger = [];
  if (flightId !== "undefined" || passengerId !== "undefined") {
    flight = mockData.flightInfo.filter(
      flight => flight.number === parseInt(flightId)
    );
    passenger = flight[0].passengerInfo.filter(
      passenger => passenger.id === parseInt(passengerId)
    );
  }
  return {
    ...flight[0],
    passengerInfo: [...passenger]
  };
};

export const setFlightWithPassenger = (flightId, passengerId) => {
  let info = getFlightWithPassenger(flightId, passengerId);
  return {
    type: "SET_FLIGHT_WITH_PASSENGER",
    payLoad: { ...info }
  };
};
