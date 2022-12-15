import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Instruction } from "./Instruction";

export default {
  title: "Instruction",
  component: Instruction,
} as ComponentMeta<typeof Instruction>;

const Template: ComponentStory<typeof Instruction> = (args) => (
  <Instruction {...args} />
);

export const Primary: ComponentStory<typeof Instruction> = () => (
  <Instruction />
);
