import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import App from "./App";

export default {
  title: "App",
  component: App,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => <App {...args} />;

export const Primary = Template.bind({});
