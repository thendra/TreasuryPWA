import { gql } from "@apollo/client";

export const GET_ITEMS = gql`
  query GetItems {
    userId @client
    Items {
      id
      title
      description
      image_url
      created_by
      is_public
    }
  }
`;

export const GET_ITEM_BY_ID = gql`
  query GetItemById($itemId: String!) {
    userId @client
    Items_by_pk(id: $itemId) {
      description
      id
      image_url
      title
      created_by
      is_public
    }
  }
`;

export const GET_ITEM_LINKS = gql`
  query GetItemLinks {
    userId @client

    Items {
      id
    }
  }
`;

export const ADD_ITEM = gql`
  mutation ADDITEM(
    $id: String
    $title: String
    $description: String
    $image_url: String
    $user_id: String
    $is_public: Boolean
  ) {
    insert_Items(
      objects: {
        id: $id
        title: $title
        description: $description
        image_url: $image_url
        created_by: $user_id
        is_public: $is_public
      }
    ) {
      returning {
        id
        title
        description
        image_url
        created_by
        is_public
      }
    }
  }
`;

export const UPDATE_ITEM_DESCRIPTION = gql`
  mutation UpdateItemDescription($id: String!, $description: String) {
    update_Items_by_pk(
      pk_columns: { id: $id }
      _set: { description: $description }
    ) {
      description
    }
  }
`;

export const REMOVE_ITEM = gql`
  mutation RemoveItem($id: String!) {
    delete_Items_by_pk(id: $id) {
      id
    }
  }
`;
