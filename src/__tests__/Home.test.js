import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Home from "../components/Home";

test("Home is exported as a default export", () => {
  try {
    expect(() => render(<Home />)).not.toThrow();
  } catch (e) {
    throw new Error("Make sure to export Home as a default export!");
  }
});
