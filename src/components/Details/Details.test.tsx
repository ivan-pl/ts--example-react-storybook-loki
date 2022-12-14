import React from "react";
import { screen, render } from "@testing-library/react";

import { Details } from "./Details";

describe("Details", () => {
  it("supports props: [title, content]", () => {
    const title = "Title";
    const content = "Lorem ipsum";
    render(<Details title={title} content={content} />);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(content)).toBeInTheDocument();
  });

  it("supports default title", () => {
    const defaultTitle = "Details";
    const content = "Lorem ipsum";
    render(<Details content={content} />);

    expect(screen.getByText(defaultTitle)).toBeInTheDocument();
    expect(screen.getByText(content)).toBeInTheDocument();
  });
});
