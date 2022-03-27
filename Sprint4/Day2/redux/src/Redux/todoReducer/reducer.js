import { ADD_TODO,DELETE_TODO } from "./action"
const initialstore={
    todo: []
}
export const reducer = (store = initialstore, {type, payload}) => {
    // console.log('payload: ', payload);
    switch(type){
        case 'ADD_TODO':
            return {
                ...store, todo: payload }
        case 'DELETE_TODO': 
            return {
                ...store, todo: store.todo.filter(todo => todo.id !== payload)
            }
        default:
            return store;
    }
}