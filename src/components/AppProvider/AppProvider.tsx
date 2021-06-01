import React, { useEffect, useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  split,
  HttpLink,
  TypePolicies,
} from "@apollo/client";
import { useAuth0 } from "@auth0/auth0-react";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/client/link/ws";
import { makeVar } from "@apollo/client";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./Theme";

export const userInfo = makeVar<{
  user: any;
  isAuthenticated: boolean;
}>({
  user: "",
  isAuthenticated: false,
});

export const typePolicies: TypePolicies = {
  Query: {
    fields: {
      userId: {
        read() {
          return userInfo().user?.sub || "";
        },
      },
    },
  },
};

interface IAppProvider {
  children: React.ReactNode | React.ReactNode[] | null;
}

const AppProvider = ({ children }: IAppProvider) => {
  const { getAccessTokenSilently, user, isAuthenticated } = useAuth0();
  const [accessToken, setAccessToken] = useState("initialState");

  useEffect(() => {
    userInfo({
      user: user,
      isAuthenticated: isAuthenticated,
    });
  }, [user, isAuthenticated]);

  useEffect(() => {
    const getAccess = async () => {
      const domain = "dev-axkwk09j.eu.auth0.com";
      try {
        const tokenParam = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user",
        });
        setAccessToken(tokenParam);
      } catch (e) {
        console.log(e.message);
      }
    };
    getAccess();
  }, [getAccessTokenSilently]);

  const httpLink = new HttpLink({
    uri: "https://cheerful-possum-15.hasura.app/v1/graphql",
    headers: {
      authorization: `Bearer ${accessToken}`,
      "x-hasura-admin-secret": "hendra",
      "x-hasura-role": "user",
      "x-hasura-user-id": `${userInfo().user?.sub}`,
    },
  });

  const wsLink = new WebSocketLink({
    uri: "wss://cheerful-possum-15.hasura.app/v1/graphql",
    options: {
      reconnect: true,
      lazy: true,
      connectionParams: {
        headers: {
          authorization: `Bearer ${accessToken}`,
          "x-hasura-admin-secret": "hendra",
          "x-hasura-role": "user",
          "x-hasura-user-id": `${userInfo().user?.sub}`,
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

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ApolloProvider>
  );
};

export default AppProvider;
