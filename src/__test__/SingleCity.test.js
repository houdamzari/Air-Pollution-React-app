import "@testing-library/jest-dom";
import SingleCity from "../components/SingleCity/SingleCity";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

describe("Test SingleCity Component", () => {
  test("SingleCity component should match with snapshot", () => {
    const singleCity = renderer
      .create(
        <BrowserRouter>
          <SingleCity />
        </BrowserRouter>
      )
      .toJSON();

    expect(singleCity).toMatchSnapshot();
  });
});
