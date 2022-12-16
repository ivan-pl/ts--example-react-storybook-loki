import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { HorizontalLine, Props } from "./HorizontalLine";
import { LineType } from "./types";

export default {
  title: "HorizontalLine",
  component: HorizontalLine,
} as ComponentMeta<typeof HorizontalLine>;

const Template: ComponentStory<typeof HorizontalLine> = (args) => (
  <HorizontalLine {...args} />
);

export const Default = Template.bind({});

export const Double = Template.bind({});
Double.args = {
  lineType: LineType.Double,
};

export const Dashed = Template.bind({});
Dashed.args = {
  lineType: LineType.Dashed,
};
