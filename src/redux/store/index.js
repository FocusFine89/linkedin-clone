import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import getUSerReducer from "../reducers/getUserReducer";
import getExperienceReducer from "../reducers/getExperienceReducer";
import createExperienceReducer from "../reducers/createExperienceReducer";

const rootReducer = combineReducers({
  userMe: getUSerReducer,
  experienceList: getExperienceReducer,
  createExperience: createExperienceReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
