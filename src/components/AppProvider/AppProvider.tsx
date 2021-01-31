import React, { useState } from "react";
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

export const userInfo = makeVar<{
  user: any;
  isAuthenticated: boolean;
  userId: string;
}>({
  user: "",
  isAuthenticated: false,
  userId: "",
});

export const typePolicies: TypePolicies = {
  Query: {
    fields: {
      userInfo: {
        read() {
          return userInfo();
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
  const [accessToken, setAccessToken] = useState("");
  const getAccess = async () => {
    const domain = "dev-mipf43mo.eu.auth0.com";

    try {
      const token = await getAccessTokenSilently({
        audience: `https://${domain}/api/v2/`,
        scope: "read:current_user",
      });

      setAccessToken(token);
      userInfo({ user, isAuthenticated, userId: user?.sub });
    } catch (e) {
      console.log(e.message);
    }
  };
  getAccess();

  const httpLink = new HttpLink({
    uri: "https://cheerful-possum-15.hasura.app/v1/graphql",
    headers: {
      authorization: `Bearer ${accessToken}`,
      "x-hasura-admin-secret": "hendra",
      "x-hasura-role": "user",
      "x-hasura-user-id": `${user?.sub}`,
    },
  });

  const wsLink = new WebSocketLink({
    uri: "ws://cheerful-possum-15.hasura.app/v1/graphql",
    options: {
      reconnect: true,
      connectionParams: {
        headers: {
          authorization: `Bearer ${accessToken}`,
          "x-hasura-admin-secret": "hendra",
          "x-hasura-role": "user",
          "x-hasura-user-id": `${user?.sub}`,
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

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default AppProvider;
