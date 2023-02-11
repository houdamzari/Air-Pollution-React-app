import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { Container } from "../components";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

describe("Test Container Component", () => {
  test("Container component should match with snapshot", () => {
    const container = renderer
      .create(
        <BrowserRouter>
          <Container />
        </BrowserRouter>
      )
      .toJSON();

    expect(container).toMatchSnapshot();
  });
});
