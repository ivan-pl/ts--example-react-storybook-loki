import React from "react";
import { render, screen } from "@testing-library/react";

import App from "./App";

const spyPrompt = jest.spyOn(window, "prompt");

describe("App", () => {
  test("renders App component", () => {
    render(<App />);
    expect(screen.getByText("Instruction")).toBeInTheDocument();
    expect(spyPrompt).toHaveBeenCalled();
  });
});
