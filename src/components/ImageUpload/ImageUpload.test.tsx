import React, { useState } from "react";
import { render } from "@testing-library/react";
import ImageUpload from "./ImageUpload";

describe("ImageUpload Component", () => {
  const mockUpload = jest.fn();
  describe("Renders ImageUpload Element", () => {
    it("should render the component", () => {
      const [, setImageLoading] = useState(false);
      const { container } = render(
        <ImageUpload
          setImageLoading={setImageLoading}
          label="test upload"
          onUpload={mockUpload}
        />
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
