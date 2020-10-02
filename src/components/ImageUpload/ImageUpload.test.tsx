import React from "react";
import { render } from "@testing-library/react";
import ImageUpload from "./ImageUpload";

describe("ImageUpload Component", () => {
  const mockUpload = jest.fn();
  describe("Renders ImageUpload Element", () => {
    it("should render the component", () => {
      const { container } = render(<ImageUpload onUpload={mockUpload} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
