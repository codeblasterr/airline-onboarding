const initialState = {
    flights : []
}

const flightsReucer = (state = initialState, action) => {
    switch (action.type) {
        case "FLIGHT_LIST":
            return {
                flights: action.payLoad
            }
        default:
            return state;
    }
}

export default flightsReucer;