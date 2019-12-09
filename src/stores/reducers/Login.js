const initialVal = {
    isSignedIn: false
}

const authReducer = (state = initialVal, action) => {
    switch (action.type) {
        case "SIGNIN":
            return {
                isSignedIn: action.payLoad
            }
        default:
            return state;
    }
}

export default authReducer;
