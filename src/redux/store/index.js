import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import sidebarReducer from "../reducers/sidebarReducer";
import getUSerReducer from "../reducers/getUserReducer";
import getExperienceReducer from "../reducers/getExperienceReducer";
import getPostReducer from "../reducers/getPostReducer";

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  userMe: getUSerReducer,
  experienceList: getExperienceReducer,
  getPost: getPostReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
