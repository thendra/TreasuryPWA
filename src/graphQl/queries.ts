import { gql } from "@apollo/client";

export const ITEMS = gql`
  query MyQuery {
    Items {
      id
      title
      description
    }
  }
`;

export const ADD_ITEM = gql`
  mutation MyMutation($id: String, $title: String, $description: String) {
    insert_Items(
      objects: { id: $id, title: $title, description: $description }
    ) {
      returning {
        id
        title
        description
      }
    }
  }
`;

export const REMOVE_ITEM = gql`
  mutation MyMutation($id: String!) {
    delete_Items_by_pk(id: $id) {
      id
    }
  }
`;
