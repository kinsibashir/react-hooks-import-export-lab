import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import NavBar from "../components/NavBar";

test("NavBar is exported as a default export", () => {
  try {
    expect(() => render(<NavBar />)).not.toThrow();
  } catch (e) {
    throw new Error("Make sure to export NavBar as a default export!");
  }
});