import React, { useState } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import ImageUploadComp from "./ImageUpload";

export default {
  title: "ImageUpload",
  component: ImageUploadComp,
  decorators: [withKnobs],
};

export const ImageUpload = () => {
  const onUpload = (imgUrl: string) => console.log(imgUrl);
  const [, setImageLoading] = useState(false);
  return (
    <ImageUploadComp
      setImageLoading={setImageLoading}
      onUpload={onUpload}
      label="Image upload"
    />
  );
};
