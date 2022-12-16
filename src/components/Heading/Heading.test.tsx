import React from "react";
import { render, screen } from "@testing-library/react";

import { Heading } from "./Heading";
import { Levels } from "./types";

describe("Heading", () => {
  it("shows default Heading", () => {
    render(<Heading />);
    const heading = screen.getByText("Heading");
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe("H1");
  });

  it("supports title", () => {
    const title = "New Title";
    render(<Heading title={title} />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it("supports levels", () => {
    const level = "3";
    render(<Heading level={level} />);
    expect(screen.getByText("Heading").tagName).toBe("H3");
  });
});
