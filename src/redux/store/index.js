import { configureStore, combineReducers } from "@reduxjs/toolkit";
import mainReducer from "../reducers/mainReducer";
import jobsReducer from "../reducers/jobsReducer";

const combinedReducer = combineReducers({
  favourites: mainReducer,
  search: jobsReducer,
});

const store = configureStore({
  reducer: combinedReducer,
});

export default store;
