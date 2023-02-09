import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  cities: [],
  filteredCities: [],
  searchString: "",
};

export const fetchCities = createAsyncThunk(
  "cities/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://countries-cities.p.rapidapi.com/location/country/MA/city/list?population=50000",
        {
          headers: {
            "x-rapidapi-host": "countries-cities.p.rapidapi.com",
            "x-rapidapi-key":
              "3f7afd5698msh574723f283236d2p16ecb9jsnbe3356128779",
          },
        }
      );

      return response.data.cities;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const counterSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    searchCity: (state, action) => {
      const filteredCities = state.cities.filter((city) => {
        return city.name.toLowerCase().includes(action.payload.toLowerCase());
      });
      state.filteredCities = filteredCities;
      state.searchString = action.payload.toLowerCase;
    },
  },
  extraReducers: {
    [fetchCities.fulfilled]: (state, action) => {
      state.cities = action.payload;
    },
  },
});

export const { searchCity } = counterSlice.actions;

export default counterSlice.reducer;
