import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Image, Props } from "./Image";
import { Float } from "./types";
import TestImage from "./assets/test-img.jpg";

export default {
  title: "Image",
  component: Image,
  argTypes: {
    float: {
      defaultValue: Float.None,
    },
  },
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Default = Template.bind({});

export const Customized = Template.bind({});
Customized.args = {
  src: TestImage,
  alt: "A close up of a plant with orange flowers",
  float: Float.Left,
};
