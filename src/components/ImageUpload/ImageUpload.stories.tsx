import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import ImageUploadComp from "./ImageUpload";

export default {
  title: "ImageUpload",
  component: ImageUploadComp,
  decorators: [withKnobs],
};

export const ImageUpload = () => (
  <ImageUploadComp label="Drag and drop files to upload them to CLOUDINARY" />
);
