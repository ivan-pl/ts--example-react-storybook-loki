import React from "react";
import { render, screen } from "@testing-library/react";

import { HorizontalLine } from "./HorizontalLine";
import { LineType } from "./types";

const getLine = () => screen.getByTestId("hr");

describe("HorizontalLine", () => {
  it("shows default line", () => {
    render(<HorizontalLine />);
    expect(getLine()).toBeInTheDocument();
  });

  it("supports lineType", () => {
    const { rerender } = render(<HorizontalLine />);
    expect(getLine().classList.contains(LineType.Solid)).toBeTruthy();

    rerender(<HorizontalLine lineType={LineType.Dashed} />);
    expect(getLine().classList.contains(LineType.Dashed)).toBeTruthy();

    rerender(<HorizontalLine lineType={LineType.Double} />);
    expect(getLine().classList.contains(LineType.Double)).toBeTruthy();
  });
});
