const initialVals = {
  passengers: []
};

const passengersReducer = (state = initialVals, action) => {
  switch (action.type) {
    case "PASSENGER_LIST":
      return {
        passengers: [...action.payLoad]
      };
    default:
      return state;
  }
};

export default passengersReducer;
