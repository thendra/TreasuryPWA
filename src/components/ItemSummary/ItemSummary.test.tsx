import React from "react";
import { render } from "@testing-library/react";
import ItemSummary from "./ItemSummary";

describe("ItemSummary Component", () => {
  describe("Renders ItemSummary Element", () => {
    const props = {
      id: "item-id",
      title: "item title",
      description: "item title",
      imageUrl: "test",
      onRemove: () => console.log("removed"),
    };

    it("should render the component", () => {
      const { container } = render(<ItemSummary {...props} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
