import { gql } from "@apollo/client";

export const ITEMS = gql`
  query MyQuery {
    Items {
      Title
      id
    }
  }
`;

export const ADD_ITEM = gql`
  mutation MyMutation($id: Int, $title: String) {
    insert_Items(objects: { Title: $title, id: $id }) {
      returning {
        Title
        id
      }
    }
  }
`;
