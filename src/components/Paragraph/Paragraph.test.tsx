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

    rerender(<Paragraph fontStyle={Styles.Quote} />);
    expect(
      screen.getByText(defaultTemplate).classList.contains(Styles.Quote)
    ).toBeTruthy();
  });

  it("supports text prop", () => {
    const text = "Some string";
    render(<Paragraph text={text} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it("ignores children if it has text prop", () => {
    const text = "Some text";
    const children = "Some children";
    render(<Paragraph text={text}></Paragraph>);
    expect(screen.getByText(text)).toBeInTheDocument();
    expect(screen.queryByText(children)).not.toBeInTheDocument();
  });
});
