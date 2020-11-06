import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import ItemDetailedComp from "./ItemDetailed";

export default {
  title: "ItemDetailed",
  component: ItemDetailedComp,
  decorators: [withKnobs],
};

export const ItemDetailed = () => <ItemDetailedComp />;
