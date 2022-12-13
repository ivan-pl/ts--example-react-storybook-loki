import React from "react";
import { render, screen } from "@testing-library/react";

import { Paragraph } from "./Paragraph";
import { Styles } from "./types";
import "./Paragraph.scss";

const defaultTemplate = /^Lorem/;

describe("Paragraph", () => {
  it("shows default Paragraph", () => {
    render(<Paragraph />);
    expect(screen.getByText(defaultTemplate)).toBeInTheDocument();
  });

  it("supports children", () => {
    const children = "Text<span>decorated</span>";
    render(<Paragraph>{children}</Paragraph>);
    expect(screen.getByText(children)).toBeInTheDocument();
  });

  it("supports choosing styles", () => {
    const { rerender } = render(<Paragraph />);
    expect(
      screen.getByText(defaultTemplate).classList.contains(Styles.Regular)
    ).toBeTruthy();

    rerender(<Paragraph fontStyle={Styles.Bold} />);
    expect(
      screen.getByText(defaultTemplate).classList.contains(Styles.Bold)
    ).toBeTruthy();

    screen.debug();

    rerender(<Paragraph fontStyle={Styles.Quote} />);
    expect(
      screen.getByText(defaultTemplate).classList.contains(Styles.Quote)
    ).toBeTruthy();
  });
});
