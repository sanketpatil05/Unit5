import {createStore,combineReducers} from 'redux';
import {reducer} from './todoReducer/reducer';
import { login_reducer } from './authReducer/authReducers';

const rooReducer = combineReducers({
    todo : reducer,
    login : login_reducer
});
export const store = createStore(rooReducer);
console.log('store: ', store.getState());

