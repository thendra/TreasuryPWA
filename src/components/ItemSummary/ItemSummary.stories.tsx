import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import ItemSummaryComp from "./ItemSummary";

export default {
  title: "ItemSummary",
  component: ItemSummaryComp,
  decorators: [withKnobs],
};

export const ItemSummary = () => {
  const props = {
    id: "item-id",
    title: "item title",
    description: "item title",
    imageUrl: "test",
    onRemove: () => console.log("removed"),
  };
  return <ItemSummaryComp {...props} />;
};
