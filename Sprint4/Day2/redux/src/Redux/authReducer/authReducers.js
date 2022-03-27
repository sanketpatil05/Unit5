import { LOGIN_USER } from "./authActions";

const initState = {
    token : JSON.parse(localStorage.getItem('token')) || "",
}

export const login_reducer = (state=initState ,{type, payload}) => {
    switch(type){
        case LOGIN_USER:
            return {
                ...state,
                token: payload
            }
        default:
            return state;
    }
}