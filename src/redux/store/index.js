import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import sidebarReducer from "../reducers/sidebarReducer";

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
