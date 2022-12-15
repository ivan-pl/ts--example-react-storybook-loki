import { supportedComponents } from "./variables";

export type SupportedComponents = typeof supportedComponents[number];

export interface ComponentInfo {
  componentName: SupportedComponents;
  props: { [P: string]: string };
}
