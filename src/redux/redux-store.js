import {createStore, combineReducers} from 'redux';
import todoReducer from "./todoReducer";


const store = createStore(todoReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;