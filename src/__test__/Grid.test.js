import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../redux/store/index";
import Grid from "../components/Grid/Grid";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Test Grid Component", () => {
  test("Grid component should match with snapshot", () => {
    const grid = renderer
      .create(
        <BrowserRouter>
          <Grid />
        </BrowserRouter>
      )
      .toJSON();

    expect(grid).toMatchSnapshot();
  });

});
