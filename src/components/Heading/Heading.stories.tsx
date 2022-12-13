import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Heading, Props } from "./Heading";

export default {
  title: "Heading",
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Default = Template.bind({});
