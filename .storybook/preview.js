import React from "react";
import { MockedProvider } from "@apollo/client/testing";
import { BrowserRouter as Router } from "react-router-dom";
import AppProvider from "../src/components/AppProvider";
import StoryBookProvider from "../src/components/AppProvider/StoryBookProvider";

export const decorators = [
  (Story) => (
    <StoryBookProvider>
      <AppProvider>
        <Router>{Story()}</Router>
      </AppProvider>
    </StoryBookProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  apolloClient: {
    MockedProvider,
    // any props you want to pass to MockedProvider on every story
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
