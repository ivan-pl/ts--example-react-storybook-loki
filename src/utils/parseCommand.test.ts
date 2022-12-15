import parseCommand from "./parseCommand";

describe("parseCommand()", () => {
  it("ignores incorrect Components", () => {
    expect(parseCommand("Details23")).toBeNull();
    expect(parseCommand("Unsupported Component")).toBeNull();

    expect(parseCommand("Details")).toEqual({
      componentName: "Details",
      props: {},
    });

    expect(parseCommand("Image")).toEqual({
      componentName: "Image",
      props: {},
    });

    expect(parseCommand("HorizontalLine")).toEqual({
      componentName: "HorizontalLine",
      props: {},
    });
  });

  it("returns Details with props", () => {
    expect(
      parseCommand(`Details | title="Some title"; content="Some content";`)
    ).toEqual({
      componentName: "Details",
      props: { title: "Some title", content: "Some content" },
    });
  });

  it("returns Image with props", () => {
    expect(
      parseCommand(
        `Image | src="https://unsplash.com"; alt="Img description"; float="left-float";`
      )
    ).toEqual({
      componentName: "Image",
      props: {
        src: "https://unsplash.com",
        float: "left-float",
        alt: "Img description",
      },
    });
  });
});
