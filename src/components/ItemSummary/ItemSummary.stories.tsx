import React from "react";
import { Story, Meta } from "@storybook/react";
import ItemSummary, { IItemSummary } from "./ItemSummary";

export default {
  title: "ItemSummary",
  component: ItemSummary,
} as Meta;

const Template: Story<IItemSummary> = ({ ...args }) => (
  <ItemSummary {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  id: "1",
  title: "A good boy",
  image_url:
    "https://newtownsquarevet.com/wp-content/uploads/2013/12/Dog-smiling.jpg",
};
