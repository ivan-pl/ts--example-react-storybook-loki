import { SupportedComponents } from "../types/supportedComponents";

const supportedComponents = [
  "Details",
  "Heading",
  "HorizontalLine",
  "Image",
  "Paragraph",
];

const parsePropRegex = /(\w+?)="(.+?)";/g;

function isSupported(
  componentName: string
): componentName is SupportedComponents {
  return supportedComponents.includes(componentName);
}

export type ComponentInfo = {
  componentName: typeof supportedComponents[number];
  props: { [P: string]: string };
} | null;

// takes a command like `Details | content="some content"; title="some title";`
export default function parseCommand(command: string): ComponentInfo {
  const [componentName, propString = ""] = command.split(" | ");
  if (isSupported(componentName)) {
    const result: ComponentInfo = { componentName, props: {} };
    for (const [, prop, val] of propString.matchAll(parsePropRegex)) {
      result.props[prop] = val;
    }
    return result;
  }

  return null;
}
