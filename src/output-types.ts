import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** columns and relationships of "Items" */
export type Items = {
  __typename?: 'Items';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image_url?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

/** aggregated selection of "Items" */
export type Items_Aggregate = {
  __typename?: 'Items_aggregate';
  aggregate?: Maybe<Items_Aggregate_Fields>;
  nodes: Array<Items>;
};

/** aggregate fields of "Items" */
export type Items_Aggregate_Fields = {
  __typename?: 'Items_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Items_Max_Fields>;
  min?: Maybe<Items_Min_Fields>;
};


/** aggregate fields of "Items" */
export type Items_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Items_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Items" */
export type Items_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Items_Max_Order_By>;
  min?: Maybe<Items_Min_Order_By>;
};

/** input type for inserting array relation for remote table "Items" */
export type Items_Arr_Rel_Insert_Input = {
  data: Array<Items_Insert_Input>;
  on_conflict?: Maybe<Items_On_Conflict>;
};

/** Boolean expression to filter rows from the table "Items". All fields are combined with a logical 'AND'. */
export type Items_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Items_Bool_Exp>>>;
  _not?: Maybe<Items_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Items_Bool_Exp>>>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  image_url?: Maybe<String_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Items" */
export enum Items_Constraint {
  /** unique or primary key constraint */
  ItemsImageUrlKey = 'Items_image_url_key',
  /** unique or primary key constraint */
  ItemsPkey = 'Items_pkey'
}

