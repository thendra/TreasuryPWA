import { gql } from "@apollo/client";

export const ITEMS = gql`
  query MyQuery {
    Items {
      id
      title
      description
      image_url
    }
  }
`;

export const ADD_ITEM = gql`
  mutation MyMutation(
    $id: String
    $title: String
    $description: String
    $image_url: String
  ) {
    insert_Items(
      objects: {
        id: $id
        title: $title
        description: $description
        image_url: $image_url
      }
    ) {
      returning {
        id
        title
        description
        image_url
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
