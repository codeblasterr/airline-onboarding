const initialVals = {
  flightName: '',
  passengers: []
};

const passengersReducer = (state = initialVals, action) => {
  switch (action.type) {
    case "PASSENGER_LIST":
      return {
        ...action.payLoad
      };
    default:
      return state;
  }
};

export default passengersReducer;
