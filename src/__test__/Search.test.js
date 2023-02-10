import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Search from "../components/Search/Search";
import { searchCity } from "../redux/slices/citiesSlice";
import '@testing-library/jest-dom/extend-expect';
const mockStore = configureStore([]);

describe("Search component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  it("dispatches the searchCity action with an empty string when mounted", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    expect(store.getActions()).toEqual([searchCity("")]);
  });

  it("dispatches the searchCity action with the value of the input when the input changes", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    const input = getByTestId("search-input");
    fireEvent.change(input, { target: { value: "Paris" } });
    expect(store.getActions()).toEqual([searchCity(""), searchCity("Paris")]);
  });

  it("renders an input and an image", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    const input = getByTestId("search-input");
    const img = getByTestId("search-icon");
    expect(input).toBeInTheDocument();
    expect(img).toBeInTheDocument();
  });
});
