import React from "react";
import { render } from "@testing-library/react";
import ImageUpload from "./ImageUpload";

describe("ImageUpload Component", () => {
  describe("Renders ImageUpload Element", () => {
    it("should render the component", () => {
      const { container } = render(
        <ImageUpload label="Drag and drop files to upload them to CLOUDINARY" />
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
