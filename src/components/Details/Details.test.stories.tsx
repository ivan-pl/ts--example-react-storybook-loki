import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Details, Props } from "./Details";

export default {
  title: "Details",
  component: Details,
} as ComponentMeta<typeof Details>;

const Template: ComponentStory<typeof Details> = (args) => (
  <Details {...args} />
);

export const Default = Template.bind({});
Default.args = {
  content: "Lorem ipsum, dolor sit consectetur.",
};
