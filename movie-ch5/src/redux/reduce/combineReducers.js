import { combineReducers } from "redux";

import allMoviesReducer from "./moviesReducer";
import favReducer from "./reduce";

export default combineReducers({
    allMovie:allMoviesReducer,
    favorit:favReducer
})
