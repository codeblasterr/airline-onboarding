export const doLogin = () => {
    let isSignedIn = false;
    return {
        type: "SIGNEDIN",
        payLoad: isSignedIn
    }
}