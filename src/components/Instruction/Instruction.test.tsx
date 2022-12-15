import React from "react";
import { render, screen } from "@testing-library/react";

import { Instruction } from "./Instruction";

describe("Instruction", () => {
  it("Shows the Instruction", () => {
    render(<Instruction />);
    expect(screen.getByText("Synopsis")).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();
    expect(screen.getByText("Examples")).toBeInTheDocument();
  });
});
