import { render, screen } from "@testing-library/react";

import App from "./App";

import { Provider } from "react-redux";
import store from "../redux/store";

describe("With React Testing Library", () => {
  it("App renders", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByText("Tickers")).not.toBeNull();
  });
});
