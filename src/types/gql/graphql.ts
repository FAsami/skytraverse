/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  jsonb: any;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "brand" */
export type Brand = {
  __typename?: 'brand';
  created_at: Scalars['timestamptz'];
  email: Scalars['String'];
  id: Scalars['Int'];
  location?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['jsonb']>;
  metaData?: Maybe<Scalars['jsonb']>;
  phone: Scalars['String'];
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "brand" */
export type BrandLogoArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "brand" */
export type BrandMetaDataArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "brand" */
export type Brand_Aggregate = {
  __typename?: 'brand_aggregate';
  aggregate?: Maybe<Brand_Aggregate_Fields>;
  nodes: Array<Brand>;
};

/** aggregate fields of "brand" */
export type Brand_Aggregate_Fields = {
  __typename?: 'brand_aggregate_fields';
  avg?: Maybe<Brand_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Brand_Max_Fields>;
  min?: Maybe<Brand_Min_Fields>;
  stddev?: Maybe<Brand_Stddev_Fields>;
  stddev_pop?: Maybe<Brand_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Brand_Stddev_Samp_Fields>;
  sum?: Maybe<Brand_Sum_Fields>;
  var_pop?: Maybe<Brand_Var_Pop_Fields>;
  var_samp?: Maybe<Brand_Var_Samp_Fields>;
  variance?: Maybe<Brand_Variance_Fields>;
};


/** aggregate fields of "brand" */
export type Brand_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Brand_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Brand_Append_Input = {
  logo?: InputMaybe<Scalars['jsonb']>;
  metaData?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Brand_Avg_Fields = {
  __typename?: 'brand_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "brand". All fields are combined with a logical 'AND'. */
export type Brand_Bool_Exp = {
  _and?: InputMaybe<Array<Brand_Bool_Exp>>;
  _not?: InputMaybe<Brand_Bool_Exp>;
  _or?: InputMaybe<Array<Brand_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  location?: InputMaybe<String_Comparison_Exp>;
  logo?: InputMaybe<Jsonb_Comparison_Exp>;
  metaData?: InputMaybe<Jsonb_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "brand" */
export enum Brand_Constraint {
  /** unique or primary key constraint on columns "email", "phone" */
  BrandPhoneEmailKey = 'brand_phone_email_key',
  /** unique or primary key constraint on columns "id" */
  BrandPkey = 'brand_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Brand_Delete_At_Path_Input = {
  logo?: InputMaybe<Array<Scalars['String']>>;
  metaData?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Brand_Delete_Elem_Input = {
  logo?: InputMaybe<Scalars['Int']>;
  metaData?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Brand_Delete_Key_Input = {
  logo?: InputMaybe<Scalars['String']>;
  metaData?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "brand" */
export type Brand_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "brand" */
export type Brand_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  location?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['jsonb']>;
  metaData?: InputMaybe<Scalars['jsonb']>;
  phone?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Brand_Max_Fields = {
  __typename?: 'brand_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  location?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Brand_Min_Fields = {
  __typename?: 'brand_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  location?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "brand" */
export type Brand_Mutation_Response = {
  __typename?: 'brand_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Brand>;
};

/** on_conflict condition type for table "brand" */
export type Brand_On_Conflict = {
  constraint: Brand_Constraint;
  update_columns?: Array<Brand_Update_Column>;
  where?: InputMaybe<Brand_Bool_Exp>;
};

/** Ordering options when selecting data from "brand". */
export type Brand_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  logo?: InputMaybe<Order_By>;
  metaData?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: brand */
export type Brand_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Brand_Prepend_Input = {
  logo?: InputMaybe<Scalars['jsonb']>;
  metaData?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "brand" */
export enum Brand_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  Logo = 'logo',
  /** column name */
  MetaData = 'metaData',
  /** column name */
  Phone = 'phone',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "brand" */
export type Brand_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  location?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['jsonb']>;
  metaData?: InputMaybe<Scalars['jsonb']>;
  phone?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Brand_Stddev_Fields = {
  __typename?: 'brand_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Brand_Stddev_Pop_Fields = {
  __typename?: 'brand_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Brand_Stddev_Samp_Fields = {
  __typename?: 'brand_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "brand" */
export type Brand_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Brand_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Brand_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  location?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['jsonb']>;
  metaData?: InputMaybe<Scalars['jsonb']>;
  phone?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Brand_Sum_Fields = {
  __typename?: 'brand_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "brand" */
export enum Brand_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  Logo = 'logo',
  /** column name */
  MetaData = 'metaData',
  /** column name */
  Phone = 'phone',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Brand_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Brand_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Brand_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Brand_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Brand_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Brand_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Brand_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Brand_Set_Input>;
  /** filter the rows which have to be updated */
  where: Brand_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Brand_Var_Pop_Fields = {
  __typename?: 'brand_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Brand_Var_Samp_Fields = {
  __typename?: 'brand_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Brand_Variance_Fields = {
  __typename?: 'brand_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "brand" */
  delete_brand?: Maybe<Brand_Mutation_Response>;
  /** delete single row from the table: "brand" */
  delete_brand_by_pk?: Maybe<Brand>;
  /** insert data into the table: "brand" */
  insert_brand?: Maybe<Brand_Mutation_Response>;
  /** insert a single row into the table: "brand" */
  insert_brand_one?: Maybe<Brand>;
  /** update data of the table: "brand" */
  update_brand?: Maybe<Brand_Mutation_Response>;
  /** update single row of the table: "brand" */
  update_brand_by_pk?: Maybe<Brand>;
  /** update multiples rows of table: "brand" */
  update_brand_many?: Maybe<Array<Maybe<Brand_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_BrandArgs = {
  where: Brand_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Brand_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_BrandArgs = {
  objects: Array<Brand_Insert_Input>;
  on_conflict?: InputMaybe<Brand_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Brand_OneArgs = {
  object: Brand_Insert_Input;
  on_conflict?: InputMaybe<Brand_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_BrandArgs = {
  _append?: InputMaybe<Brand_Append_Input>;
  _delete_at_path?: InputMaybe<Brand_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Brand_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Brand_Delete_Key_Input>;
  _inc?: InputMaybe<Brand_Inc_Input>;
  _prepend?: InputMaybe<Brand_Prepend_Input>;
  _set?: InputMaybe<Brand_Set_Input>;
  where: Brand_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Brand_By_PkArgs = {
  _append?: InputMaybe<Brand_Append_Input>;
  _delete_at_path?: InputMaybe<Brand_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Brand_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Brand_Delete_Key_Input>;
  _inc?: InputMaybe<Brand_Inc_Input>;
  _prepend?: InputMaybe<Brand_Prepend_Input>;
  _set?: InputMaybe<Brand_Set_Input>;
  pk_columns: Brand_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Brand_ManyArgs = {
  updates: Array<Brand_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "brand" */
  brand: Array<Brand>;
  /** fetch aggregated fields from the table: "brand" */
  brand_aggregate: Brand_Aggregate;
  /** fetch data from the table: "brand" using primary key columns */
  brand_by_pk?: Maybe<Brand>;
};


export type Query_RootBrandArgs = {
  distinct_on?: InputMaybe<Array<Brand_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Brand_Order_By>>;
  where?: InputMaybe<Brand_Bool_Exp>;
};


export type Query_RootBrand_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Brand_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Brand_Order_By>>;
  where?: InputMaybe<Brand_Bool_Exp>;
};


export type Query_RootBrand_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "brand" */
  brand: Array<Brand>;
  /** fetch aggregated fields from the table: "brand" */
  brand_aggregate: Brand_Aggregate;
  /** fetch data from the table: "brand" using primary key columns */
  brand_by_pk?: Maybe<Brand>;
  /** fetch data from the table in a streaming manner: "brand" */
  brand_stream: Array<Brand>;
};


export type Subscription_RootBrandArgs = {
  distinct_on?: InputMaybe<Array<Brand_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Brand_Order_By>>;
  where?: InputMaybe<Brand_Bool_Exp>;
};


export type Subscription_RootBrand_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Brand_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Brand_Order_By>>;
  where?: InputMaybe<Brand_Bool_Exp>;
};


export type Subscription_RootBrand_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootBrand_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Brand_Stream_Cursor_Input>>;
  where?: InputMaybe<Brand_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

export type GetBrandQueryVariables = Exact<{
  title: Scalars['String'];
}>;


export type GetBrandQuery = { __typename?: 'query_root', brand: Array<{ __typename?: 'brand', id: number, title: string, logo?: any | null, metaData?: any | null, phone: string, email: string, location?: string | null }> };


export const GetBrandDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBrand"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brand"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"metaData"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"location"}}]}}]}}]} as unknown as DocumentNode<GetBrandQuery, GetBrandQueryVariables>;