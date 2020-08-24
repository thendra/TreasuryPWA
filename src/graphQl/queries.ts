import { gql } from "@apollo/client";

export const ITEMS = gql`
  query MyQuery {
    Items {
      title
      id
    }
  }
`;

export const ADD_ITEM = gql`
  mutation MyMutation($title: String) {
    insert_Items_one(object: { title: $title }) {
      id
      title
    }
  }
`;
