export const LOGIN_USER = 'LOGIN_USER';

export const login_user = (user) => {
    return {
        type: LOGIN_USER,
        payload: user
    }
}