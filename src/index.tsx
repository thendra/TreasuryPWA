import React from "react";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  split,
  HttpLink,
  TypePolicies,
} from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/client/link/ws";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { accessToken } from "./App";

export const typePolicies: TypePolicies = {
  Query: {
    fields: {
      accessToken: {
        read() {
          return accessToken();
        },
      },
    },
  },
};
console.log(accessToken());
const httpLink = new HttpLink({
  uri: "https://cheerful-possum-15.hasura.app/v1/graphql",
  headers: {
    authorization: `Bearer ${accessToken()}`,
    "x-hasura-admin-secret": "hendra",
    "x-hasura-role": "user",
    // "x-hasura-user-id": "10",
  },
});

const wsLink = new WebSocketLink({
  uri: "ws://cheerful-possum-15.hasura.app/v1/graphql",
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        authorization: `Bearer ${accessToken()}`,
        "x-hasura-admin-secret": "hendra",
        "x-hasura-role": "user",
        // "x-hasura-user-id": "10",
      },
    },
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  uri: "https://cheerful-possum-15.hasura.app/v1/graphql",
  link: splitLink,
  cache: new InMemoryCache({ typePolicies }),
});

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-mipf43mo.eu.auth0.com"
      clientId="cAjFZxpGeOuCMXFeNYqT87oQuLL2UgEI"
      redirectUri="http://localhost:3000/"
      audience="https://dev-mipf43mo.eu.auth0.com/api/v2/"
      scope="read:current_user update:current_user_metadata"
    >
      <ApolloProvider client={client}>
        <Router>
          <App />
        </Router>
      </ApolloProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
