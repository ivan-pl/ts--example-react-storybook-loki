import React, { FC, ReactElement } from "react";

import { ComponentInfo } from "./types";
import createComponent from "./createComponent";
import Details from "../components/Details";
import Paragraph from "../components/Paragraph";
import Heading from "../components/Heading";
import HorizontalLine from "../components/HorizontalLine";
import Image from "../components/Image";

function testComponent(
  el: ReactElement,
  fc: FC,
  props: { [k: string]: string }
): void {
  expect(el?.type).toBe(fc);
  expect(el?.props).toEqual(expect.objectContaining(props));
}

describe("createComponent", () => {
  it("returns Details", () => {
    const componentInfo = {
      componentName: "Details",
      props: { title: "some title" },
    } as ComponentInfo;
    const el = createComponent(componentInfo)!;
    testComponent(el, Details, componentInfo.props);
  });

  it("returns Heading", () => {
    const componentInfo = {
      componentName: "Heading",
      props: { title: "some title" },
    } as ComponentInfo;
    const el = createComponent(componentInfo)!;
    testComponent(el, Heading, componentInfo.props);
  });

  it("returns Paragraph", () => {
    const componentInfo = {
      componentName: "Paragraph",
      props: { text: "some text" },
    } as ComponentInfo;
    const el = createComponent(componentInfo)!;
    testComponent(el, Paragraph, componentInfo.props);
  });

  it("returns HorizontalLine", () => {
    const componentInfo = {
      componentName: "HorizontalLine",
      props: {},
    } as ComponentInfo;
    const el = createComponent(componentInfo)!;
    testComponent(el, HorizontalLine, componentInfo.props);
  });

  it("returns Image", () => {
    const componentInfo = {
      componentName: "Image",
      props: {},
    } as ComponentInfo;
    const el = createComponent(componentInfo)!;
    testComponent(el, Image, componentInfo.props);
  });

  it("returns null", () => {
    const componentInfo = {
      componentName: "unsupportedComponent" as ComponentInfo["componentName"],
      props: {},
    };
    const el = createComponent(componentInfo)!;
    expect(el).toBeNull();
  });
});
