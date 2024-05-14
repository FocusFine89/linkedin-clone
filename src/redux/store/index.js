import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import getUSerReducer from "../reducers/getUserReducer";
import getExperienceReducer from "../reducers/getExperienceReducer";

const rootReducer = combineReducers({
  userMe: getUSerReducer,
  experienceList: getExperienceReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
