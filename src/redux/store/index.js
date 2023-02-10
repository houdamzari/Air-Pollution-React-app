import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "../slices/citiesSlice";
import polutionReducer from "../slices/airPolutionSlice";
export const store = configureStore({
  reducer: {
    cities: citiesReducer,
    airpolution: polutionReducer,
  },
});
