import React from "react";
import { render, screen } from "@testing-library/react";

import App from "./App";

jest.useFakeTimers();

const sleep = (delay: number = 5) =>
  new Promise((resolve) => setTimeout(resolve, delay));

const spyPrompt = jest.spyOn(window, "prompt").mockReturnValue("");

describe("App", () => {
  it("renders Instruction and asks input a component", async () => {
    render(<App />);
    expect(screen.getByText("Instruction")).toBeInTheDocument();
    jest.runAllTimers();
    expect(spyPrompt).toHaveBeenCalled();
  });

  it("renders Paragraph and Details", async () => {
    const paragraphText = "A long paragraph";
    const detailsTitle = "Some title";
    spyPrompt
      .mockReturnValueOnce(`Paragraph | text="${paragraphText}";`)
      .mockReturnValueOnce(`Details | title="${detailsTitle}";`);
    render(<App />);
    jest.runAllTimers();

    expect(await screen.findByText(detailsTitle)).toBeInTheDocument();
    expect(await screen.findByText(paragraphText)).toBeInTheDocument();
  });
});
