import React from "react";
import { screen, render } from "@testing-library/react";

import { Image } from "./Image";
import DefaultImage from "./assets/no-image.png";
import { Float } from "./types";

describe("Image", () => {
  it("supports default props", () => {
    render(<Image />);

    const img = screen.getByAltText("Empty description");
    expect(img).toBeInTheDocument();
    expect(img.getAttribute("src")).toBe(DefaultImage);
  });

  it("supports float", () => {
    const { rerender } = render(<Image float={Float.Left} />);
    expect(
      screen.getByAltText("Empty description").classList.contains(Float.Left)
    );

    rerender(<Image float={Float.Right} />);
    expect(
      screen.getByAltText("Empty description").classList.contains(Float.Right)
    );
  });

  it("supports src and alt", () => {
    const src = "someURL";
    const alt = "Some description";
    render(<Image src={src} alt={alt} />);

    expect(screen.getByAltText(alt).getAttribute("src")).toBe(src);
  });
});
