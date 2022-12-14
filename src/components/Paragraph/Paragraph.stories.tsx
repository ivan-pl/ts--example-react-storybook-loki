import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Paragraph } from "./Paragraph";
import { Styles } from "./types";

export default {
  title: "Paragraph",
  component: Paragraph,
  argTypes: {
    children: {
      type: {
        name: "string",
      },
    },
  },
} as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = (args) => (
  <Paragraph {...args} />
);

export const Default = Template.bind({});

export const Quote = Template.bind({});
Quote.args = {
  fontStyle: Styles.Quote,
  children: "Very wise quote",
};

export const Bold = Template.bind({});
Bold.args = {
  fontStyle: Styles.Bold,
  children: "Bold text",
};
