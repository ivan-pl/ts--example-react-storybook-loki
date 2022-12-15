import React from "react";
import { ComponentInfo, SupportedComponents } from "./types";
import Details from "../components/Details";
import Heading from "../components/Heading";
import HorizontalLine from "../components/HorizontalLine";
import Image from "../components/Image";
import Paragraph from "../components/Paragraph";

export default function createComponent({
  componentName,
  props,
}: ComponentInfo): React.ReactElement | null {
  switch (componentName) {
    case "Details":
      return <Details {...props} />;
    case "Heading":
      return <Heading {...props} />;
    case "HorizontalLine":
      return <HorizontalLine {...props} />;
    case "Image":
      return <Image {...props} />;
    case "Paragraph":
      return <Paragraph {...props} />;
    default:
      return null;
  }
}
