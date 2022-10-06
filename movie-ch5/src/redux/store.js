import { legacy_createStore as createStore } from "redux";
import combineReducers from './reduce/combineReducers'
// import favReducer from "./reduce/reduce";

const store = createStore(combineReducers);

export default store;