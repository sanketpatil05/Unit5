import { loginReducer } from "./Login/loginReducer";
import { combineReducers, createStore } from "redux";

const rootreducer = combineReducers({ 
    login:loginReducer
})
export const store = createStore(rootreducer); // add your reducers here

