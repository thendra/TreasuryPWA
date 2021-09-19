import { Story, Meta } from "@storybook/react";
import React from "react";
import { GET_ITEMS } from "../../graphQl/queries";
import Items from "./Items";

export default {
  component: Items,
  title: "Pages/Items",
} as Meta;

const mocks = [
  {
    request: {
      query: GET_ITEMS,
    },
    result: {
      data: {
        userId: "123",
        Items: [
          {
            id: "test",
            title: "A Smiling Dog",
            description: "This is a smiling dog, isn't he happy",
            image_url:
              "https://newtownsquarevet.com/wp-content/uploads/2013/12/Dog-smiling.jpg",
            created_by: "test",
            is_public: true,
          },
          {
            id: "test",
            title: "A Smiling Dog",
            description: "This is a smiling dog, isn't he happy",
            image_url:
              "https://newtownsquarevet.com/wp-content/uploads/2013/12/Dog-smiling.jpg",
            created_by: "test",
            is_public: true,
          },
          {
            id: "test",
            title: "A Smiling Dog",
            description: "This is a smiling dog, isn't he happy",
            image_url:
              "https://newtownsquarevet.com/wp-content/uploads/2013/12/Dog-smiling.jpg",
            created_by: "test",
            is_public: true,
          },
          {
            id: "test",
            title: "A Smiling Dog",
            description: "This is a smiling dog, isn't he happy",
            image_url:
              "https://newtownsquarevet.com/wp-content/uploads/2013/12/Dog-smiling.jpg",
            created_by: "test",
            is_public: true,
          },
          {
            id: "test",
            title: "A Smiling Dog",
            description: "This is a smiling dog, isn't he happy",
            image_url:
              "https://newtownsquarevet.com/wp-content/uploads/2013/12/Dog-smiling.jpg",
            created_by: "test",
            is_public: false,
          },
          {
            id: "test",
            title: "A Smiling Dog",
            description: "This is a smiling dog, isn't he happy",
            image_url:
              "https://newtownsquarevet.com/wp-content/uploads/2013/12/Dog-smiling.jpg",
            created_by: "test",
            is_public: false,
          },
        ],
      },
    },
  },
];

const PageTemplate: Story = () => <Items />;

export const MockedSuccess = PageTemplate.bind({});
MockedSuccess.parameters = {
  apolloClient: {
    // do not put MockedProvider here, you can, but its preferred to do it in preview.js
    mocks: mocks,
  },
  backgrounds: {
    default: "dark",
  },
};
