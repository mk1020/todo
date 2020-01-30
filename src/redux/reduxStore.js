import { createStore, combineReducers } from "redux";
import { taskReducer } from "./todoReducer";

const reducers = combineReducers({
  taskReducer
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