/** input type for inserting data into table "Items" */
export type Items_Insert_Input = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image_url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Items_Max_Fields = {
  __typename?: 'Items_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image_url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "Items" */
export type Items_Max_Order_By = {
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image_url?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Items_Min_Fields = {
  __typename?: 'Items_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image_url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "Items" */
export type Items_Min_Order_By = {
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image_url?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** response of any mutation on the table "Items" */
export type Items_Mutation_Response = {
  __typename?: 'Items_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Items>;
};

/** input type for inserting object relation for remote table "Items" */
export type Items_Obj_Rel_Insert_Input = {
  data: Items_Insert_Input;
  on_conflict?: Maybe<Items_On_Conflict>;
};

/** on conflict condition type for table "Items" */
export type Items_On_Conflict = {
  constraint: Items_Constraint;
  update_columns: Array<Items_Update_Column>;
  where?: Maybe<Items_Bool_Exp>;
};

/** ordering options when selecting data from "Items" */
export type Items_Order_By = {
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image_url?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** primary key columns input for table: "Items" */
export type Items_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "Items" */
export enum Items_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "Items" */
export type Items_Set_Input = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image_url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** update columns of table "Items" */
export enum Items_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Title = 'title'
}

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "Items" */
  delete_Items?: Maybe<Items_Mutation_Response>;
  /** delete single row from the table: "Items" */
  delete_Items_by_pk?: Maybe<Items>;
  /** insert data into the table: "Items" */
  insert_Items?: Maybe<Items_Mutation_Response>;
  /** insert a single row into the table: "Items" */
  insert_Items_one?: Maybe<Items>;
  /** update data of the table: "Items" */
  update_Items?: Maybe<Items_Mutation_Response>;
  /** update single row of the table: "Items" */
  update_Items_by_pk?: Maybe<Items>;
};


/** mutation root */
export type Mutation_RootDelete_ItemsArgs = {
  where: Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Items_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_ItemsArgs = {
  objects: Array<Items_Insert_Input>;
  on_conflict?: Maybe<Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Items_OneArgs = {
  object: Items_Insert_Input;
  on_conflict?: Maybe<Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ItemsArgs = {
  _set?: Maybe<Items_Set_Input>;
  where: Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Items_By_PkArgs = {
  _set?: Maybe<Items_Set_Input>;
  pk_columns: Items_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "Items" */
  Items: Array<Items>;
  /** fetch aggregated fields from the table: "Items" */
  Items_aggregate: Items_Aggregate;
  /** fetch data from the table: "Items" using primary key columns */
  Items_by_pk?: Maybe<Items>;
};


/** query root */
export type Query_RootItemsArgs = {
  distinct_on?: Maybe<Array<Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Items_Order_By>>;
  where?: Maybe<Items_Bool_Exp>;
};


/** query root */
export type Query_RootItems_AggregateArgs = {
  distinct_on?: Maybe<Array<Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Items_Order_By>>;
  where?: Maybe<Items_Bool_Exp>;
};


/** query root */
export type Query_RootItems_By_PkArgs = {
  id: Scalars['String'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "Items" */
  Items: Array<Items>;
  /** fetch aggregated fields from the table: "Items" */
  Items_aggregate: Items_Aggregate;
  /** fetch data from the table: "Items" using primary key columns */
  Items_by_pk?: Maybe<Items>;
};


/** subscription root */
export type Subscription_RootItemsArgs = {
  distinct_on?: Maybe<Array<Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Items_Order_By>>;
  where?: Maybe<Items_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootItems_AggregateArgs = {
  distinct_on?: Maybe<Array<Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Items_Order_By>>;
  where?: Maybe<Items_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootItems_By_PkArgs = {
  id: Scalars['String'];
};

export type GetItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetItemsQuery = (
  { __typename?: 'query_root' }
  & { Items: Array<(
    { __typename?: 'Items' }
    & Pick<Items, 'id' | 'title' | 'description' | 'image_url'>
  )> }
);

export type GetItemByIdQueryVariables = Exact<{
  itemId: Scalars['String'];
}>;


export type GetItemByIdQuery = (
  { __typename?: 'query_root' }
  & { Items_by_pk?: Maybe<(
    { __typename?: 'Items' }
    & Pick<Items, 'description' | 'id' | 'image_url' | 'title'>
  )> }
);

export type GetItemLinksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetItemLinksQuery = (
  { __typename?: 'query_root' }
  & { Items: Array<(
    { __typename?: 'Items' }
    & Pick<Items, 'id'>
  )> }
);

export type AdditemMutationVariables = Exact<{
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image_url?: Maybe<Scalars['String']>;
}>;


export type AdditemMutation = (
  { __typename?: 'mutation_root' }
  & { insert_Items?: Maybe<(
    { __typename?: 'Items_mutation_response' }
    & { returning: Array<(
      { __typename?: 'Items' }
      & Pick<Items, 'id' | 'title' | 'description' | 'image_url'>
    )> }
  )> }
);

export type RemoveItemMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type RemoveItemMutation = (
  { __typename?: 'mutation_root' }
  & { delete_Items_by_pk?: Maybe<(
    { __typename?: 'Items' }
    & Pick<Items, 'id'>
  )> }
);


export const GetItemsDocument = gql`
    query GetItems {
  Items {
    id
    title
    description
    image_url
  }
}
    `;

/**
 * __useGetItemsQuery__
 *
 * To run a query within a React component, call `useGetItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetItemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetItemsQuery(baseOptions?: Apollo.QueryHookOptions<GetItemsQuery, GetItemsQueryVariables>) {
        return Apollo.useQuery<GetItemsQuery, GetItemsQueryVariables>(GetItemsDocument, baseOptions);
      }
export function useGetItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetItemsQuery, GetItemsQueryVariables>) {
          return Apollo.useLazyQuery<GetItemsQuery, GetItemsQueryVariables>(GetItemsDocument, baseOptions);
        }
export type GetItemsQueryHookResult = ReturnType<typeof useGetItemsQuery>;
export type GetItemsLazyQueryHookResult = ReturnType<typeof useGetItemsLazyQuery>;
export type GetItemsQueryResult = Apollo.QueryResult<GetItemsQuery, GetItemsQueryVariables>;
export const GetItemByIdDocument = gql`
    query GetItemById($itemId: String!) {
  Items_by_pk(id: $itemId) {
    description
    id
    image_url
    title
  }
}
    `;

/**
 * __useGetItemByIdQuery__
 *
 * To run a query within a React component, call `useGetItemByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetItemByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetItemByIdQuery({
 *   variables: {
 *      itemId: // value for 'itemId'
 *   },
 * });
 */
export function useGetItemByIdQuery(baseOptions?: Apollo.QueryHookOptions<GetItemByIdQuery, GetItemByIdQueryVariables>) {
        return Apollo.useQuery<GetItemByIdQuery, GetItemByIdQueryVariables>(GetItemByIdDocument, baseOptions);
      }
export function useGetItemByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetItemByIdQuery, GetItemByIdQueryVariables>) {
          return Apollo.useLazyQuery<GetItemByIdQuery, GetItemByIdQueryVariables>(GetItemByIdDocument, baseOptions);
        }
export type GetItemByIdQueryHookResult = ReturnType<typeof useGetItemByIdQuery>;
export type GetItemByIdLazyQueryHookResult = ReturnType<typeof useGetItemByIdLazyQuery>;
export type GetItemByIdQueryResult = Apollo.QueryResult<GetItemByIdQuery, GetItemByIdQueryVariables>;
export const GetItemLinksDocument = gql`
    query GetItemLinks {
  Items {
    id
  }
}
    `;

/**
 * __useGetItemLinksQuery__
 *
 * To run a query within a React component, call `useGetItemLinksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetItemLinksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetItemLinksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetItemLinksQuery(baseOptions?: Apollo.QueryHookOptions<GetItemLinksQuery, GetItemLinksQueryVariables>) {
        return Apollo.useQuery<GetItemLinksQuery, GetItemLinksQueryVariables>(GetItemLinksDocument, baseOptions);
      }
export function useGetItemLinksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetItemLinksQuery, GetItemLinksQueryVariables>) {
          return Apollo.useLazyQuery<GetItemLinksQuery, GetItemLinksQueryVariables>(GetItemLinksDocument, baseOptions);
        }
export type GetItemLinksQueryHookResult = ReturnType<typeof useGetItemLinksQuery>;
export type GetItemLinksLazyQueryHookResult = ReturnType<typeof useGetItemLinksLazyQuery>;
export type GetItemLinksQueryResult = Apollo.QueryResult<GetItemLinksQuery, GetItemLinksQueryVariables>;
export const AdditemDocument = gql`
    mutation ADDITEM($id: String, $title: String, $description: String, $image_url: String) {
  insert_Items(objects: {id: $id, title: $title, description: $description, image_url: $image_url}) {
    returning {
      id
      title
      description
      image_url
    }
  }
}
    `;
export type AdditemMutationFn = Apollo.MutationFunction<AdditemMutation, AdditemMutationVariables>;

/**
 * __useAdditemMutation__
 *
 * To run a mutation, you first call `useAdditemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdditemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [additemMutation, { data, loading, error }] = useAdditemMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      image_url: // value for 'image_url'
 *   },
 * });
 */
export function useAdditemMutation(baseOptions?: Apollo.MutationHookOptions<AdditemMutation, AdditemMutationVariables>) {
        return Apollo.useMutation<AdditemMutation, AdditemMutationVariables>(AdditemDocument, baseOptions);
      }
export type AdditemMutationHookResult = ReturnType<typeof useAdditemMutation>;
export type AdditemMutationResult = Apollo.MutationResult<AdditemMutation>;
export type AdditemMutationOptions = Apollo.BaseMutationOptions<AdditemMutation, AdditemMutationVariables>;
export const RemoveItemDocument = gql`
    mutation RemoveItem($id: String!) {
  delete_Items_by_pk(id: $id) {
    id
  }
}
    `;
export type RemoveItemMutationFn = Apollo.MutationFunction<RemoveItemMutation, RemoveItemMutationVariables>;

/**
 * __useRemoveItemMutation__
 *
 * To run a mutation, you first call `useRemoveItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeItemMutation, { data, loading, error }] = useRemoveItemMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveItemMutation(baseOptions?: Apollo.MutationHookOptions<RemoveItemMutation, RemoveItemMutationVariables>) {
        return Apollo.useMutation<RemoveItemMutation, RemoveItemMutationVariables>(RemoveItemDocument, baseOptions);
      }
export type RemoveItemMutationHookResult = ReturnType<typeof useRemoveItemMutation>;
export type RemoveItemMutationResult = Apollo.MutationResult<RemoveItemMutation>;
export type RemoveItemMutationOptions = Apollo.BaseMutationOptions<RemoveItemMutation, RemoveItemMutationVariables>;

export const GetItems = gql`
    query GetItems {
  Items {
    id
    title
    description
    image_url
  }
}
    `;
export const GetItemById = gql`
    query GetItemById($itemId: String!) {
  Items_by_pk(id: $itemId) {
    description
    id
    image_url
    title
  }
}
    `;
export const GetItemLinks = gql`
    query GetItemLinks {
  Items {
    id
  }
}
    `;
export const Additem = gql`
    mutation ADDITEM($id: String, $title: String, $description: String, $image_url: String) {
  insert_Items(objects: {id: $id, title: $title, description: $description, image_url: $image_url}) {
    returning {
      id
      title
      description
      image_url
    }
  }
}
    `;
export const RemoveItem = gql`
    mutation RemoveItem($id: String!) {
  delete_Items_by_pk(id: $id) {
    id
  }
}
    `;

      export interface IntrospectionResultData {
        __schema: {
          types: {
            kind: string;
            name: string;
            possibleTypes: {
              name: string;
            }[];
          }[];
        };
      }
      const result: IntrospectionResultData = {
  "__schema": {
    "types": []
  }
};
      export default result;
    