const initialVals = {
  flightName: '',
  passengers: [],
  flightWithPassenger : {}
};

const passengersReducer = (state = initialVals, action) => {
  switch (action.type) {
    case "PASSENGER_LIST":
      return {
        ...state,
        ...action.payLoad
      };
    case "SET_FLIGHT_WITH_PASSENGER":
        return {
          ...state,
          flightWithPassenger : {...action.payLoad}
        }
    case "UPDATE_PASSENGER":
      return {
        ...state,
        flightWithPassenger : {...action.payLoad}
      }
    default:
      return state;
  }
};

export default passengersReducer;
