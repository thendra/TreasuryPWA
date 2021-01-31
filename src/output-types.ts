import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  user: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** columns and relationships of "Items" */
export type Items = {
  __typename?: 'Items';
  created_by?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image_url?: Maybe<Scalars['String']>;
  is_public?: Maybe<Scalars['Boolean']>;
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
  created_by?: Maybe<String_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  image_url?: Maybe<String_Comparison_Exp>;
  is_public?: Maybe<Boolean_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Items" */
export enum Items_Constraint {
  /** unique or primary key constraint */
  ItemsPkey = 'Items_pkey'
}

/** input type for inserting data into table "Items" */
export type Items_Insert_Input = {
  created_by?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image_url?: Maybe<Scalars['String']>;
  is_public?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Items_Max_Fields = {
  __typename?: 'Items_max_fields';
  created_by?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image_url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "Items" */
export type Items_Max_Order_By = {
  created_by?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image_url?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Items_Min_Fields = {
  __typename?: 'Items_min_fields';
  created_by?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image_url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "Items" */
export type Items_Min_Order_By = {
  created_by?: Maybe<Order_By>;
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
  created_by?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image_url?: Maybe<Order_By>;
  is_public?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** primary key columns input for table: "Items" */
export type Items_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "Items" */
export enum Items_Select_Column {
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  IsPublic = 'is_public',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "Items" */
export type Items_Set_Input = {
  created_by?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image_url?: Maybe<Scalars['String']>;
  is_public?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
};

/** update columns of table "Items" */
export enum Items_Update_Column {
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  IsPublic = 'is_public',
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
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "Items" */
  insert_Items?: Maybe<Items_Mutation_Response>;
  /** insert a single row into the table: "Items" */
  insert_Items_one?: Maybe<Items>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "Items" */
  update_Items?: Maybe<Items_Mutation_Response>;
  /** update single row of the table: "Items" */
  update_Items_by_pk?: Maybe<Items>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
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
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
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
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
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


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
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
  userInfo: UserInfo;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
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


/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_By_PkArgs = {
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
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
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


/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  id: Scalars['String'];
  last_seen?: Maybe<Scalars['timestamptz']>;
  name: Scalars['String'];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  id?: Maybe<String_Comparison_Exp>;
  last_seen?: Maybe<Timestamptz_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  id?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  id?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  id?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "users" */
export type Users_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name'
}


export type UserInfo = {
  __typename?: 'UserInfo';
  isAuthenticated: Scalars['Boolean'];
  userId: Scalars['String'];
  user: Scalars['user'];
};

export type GetItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetItemsQuery = (
  { __typename?: 'query_root' }
  & { userInfo: (
    { __typename?: 'UserInfo' }
    & Pick<UserInfo, 'user' | 'isAuthenticated' | 'userId'>
  ), Items: Array<(
    { __typename?: 'Items' }
    & Pick<Items, 'id' | 'title' | 'description' | 'image_url' | 'created_by' | 'is_public'>
  )> }
);

export type GetItemByIdQueryVariables = Exact<{
  itemId: Scalars['String'];
}>;


export type GetItemByIdQuery = (
  { __typename?: 'query_root' }
  & { Items_by_pk?: Maybe<(
    { __typename?: 'Items' }
    & Pick<Items, 'description' | 'id' | 'image_url' | 'title' | 'created_by' | 'is_public'>
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
  user_id?: Maybe<Scalars['String']>;
  is_public?: Maybe<Scalars['Boolean']>;
}>;


export type AdditemMutation = (
  { __typename?: 'mutation_root' }
  & { insert_Items?: Maybe<(
    { __typename?: 'Items_mutation_response' }
    & { returning: Array<(
      { __typename?: 'Items' }
      & Pick<Items, 'id' | 'title' | 'description' | 'image_url' | 'created_by' | 'is_public'>
    )> }
  )> }
);

export type UpdateItemDescriptionMutationVariables = Exact<{
  id: Scalars['String'];
  description?: Maybe<Scalars['String']>;
}>;


export type UpdateItemDescriptionMutation = (
  { __typename?: 'mutation_root' }
  & { update_Items_by_pk?: Maybe<(
    { __typename?: 'Items' }
    & Pick<Items, 'description'>
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


export const GetItems = gql`
    query GetItems {
  userInfo @client {
    user
    isAuthenticated
    userId
  }
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
export const GetItemById = gql`
    query GetItemById($itemId: String!) {
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
export const GetItemLinks = gql`
    query GetItemLinks {
  Items {
    id
  }
}
    `;
export const Additem = gql`
    mutation ADDITEM($id: String, $title: String, $description: String, $image_url: String, $user_id: String, $is_public: Boolean) {
  insert_Items(objects: {id: $id, title: $title, description: $description, image_url: $image_url, created_by: $user_id, is_public: $is_public}) {
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
export const UpdateItemDescription = gql`
    mutation UpdateItemDescription($id: String!, $description: String) {
  update_Items_by_pk(pk_columns: {id: $id}, _set: {description: $description}) {
    description
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