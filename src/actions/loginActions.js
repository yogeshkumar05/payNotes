export const loginUser = (username, password) => ({
    type: 'LOGIN_USER',
    payload: {
        username, 
        password
    }
});