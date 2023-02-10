import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchAirPollution = createAsyncThunk(
  "airPollution/fetchData",
  async (location, { rejectWithValue }) => {
    const API_KEY = "42fec1b8283dcc0ac3af9ef98f341dc7";
    const { lat, lon } = location;
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      );

      return response.data.list[0].components;
    } catch (err) {
      return rejectWithValue(await err.response.data);
    }
  }
);

const initialState = {
  polutionData: [],
};

export const airpolutionSlice = createSlice({
  name: "polution",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAirPollution.fulfilled]: (state, action) => {
      state.polutionData = action.payload;
    },
  },
});

export default airpolutionSlice.reducer;
