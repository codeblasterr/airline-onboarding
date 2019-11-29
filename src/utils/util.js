export const authCheck = (isSignedIn, history) => {
    if(!isSignedIn) {
        history.push('/login');
    }
}