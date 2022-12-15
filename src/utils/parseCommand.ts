import { SupportedComponents } from "../types/supportedComponents";
import { supportedComponents } from "./variables";
import { ComponentInfo } from "./types";

const parsePropRegex = /(\w+?)="(.+?)";/g;

function isSupported(
  componentName: string
): componentName is SupportedComponents {
  return (supportedComponents as unknown as string[]).includes(componentName);
}

// takes a command like `Details | content="some content"; title="some title";`
export default function parseCommand(command: string): ComponentInfo | null {
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
