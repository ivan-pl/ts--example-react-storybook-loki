import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Paragraph } from "./Paragraph";
import { Styles } from "./types";

export default {
  title: "Paragraph",
  component: Paragraph,
  argTypes: {
    text: {
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
  text: "Very wise quote",
};

export const Bold = Template.bind({});
Bold.args = {
  fontStyle: Styles.Bold,
  text: "Bold text",
};
