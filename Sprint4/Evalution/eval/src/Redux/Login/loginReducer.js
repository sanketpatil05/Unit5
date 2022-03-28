import { LOGIN } from "./action";
const initialState = { user: JSON.parse(localStorage.getItem("userLoginDetails"))||null };

export const loginReducer = (store = initialState, { type, payload }) => {
    switch (type) {
        // add your login reducer functionalities here
     case LOGIN:
         return {...store, user: payload}
         default: return store
    }
}