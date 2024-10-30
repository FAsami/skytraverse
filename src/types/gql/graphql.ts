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
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
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

/** columns and relationships of "accounts" */
export type Accounts = {
  __typename?: 'accounts';
  access_token?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['Int']>;
  id: Scalars['uuid'];
  id_token?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refresh_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  updated_at?: Maybe<Scalars['timestamptz']>;
  userId: Scalars['uuid'];
};

/** aggregated selection of "accounts" */
export type Accounts_Aggregate = {
  __typename?: 'accounts_aggregate';
  aggregate?: Maybe<Accounts_Aggregate_Fields>;
  nodes: Array<Accounts>;
};

export type Accounts_Aggregate_Bool_Exp = {
  count?: InputMaybe<Accounts_Aggregate_Bool_Exp_Count>;
};

export type Accounts_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Accounts_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "accounts" */
export type Accounts_Aggregate_Fields = {
  __typename?: 'accounts_aggregate_fields';
  avg?: Maybe<Accounts_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Accounts_Max_Fields>;
  min?: Maybe<Accounts_Min_Fields>;
  stddev?: Maybe<Accounts_Stddev_Fields>;
  stddev_pop?: Maybe<Accounts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Accounts_Stddev_Samp_Fields>;
  sum?: Maybe<Accounts_Sum_Fields>;
  var_pop?: Maybe<Accounts_Var_Pop_Fields>;
  var_samp?: Maybe<Accounts_Var_Samp_Fields>;
  variance?: Maybe<Accounts_Variance_Fields>;
};


/** aggregate fields of "accounts" */
export type Accounts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "accounts" */
export type Accounts_Aggregate_Order_By = {
  avg?: InputMaybe<Accounts_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Accounts_Max_Order_By>;
  min?: InputMaybe<Accounts_Min_Order_By>;
  stddev?: InputMaybe<Accounts_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Accounts_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Accounts_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Accounts_Sum_Order_By>;
  var_pop?: InputMaybe<Accounts_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Accounts_Var_Samp_Order_By>;
  variance?: InputMaybe<Accounts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "accounts" */
export type Accounts_Arr_Rel_Insert_Input = {
  data: Array<Accounts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};

/** aggregate avg on columns */
export type Accounts_Avg_Fields = {
  __typename?: 'accounts_avg_fields';
  expires_at?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "accounts" */
export type Accounts_Avg_Order_By = {
  expires_at?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "accounts". All fields are combined with a logical 'AND'. */
export type Accounts_Bool_Exp = {
  _and?: InputMaybe<Array<Accounts_Bool_Exp>>;
  _not?: InputMaybe<Accounts_Bool_Exp>;
  _or?: InputMaybe<Array<Accounts_Bool_Exp>>;
  access_token?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  expires_at?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  id_token?: InputMaybe<String_Comparison_Exp>;
  provider?: InputMaybe<String_Comparison_Exp>;
  providerAccountId?: InputMaybe<String_Comparison_Exp>;
  refresh_token?: InputMaybe<String_Comparison_Exp>;
  scope?: InputMaybe<String_Comparison_Exp>;
  session_state?: InputMaybe<String_Comparison_Exp>;
  token_type?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "accounts" */
export enum Accounts_Constraint {
  /** unique or primary key constraint on columns "id" */
  AccountsPkey = 'accounts_pkey'
}

/** input type for incrementing numeric columns in table "accounts" */
export type Accounts_Inc_Input = {
  expires_at?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "accounts" */
export type Accounts_Insert_Input = {
  access_token?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  expires_at?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  id_token?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  providerAccountId?: InputMaybe<Scalars['String']>;
  refresh_token?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  session_state?: InputMaybe<Scalars['String']>;
  token_type?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Accounts_Max_Fields = {
  __typename?: 'accounts_max_fields';
  access_token?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  id_token?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  providerAccountId?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "accounts" */
export type Accounts_Max_Order_By = {
  access_token?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_token?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  providerAccountId?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  scope?: InputMaybe<Order_By>;
  session_state?: InputMaybe<Order_By>;
  token_type?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Accounts_Min_Fields = {
  __typename?: 'accounts_min_fields';
  access_token?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  id_token?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  providerAccountId?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "accounts" */
export type Accounts_Min_Order_By = {
  access_token?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_token?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  providerAccountId?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  scope?: InputMaybe<Order_By>;
  session_state?: InputMaybe<Order_By>;
  token_type?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "accounts" */
export type Accounts_Mutation_Response = {
  __typename?: 'accounts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Accounts>;
};

/** on_conflict condition type for table "accounts" */
export type Accounts_On_Conflict = {
  constraint: Accounts_Constraint;
  update_columns?: Array<Accounts_Update_Column>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

/** Ordering options when selecting data from "accounts". */
export type Accounts_Order_By = {
  access_token?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_token?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  providerAccountId?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  scope?: InputMaybe<Order_By>;
  session_state?: InputMaybe<Order_By>;
  token_type?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: accounts */
export type Accounts_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "accounts" */
export enum Accounts_Select_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  Id = 'id',
  /** column name */
  IdToken = 'id_token',
  /** column name */
  Provider = 'provider',
  /** column name */
  ProviderAccountId = 'providerAccountId',
  /** column name */
  RefreshToken = 'refresh_token',
  /** column name */
  Scope = 'scope',
  /** column name */
  SessionState = 'session_state',
  /** column name */
  TokenType = 'token_type',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "accounts" */
export type Accounts_Set_Input = {
  access_token?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  expires_at?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  id_token?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  providerAccountId?: InputMaybe<Scalars['String']>;
  refresh_token?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  session_state?: InputMaybe<Scalars['String']>;
  token_type?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Accounts_Stddev_Fields = {
  __typename?: 'accounts_stddev_fields';
  expires_at?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "accounts" */
export type Accounts_Stddev_Order_By = {
  expires_at?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Accounts_Stddev_Pop_Fields = {
  __typename?: 'accounts_stddev_pop_fields';
  expires_at?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "accounts" */
export type Accounts_Stddev_Pop_Order_By = {
  expires_at?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Accounts_Stddev_Samp_Fields = {
  __typename?: 'accounts_stddev_samp_fields';
  expires_at?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "accounts" */
export type Accounts_Stddev_Samp_Order_By = {
  expires_at?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "accounts" */
export type Accounts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Accounts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Accounts_Stream_Cursor_Value_Input = {
  access_token?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  expires_at?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  id_token?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  providerAccountId?: InputMaybe<Scalars['String']>;
  refresh_token?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  session_state?: InputMaybe<Scalars['String']>;
  token_type?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Accounts_Sum_Fields = {
  __typename?: 'accounts_sum_fields';
  expires_at?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "accounts" */
export type Accounts_Sum_Order_By = {
  expires_at?: InputMaybe<Order_By>;
};

/** update columns of table "accounts" */
export enum Accounts_Update_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  Id = 'id',
  /** column name */
  IdToken = 'id_token',
  /** column name */
  Provider = 'provider',
  /** column name */
  ProviderAccountId = 'providerAccountId',
  /** column name */
  RefreshToken = 'refresh_token',
  /** column name */
  Scope = 'scope',
  /** column name */
  SessionState = 'session_state',
  /** column name */
  TokenType = 'token_type',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'userId'
}

export type Accounts_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Accounts_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Accounts_Set_Input>;
  /** filter the rows which have to be updated */
  where: Accounts_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Accounts_Var_Pop_Fields = {
  __typename?: 'accounts_var_pop_fields';
  expires_at?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "accounts" */
export type Accounts_Var_Pop_Order_By = {
  expires_at?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Accounts_Var_Samp_Fields = {
  __typename?: 'accounts_var_samp_fields';
  expires_at?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "accounts" */
export type Accounts_Var_Samp_Order_By = {
  expires_at?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Accounts_Variance_Fields = {
  __typename?: 'accounts_variance_fields';
  expires_at?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "accounts" */
export type Accounts_Variance_Order_By = {
  expires_at?: InputMaybe<Order_By>;
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
  /** delete data from the table: "accounts" */
  delete_accounts?: Maybe<Accounts_Mutation_Response>;
  /** delete single row from the table: "accounts" */
  delete_accounts_by_pk?: Maybe<Accounts>;
  /** delete data from the table: "brand" */
  delete_brand?: Maybe<Brand_Mutation_Response>;
  /** delete single row from the table: "brand" */
  delete_brand_by_pk?: Maybe<Brand>;
  /** delete data from the table: "otp" */
  delete_otp?: Maybe<Otp_Mutation_Response>;
  /** delete single row from the table: "otp" */
  delete_otp_by_pk?: Maybe<Otp>;
  /** delete data from the table: "provider_type" */
  delete_provider_type?: Maybe<Provider_Type_Mutation_Response>;
  /** delete single row from the table: "provider_type" */
  delete_provider_type_by_pk?: Maybe<Provider_Type>;
  /** delete data from the table: "sessions" */
  delete_sessions?: Maybe<Sessions_Mutation_Response>;
  /** delete single row from the table: "sessions" */
  delete_sessions_by_pk?: Maybe<Sessions>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "verification_tokens" */
  delete_verification_tokens?: Maybe<Verification_Tokens_Mutation_Response>;
  /** delete single row from the table: "verification_tokens" */
  delete_verification_tokens_by_pk?: Maybe<Verification_Tokens>;
  /** insert data into the table: "accounts" */
  insert_accounts?: Maybe<Accounts_Mutation_Response>;
  /** insert a single row into the table: "accounts" */
  insert_accounts_one?: Maybe<Accounts>;
  /** insert data into the table: "brand" */
  insert_brand?: Maybe<Brand_Mutation_Response>;
  /** insert a single row into the table: "brand" */
  insert_brand_one?: Maybe<Brand>;
  /** insert data into the table: "otp" */
  insert_otp?: Maybe<Otp_Mutation_Response>;
  /** insert a single row into the table: "otp" */
  insert_otp_one?: Maybe<Otp>;
  /** insert data into the table: "provider_type" */
  insert_provider_type?: Maybe<Provider_Type_Mutation_Response>;
  /** insert a single row into the table: "provider_type" */
  insert_provider_type_one?: Maybe<Provider_Type>;
  /** insert data into the table: "sessions" */
  insert_sessions?: Maybe<Sessions_Mutation_Response>;
  /** insert a single row into the table: "sessions" */
  insert_sessions_one?: Maybe<Sessions>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "verification_tokens" */
  insert_verification_tokens?: Maybe<Verification_Tokens_Mutation_Response>;
  /** insert a single row into the table: "verification_tokens" */
  insert_verification_tokens_one?: Maybe<Verification_Tokens>;
  /** update data of the table: "accounts" */
  update_accounts?: Maybe<Accounts_Mutation_Response>;
  /** update single row of the table: "accounts" */
  update_accounts_by_pk?: Maybe<Accounts>;
  /** update multiples rows of table: "accounts" */
  update_accounts_many?: Maybe<Array<Maybe<Accounts_Mutation_Response>>>;
  /** update data of the table: "brand" */
  update_brand?: Maybe<Brand_Mutation_Response>;
  /** update single row of the table: "brand" */
  update_brand_by_pk?: Maybe<Brand>;
  /** update multiples rows of table: "brand" */
  update_brand_many?: Maybe<Array<Maybe<Brand_Mutation_Response>>>;
  /** update data of the table: "otp" */
  update_otp?: Maybe<Otp_Mutation_Response>;
  /** update single row of the table: "otp" */
  update_otp_by_pk?: Maybe<Otp>;
  /** update multiples rows of table: "otp" */
  update_otp_many?: Maybe<Array<Maybe<Otp_Mutation_Response>>>;
  /** update data of the table: "provider_type" */
  update_provider_type?: Maybe<Provider_Type_Mutation_Response>;
  /** update single row of the table: "provider_type" */
  update_provider_type_by_pk?: Maybe<Provider_Type>;
  /** update multiples rows of table: "provider_type" */
  update_provider_type_many?: Maybe<Array<Maybe<Provider_Type_Mutation_Response>>>;
  /** update data of the table: "sessions" */
  update_sessions?: Maybe<Sessions_Mutation_Response>;
  /** update single row of the table: "sessions" */
  update_sessions_by_pk?: Maybe<Sessions>;
  /** update multiples rows of table: "sessions" */
  update_sessions_many?: Maybe<Array<Maybe<Sessions_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
  /** update data of the table: "verification_tokens" */
  update_verification_tokens?: Maybe<Verification_Tokens_Mutation_Response>;
  /** update single row of the table: "verification_tokens" */
  update_verification_tokens_by_pk?: Maybe<Verification_Tokens>;
  /** update multiples rows of table: "verification_tokens" */
  update_verification_tokens_many?: Maybe<Array<Maybe<Verification_Tokens_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_AccountsArgs = {
  where: Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Accounts_By_PkArgs = {
  id: Scalars['uuid'];
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
export type Mutation_RootDelete_OtpArgs = {
  where: Otp_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Otp_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Provider_TypeArgs = {
  where: Provider_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Provider_Type_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_SessionsArgs = {
  where: Sessions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Sessions_By_PkArgs = {
  sessionToken: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Verification_TokensArgs = {
  where: Verification_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Verification_Tokens_By_PkArgs = {
  token: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_AccountsArgs = {
  objects: Array<Accounts_Insert_Input>;
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Accounts_OneArgs = {
  object: Accounts_Insert_Input;
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
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
export type Mutation_RootInsert_OtpArgs = {
  objects: Array<Otp_Insert_Input>;
  on_conflict?: InputMaybe<Otp_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Otp_OneArgs = {
  object: Otp_Insert_Input;
  on_conflict?: InputMaybe<Otp_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Provider_TypeArgs = {
  objects: Array<Provider_Type_Insert_Input>;
  on_conflict?: InputMaybe<Provider_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Provider_Type_OneArgs = {
  object: Provider_Type_Insert_Input;
  on_conflict?: InputMaybe<Provider_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SessionsArgs = {
  objects: Array<Sessions_Insert_Input>;
  on_conflict?: InputMaybe<Sessions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Sessions_OneArgs = {
  object: Sessions_Insert_Input;
  on_conflict?: InputMaybe<Sessions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Verification_TokensArgs = {
  objects: Array<Verification_Tokens_Insert_Input>;
  on_conflict?: InputMaybe<Verification_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Verification_Tokens_OneArgs = {
  object: Verification_Tokens_Insert_Input;
  on_conflict?: InputMaybe<Verification_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AccountsArgs = {
  _inc?: InputMaybe<Accounts_Inc_Input>;
  _set?: InputMaybe<Accounts_Set_Input>;
  where: Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Accounts_By_PkArgs = {
  _inc?: InputMaybe<Accounts_Inc_Input>;
  _set?: InputMaybe<Accounts_Set_Input>;
  pk_columns: Accounts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Accounts_ManyArgs = {
  updates: Array<Accounts_Updates>;
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


/** mutation root */
export type Mutation_RootUpdate_OtpArgs = {
  _inc?: InputMaybe<Otp_Inc_Input>;
  _set?: InputMaybe<Otp_Set_Input>;
  where: Otp_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Otp_By_PkArgs = {
  _inc?: InputMaybe<Otp_Inc_Input>;
  _set?: InputMaybe<Otp_Set_Input>;
  pk_columns: Otp_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Otp_ManyArgs = {
  updates: Array<Otp_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Provider_TypeArgs = {
  _set?: InputMaybe<Provider_Type_Set_Input>;
  where: Provider_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Provider_Type_By_PkArgs = {
  _set?: InputMaybe<Provider_Type_Set_Input>;
  pk_columns: Provider_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Provider_Type_ManyArgs = {
  updates: Array<Provider_Type_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SessionsArgs = {
  _set?: InputMaybe<Sessions_Set_Input>;
  where: Sessions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Sessions_By_PkArgs = {
  _set?: InputMaybe<Sessions_Set_Input>;
  pk_columns: Sessions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Sessions_ManyArgs = {
  updates: Array<Sessions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Verification_TokensArgs = {
  _set?: InputMaybe<Verification_Tokens_Set_Input>;
  where: Verification_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Verification_Tokens_By_PkArgs = {
  _set?: InputMaybe<Verification_Tokens_Set_Input>;
  pk_columns: Verification_Tokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Verification_Tokens_ManyArgs = {
  updates: Array<Verification_Tokens_Updates>;
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

/** columns and relationships of "otp" */
export type Otp = {
  __typename?: 'otp';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** A computed field, executes function "isOtpValid" */
  isValid?: Maybe<Scalars['Boolean']>;
  token: Scalars['String'];
  tokenType: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  userId: Scalars['uuid'];
  validTill: Scalars['Int'];
};

/** aggregated selection of "otp" */
export type Otp_Aggregate = {
  __typename?: 'otp_aggregate';
  aggregate?: Maybe<Otp_Aggregate_Fields>;
  nodes: Array<Otp>;
};

/** aggregate fields of "otp" */
export type Otp_Aggregate_Fields = {
  __typename?: 'otp_aggregate_fields';
  avg?: Maybe<Otp_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Otp_Max_Fields>;
  min?: Maybe<Otp_Min_Fields>;
  stddev?: Maybe<Otp_Stddev_Fields>;
  stddev_pop?: Maybe<Otp_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Otp_Stddev_Samp_Fields>;
  sum?: Maybe<Otp_Sum_Fields>;
  var_pop?: Maybe<Otp_Var_Pop_Fields>;
  var_samp?: Maybe<Otp_Var_Samp_Fields>;
  variance?: Maybe<Otp_Variance_Fields>;
};


/** aggregate fields of "otp" */
export type Otp_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Otp_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Otp_Avg_Fields = {
  __typename?: 'otp_avg_fields';
  id?: Maybe<Scalars['Float']>;
  validTill?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "otp". All fields are combined with a logical 'AND'. */
export type Otp_Bool_Exp = {
  _and?: InputMaybe<Array<Otp_Bool_Exp>>;
  _not?: InputMaybe<Otp_Bool_Exp>;
  _or?: InputMaybe<Array<Otp_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  isValid?: InputMaybe<Boolean_Comparison_Exp>;
  token?: InputMaybe<String_Comparison_Exp>;
  tokenType?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
  validTill?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "otp" */
export enum Otp_Constraint {
  /** unique or primary key constraint on columns "id" */
  OtpPkey = 'otp_pkey'
}

/** input type for incrementing numeric columns in table "otp" */
export type Otp_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  validTill?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "otp" */
export type Otp_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  token?: InputMaybe<Scalars['String']>;
  tokenType?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
  validTill?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Otp_Max_Fields = {
  __typename?: 'otp_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  token?: Maybe<Scalars['String']>;
  tokenType?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
  validTill?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Otp_Min_Fields = {
  __typename?: 'otp_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  token?: Maybe<Scalars['String']>;
  tokenType?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
  validTill?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "otp" */
export type Otp_Mutation_Response = {
  __typename?: 'otp_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Otp>;
};

/** on_conflict condition type for table "otp" */
export type Otp_On_Conflict = {
  constraint: Otp_Constraint;
  update_columns?: Array<Otp_Update_Column>;
  where?: InputMaybe<Otp_Bool_Exp>;
};

/** Ordering options when selecting data from "otp". */
export type Otp_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isValid?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
  tokenType?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
  validTill?: InputMaybe<Order_By>;
};

/** primary key columns input for table: otp */
export type Otp_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "otp" */
export enum Otp_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Token = 'token',
  /** column name */
  TokenType = 'tokenType',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'userId',
  /** column name */
  ValidTill = 'validTill'
}

/** input type for updating data in table "otp" */
export type Otp_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  token?: InputMaybe<Scalars['String']>;
  tokenType?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
  validTill?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Otp_Stddev_Fields = {
  __typename?: 'otp_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  validTill?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Otp_Stddev_Pop_Fields = {
  __typename?: 'otp_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  validTill?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Otp_Stddev_Samp_Fields = {
  __typename?: 'otp_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  validTill?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "otp" */
export type Otp_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Otp_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Otp_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  token?: InputMaybe<Scalars['String']>;
  tokenType?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
  validTill?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Otp_Sum_Fields = {
  __typename?: 'otp_sum_fields';
  id?: Maybe<Scalars['Int']>;
  validTill?: Maybe<Scalars['Int']>;
};

/** update columns of table "otp" */
export enum Otp_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Token = 'token',
  /** column name */
  TokenType = 'tokenType',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'userId',
  /** column name */
  ValidTill = 'validTill'
}

export type Otp_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Otp_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Otp_Set_Input>;
  /** filter the rows which have to be updated */
  where: Otp_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Otp_Var_Pop_Fields = {
  __typename?: 'otp_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  validTill?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Otp_Var_Samp_Fields = {
  __typename?: 'otp_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  validTill?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Otp_Variance_Fields = {
  __typename?: 'otp_variance_fields';
  id?: Maybe<Scalars['Float']>;
  validTill?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "provider_type" */
export type Provider_Type = {
  __typename?: 'provider_type';
  created_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value: Scalars['String'];
};

/** aggregated selection of "provider_type" */
export type Provider_Type_Aggregate = {
  __typename?: 'provider_type_aggregate';
  aggregate?: Maybe<Provider_Type_Aggregate_Fields>;
  nodes: Array<Provider_Type>;
};

/** aggregate fields of "provider_type" */
export type Provider_Type_Aggregate_Fields = {
  __typename?: 'provider_type_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Provider_Type_Max_Fields>;
  min?: Maybe<Provider_Type_Min_Fields>;
};


/** aggregate fields of "provider_type" */
export type Provider_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Provider_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "provider_type". All fields are combined with a logical 'AND'. */
export type Provider_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Provider_Type_Bool_Exp>>;
  _not?: InputMaybe<Provider_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Provider_Type_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "provider_type" */
export enum Provider_Type_Constraint {
  /** unique or primary key constraint on columns "value" */
  ProviderTypePkey = 'provider_type_pkey'
}

/** input type for inserting data into table "provider_type" */
export type Provider_Type_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Provider_Type_Max_Fields = {
  __typename?: 'provider_type_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Provider_Type_Min_Fields = {
  __typename?: 'provider_type_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "provider_type" */
export type Provider_Type_Mutation_Response = {
  __typename?: 'provider_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Provider_Type>;
};

/** on_conflict condition type for table "provider_type" */
export type Provider_Type_On_Conflict = {
  constraint: Provider_Type_Constraint;
  update_columns?: Array<Provider_Type_Update_Column>;
  where?: InputMaybe<Provider_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "provider_type". */
export type Provider_Type_Order_By = {
  created_at?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: provider_type */
export type Provider_Type_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "provider_type" */
export enum Provider_Type_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "provider_type" */
export type Provider_Type_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "provider_type" */
export type Provider_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Provider_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Provider_Type_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "provider_type" */
export enum Provider_Type_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value'
}

export type Provider_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Provider_Type_Set_Input>;
  /** filter the rows which have to be updated */
  where: Provider_Type_Bool_Exp;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  accounts: Array<Accounts>;
  /** An aggregate relationship */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table: "brand" */
  brand: Array<Brand>;
  /** fetch aggregated fields from the table: "brand" */
  brand_aggregate: Brand_Aggregate;
  /** fetch data from the table: "brand" using primary key columns */
  brand_by_pk?: Maybe<Brand>;
  /** fetch data from the table: "otp" */
  otp: Array<Otp>;
  /** fetch aggregated fields from the table: "otp" */
  otp_aggregate: Otp_Aggregate;
  /** fetch data from the table: "otp" using primary key columns */
  otp_by_pk?: Maybe<Otp>;
  /** fetch data from the table: "provider_type" */
  provider_type: Array<Provider_Type>;
  /** fetch aggregated fields from the table: "provider_type" */
  provider_type_aggregate: Provider_Type_Aggregate;
  /** fetch data from the table: "provider_type" using primary key columns */
  provider_type_by_pk?: Maybe<Provider_Type>;
  /** An array relationship */
  sessions: Array<Sessions>;
  /** An aggregate relationship */
  sessions_aggregate: Sessions_Aggregate;
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk?: Maybe<Sessions>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "verification_tokens" */
  verification_tokens: Array<Verification_Tokens>;
  /** fetch aggregated fields from the table: "verification_tokens" */
  verification_tokens_aggregate: Verification_Tokens_Aggregate;
  /** fetch data from the table: "verification_tokens" using primary key columns */
  verification_tokens_by_pk?: Maybe<Verification_Tokens>;
};


export type Query_RootAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Query_RootAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Query_RootAccounts_By_PkArgs = {
  id: Scalars['uuid'];
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


export type Query_RootOtpArgs = {
  distinct_on?: InputMaybe<Array<Otp_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Otp_Order_By>>;
  where?: InputMaybe<Otp_Bool_Exp>;
};


export type Query_RootOtp_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Otp_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Otp_Order_By>>;
  where?: InputMaybe<Otp_Bool_Exp>;
};


export type Query_RootOtp_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootProvider_TypeArgs = {
  distinct_on?: InputMaybe<Array<Provider_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Type_Order_By>>;
  where?: InputMaybe<Provider_Type_Bool_Exp>;
};


export type Query_RootProvider_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Provider_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Type_Order_By>>;
  where?: InputMaybe<Provider_Type_Bool_Exp>;
};


export type Query_RootProvider_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootSessionsArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};


export type Query_RootSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};


export type Query_RootSessions_By_PkArgs = {
  sessionToken: Scalars['String'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootVerification_TokensArgs = {
  distinct_on?: InputMaybe<Array<Verification_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Verification_Tokens_Order_By>>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};


export type Query_RootVerification_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Verification_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Verification_Tokens_Order_By>>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};


export type Query_RootVerification_Tokens_By_PkArgs = {
  token: Scalars['String'];
};

/** columns and relationships of "sessions" */
export type Sessions = {
  __typename?: 'sessions';
  created_at?: Maybe<Scalars['timestamptz']>;
  expires: Scalars['timestamptz'];
  id: Scalars['uuid'];
  sessionToken: Scalars['String'];
  updated_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "sessions" */
export type Sessions_Aggregate = {
  __typename?: 'sessions_aggregate';
  aggregate?: Maybe<Sessions_Aggregate_Fields>;
  nodes: Array<Sessions>;
};

export type Sessions_Aggregate_Bool_Exp = {
  count?: InputMaybe<Sessions_Aggregate_Bool_Exp_Count>;
};

export type Sessions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Sessions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Sessions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "sessions" */
export type Sessions_Aggregate_Fields = {
  __typename?: 'sessions_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Sessions_Max_Fields>;
  min?: Maybe<Sessions_Min_Fields>;
};


/** aggregate fields of "sessions" */
export type Sessions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Sessions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "sessions" */
export type Sessions_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Sessions_Max_Order_By>;
  min?: InputMaybe<Sessions_Min_Order_By>;
};

/** input type for inserting array relation for remote table "sessions" */
export type Sessions_Arr_Rel_Insert_Input = {
  data: Array<Sessions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Sessions_On_Conflict>;
};

/** Boolean expression to filter rows from the table "sessions". All fields are combined with a logical 'AND'. */
export type Sessions_Bool_Exp = {
  _and?: InputMaybe<Array<Sessions_Bool_Exp>>;
  _not?: InputMaybe<Sessions_Bool_Exp>;
  _or?: InputMaybe<Array<Sessions_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  expires?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  sessionToken?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "sessions" */
export enum Sessions_Constraint {
  /** unique or primary key constraint on columns "sessionToken" */
  SessionsPkey = 'sessions_pkey'
}

/** input type for inserting data into table "sessions" */
export type Sessions_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  expires?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  sessionToken?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Sessions_Max_Fields = {
  __typename?: 'sessions_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  sessionToken?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "sessions" */
export type Sessions_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  expires?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sessionToken?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Sessions_Min_Fields = {
  __typename?: 'sessions_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  sessionToken?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "sessions" */
export type Sessions_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  expires?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sessionToken?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "sessions" */
export type Sessions_Mutation_Response = {
  __typename?: 'sessions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Sessions>;
};

/** on_conflict condition type for table "sessions" */
export type Sessions_On_Conflict = {
  constraint: Sessions_Constraint;
  update_columns?: Array<Sessions_Update_Column>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

/** Ordering options when selecting data from "sessions". */
export type Sessions_Order_By = {
  created_at?: InputMaybe<Order_By>;
  expires?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sessionToken?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: sessions */
export type Sessions_Pk_Columns_Input = {
  sessionToken: Scalars['String'];
};

/** select columns of table "sessions" */
export enum Sessions_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  SessionToken = 'sessionToken',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "sessions" */
export type Sessions_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  expires?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  sessionToken?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "sessions" */
export type Sessions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Sessions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Sessions_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  expires?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  sessionToken?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "sessions" */
export enum Sessions_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  SessionToken = 'sessionToken',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'userId'
}

export type Sessions_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Sessions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Sessions_Bool_Exp;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  accounts: Array<Accounts>;
  /** An aggregate relationship */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table in a streaming manner: "accounts" */
  accounts_stream: Array<Accounts>;
  /** fetch data from the table: "brand" */
  brand: Array<Brand>;
  /** fetch aggregated fields from the table: "brand" */
  brand_aggregate: Brand_Aggregate;
  /** fetch data from the table: "brand" using primary key columns */
  brand_by_pk?: Maybe<Brand>;
  /** fetch data from the table in a streaming manner: "brand" */
  brand_stream: Array<Brand>;
  /** fetch data from the table: "otp" */
  otp: Array<Otp>;
  /** fetch aggregated fields from the table: "otp" */
  otp_aggregate: Otp_Aggregate;
  /** fetch data from the table: "otp" using primary key columns */
  otp_by_pk?: Maybe<Otp>;
  /** fetch data from the table in a streaming manner: "otp" */
  otp_stream: Array<Otp>;
  /** fetch data from the table: "provider_type" */
  provider_type: Array<Provider_Type>;
  /** fetch aggregated fields from the table: "provider_type" */
  provider_type_aggregate: Provider_Type_Aggregate;
  /** fetch data from the table: "provider_type" using primary key columns */
  provider_type_by_pk?: Maybe<Provider_Type>;
  /** fetch data from the table in a streaming manner: "provider_type" */
  provider_type_stream: Array<Provider_Type>;
  /** An array relationship */
  sessions: Array<Sessions>;
  /** An aggregate relationship */
  sessions_aggregate: Sessions_Aggregate;
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk?: Maybe<Sessions>;
  /** fetch data from the table in a streaming manner: "sessions" */
  sessions_stream: Array<Sessions>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
  /** fetch data from the table: "verification_tokens" */
  verification_tokens: Array<Verification_Tokens>;
  /** fetch aggregated fields from the table: "verification_tokens" */
  verification_tokens_aggregate: Verification_Tokens_Aggregate;
  /** fetch data from the table: "verification_tokens" using primary key columns */
  verification_tokens_by_pk?: Maybe<Verification_Tokens>;
  /** fetch data from the table in a streaming manner: "verification_tokens" */
  verification_tokens_stream: Array<Verification_Tokens>;
};


export type Subscription_RootAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Subscription_RootAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Subscription_RootAccounts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAccounts_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Accounts_Stream_Cursor_Input>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
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


export type Subscription_RootOtpArgs = {
  distinct_on?: InputMaybe<Array<Otp_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Otp_Order_By>>;
  where?: InputMaybe<Otp_Bool_Exp>;
};


export type Subscription_RootOtp_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Otp_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Otp_Order_By>>;
  where?: InputMaybe<Otp_Bool_Exp>;
};


export type Subscription_RootOtp_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootOtp_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Otp_Stream_Cursor_Input>>;
  where?: InputMaybe<Otp_Bool_Exp>;
};


export type Subscription_RootProvider_TypeArgs = {
  distinct_on?: InputMaybe<Array<Provider_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Type_Order_By>>;
  where?: InputMaybe<Provider_Type_Bool_Exp>;
};


export type Subscription_RootProvider_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Provider_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Type_Order_By>>;
  where?: InputMaybe<Provider_Type_Bool_Exp>;
};


export type Subscription_RootProvider_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootProvider_Type_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Provider_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Provider_Type_Bool_Exp>;
};


export type Subscription_RootSessionsArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};


export type Subscription_RootSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};


export type Subscription_RootSessions_By_PkArgs = {
  sessionToken: Scalars['String'];
};


export type Subscription_RootSessions_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Sessions_Stream_Cursor_Input>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootVerification_TokensArgs = {
  distinct_on?: InputMaybe<Array<Verification_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Verification_Tokens_Order_By>>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};


export type Subscription_RootVerification_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Verification_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Verification_Tokens_Order_By>>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};


export type Subscription_RootVerification_Tokens_By_PkArgs = {
  token: Scalars['String'];
};


export type Subscription_RootVerification_Tokens_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Verification_Tokens_Stream_Cursor_Input>>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
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

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  /** An array relationship */
  accounts: Array<Accounts>;
  /** An aggregate relationship */
  accounts_aggregate: Accounts_Aggregate;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  phoneVerified?: Maybe<Scalars['timestamptz']>;
  /** An array relationship */
  sessions: Array<Sessions>;
  /** An aggregate relationship */
  sessions_aggregate: Sessions_Aggregate;
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "users" */
export type UsersAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersSessionsArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
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
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  accounts?: InputMaybe<Accounts_Bool_Exp>;
  accounts_aggregate?: InputMaybe<Accounts_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  emailVerified?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  phoneVerified?: InputMaybe<Timestamptz_Comparison_Exp>;
  sessions?: InputMaybe<Sessions_Bool_Exp>;
  sessions_aggregate?: InputMaybe<Sessions_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  accounts?: InputMaybe<Accounts_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phoneVerified?: InputMaybe<Scalars['timestamptz']>;
  sessions?: InputMaybe<Sessions_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  phoneVerified?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  phoneVerified?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  accounts_aggregate?: InputMaybe<Accounts_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  emailVerified?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  phoneVerified?: InputMaybe<Order_By>;
  sessions_aggregate?: InputMaybe<Sessions_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  Phone = 'phone',
  /** column name */
  PhoneVerified = 'phoneVerified',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phoneVerified?: InputMaybe<Scalars['timestamptz']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phoneVerified?: InputMaybe<Scalars['timestamptz']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  Phone = 'phone',
  /** column name */
  PhoneVerified = 'phoneVerified',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

/** columns and relationships of "verification_tokens" */
export type Verification_Tokens = {
  __typename?: 'verification_tokens';
  created_at?: Maybe<Scalars['timestamptz']>;
  expires: Scalars['timestamptz'];
  identifier: Scalars['String'];
  token: Scalars['String'];
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "verification_tokens" */
export type Verification_Tokens_Aggregate = {
  __typename?: 'verification_tokens_aggregate';
  aggregate?: Maybe<Verification_Tokens_Aggregate_Fields>;
  nodes: Array<Verification_Tokens>;
};

/** aggregate fields of "verification_tokens" */
export type Verification_Tokens_Aggregate_Fields = {
  __typename?: 'verification_tokens_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Verification_Tokens_Max_Fields>;
  min?: Maybe<Verification_Tokens_Min_Fields>;
};


/** aggregate fields of "verification_tokens" */
export type Verification_Tokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Verification_Tokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "verification_tokens". All fields are combined with a logical 'AND'. */
export type Verification_Tokens_Bool_Exp = {
  _and?: InputMaybe<Array<Verification_Tokens_Bool_Exp>>;
  _not?: InputMaybe<Verification_Tokens_Bool_Exp>;
  _or?: InputMaybe<Array<Verification_Tokens_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  expires?: InputMaybe<Timestamptz_Comparison_Exp>;
  identifier?: InputMaybe<String_Comparison_Exp>;
  token?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "verification_tokens" */
export enum Verification_Tokens_Constraint {
  /** unique or primary key constraint on columns "token" */
  VerificationTokensPkey = 'verification_tokens_pkey'
}

/** input type for inserting data into table "verification_tokens" */
export type Verification_Tokens_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  expires?: InputMaybe<Scalars['timestamptz']>;
  identifier?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Verification_Tokens_Max_Fields = {
  __typename?: 'verification_tokens_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  expires?: Maybe<Scalars['timestamptz']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Verification_Tokens_Min_Fields = {
  __typename?: 'verification_tokens_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  expires?: Maybe<Scalars['timestamptz']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "verification_tokens" */
export type Verification_Tokens_Mutation_Response = {
  __typename?: 'verification_tokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Verification_Tokens>;
};

/** on_conflict condition type for table "verification_tokens" */
export type Verification_Tokens_On_Conflict = {
  constraint: Verification_Tokens_Constraint;
  update_columns?: Array<Verification_Tokens_Update_Column>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};

/** Ordering options when selecting data from "verification_tokens". */
export type Verification_Tokens_Order_By = {
  created_at?: InputMaybe<Order_By>;
  expires?: InputMaybe<Order_By>;
  identifier?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: verification_tokens */
export type Verification_Tokens_Pk_Columns_Input = {
  token: Scalars['String'];
};

/** select columns of table "verification_tokens" */
export enum Verification_Tokens_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Expires = 'expires',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  Token = 'token',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "verification_tokens" */
export type Verification_Tokens_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  expires?: InputMaybe<Scalars['timestamptz']>;
  identifier?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "verification_tokens" */
export type Verification_Tokens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Verification_Tokens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Verification_Tokens_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  expires?: InputMaybe<Scalars['timestamptz']>;
  identifier?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "verification_tokens" */
export enum Verification_Tokens_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Expires = 'expires',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  Token = 'token',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Verification_Tokens_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Verification_Tokens_Set_Input>;
  /** filter the rows which have to be updated */
  where: Verification_Tokens_Bool_Exp;
};

export type InsertUsersMutationVariables = Exact<{
  object: Users_Insert_Input;
}>;


export type InsertUsersMutation = { __typename?: 'mutation_root', insert_users_one?: { __typename?: 'users', id: any, emailVerified?: any | null, email?: string | null, created_at?: any | null, image?: string | null, name?: string | null, password?: string | null, phone?: string | null, phoneVerified?: any | null, updated_at?: any | null } | null };

export type Insert_OtpMutationVariables = Exact<{
  object: Otp_Insert_Input;
}>;


export type Insert_OtpMutation = { __typename?: 'mutation_root', insert_otp_one?: { __typename?: 'otp', created_at: any } | null };

export type DeleteOtpMutationVariables = Exact<{
  userId: Scalars['uuid'];
  tokenType?: InputMaybe<Scalars['String']>;
}>;


export type DeleteOtpMutation = { __typename?: 'mutation_root', delete_otp?: { __typename?: 'otp_mutation_response', affected_rows: number } | null };

export type UpdateUserMutationVariables = Exact<{
  _set: Users_Set_Input;
  userId: Scalars['uuid'];
}>;


export type UpdateUserMutation = { __typename?: 'mutation_root', update_users_by_pk?: { __typename?: 'users', updated_at?: any | null } | null };

export type GetBrandQueryVariables = Exact<{
  title: Scalars['String'];
}>;


export type GetBrandQuery = { __typename?: 'query_root', brand: Array<{ __typename?: 'brand', id: number, title: string, logo?: any | null, metaData?: any | null, phone: string, email: string, location?: string | null }> };

export type GetUserQueryVariables = Exact<{
  where: Users_Bool_Exp;
}>;


export type GetUserQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: any, email?: string | null, image?: string | null, name?: string | null, password?: string | null, phone?: string | null, emailVerified?: any | null, phoneVerified?: any | null, accounts: Array<{ __typename?: 'accounts', provider: string }> }> };

export type SessionTokenByPkQueryVariables = Exact<{
  sessionToken: Scalars['String'];
}>;


export type SessionTokenByPkQuery = { __typename?: 'query_root', sessions_by_pk?: { __typename?: 'sessions', sessionToken: string, userId: any, expires: any } | null };

export type GetOtpByUserIdQueryVariables = Exact<{
  userId: Scalars['uuid'];
  tokenType?: InputMaybe<Scalars['String']>;
}>;


export type GetOtpByUserIdQuery = { __typename?: 'query_root', otp: Array<{ __typename?: 'otp', id: number, token: string, created_at: any, updated_at: any, userId: any, isValid?: boolean | null }> };


export const InsertUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertUsers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"users_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_users_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"phoneVerified"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<InsertUsersMutation, InsertUsersMutationVariables>;
export const Insert_OtpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"INSERT_OTP"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"otp_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_otp_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}}]}}]} as unknown as DocumentNode<Insert_OtpMutation, Insert_OtpMutationVariables>;
export const DeleteOtpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteOTP"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tokenType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"OTP","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_otp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"tokenType"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tokenType"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}}]} as unknown as DocumentNode<DeleteOtpMutation, DeleteOtpMutationVariables>;
export const UpdateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_set"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"users_set_input"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_users_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_set"}}},{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const GetBrandDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBrand"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brand"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"metaData"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"location"}}]}}]}}]} as unknown as DocumentNode<GetBrandQuery, GetBrandQueryVariables>;
export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"users_bool_exp"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"phoneVerified"}},{"kind":"Field","name":{"kind":"Name","value":"accounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"provider"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;
export const SessionTokenByPkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SessionTokenByPk"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sessionToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sessions_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sessionToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sessionToken"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sessionToken"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"expires"}}]}}]}}]} as unknown as DocumentNode<SessionTokenByPkQuery, SessionTokenByPkQueryVariables>;
export const GetOtpByUserIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOtpByUserId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tokenType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"OTP","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"otp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"isValid"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"tokenType"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tokenType"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"desc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"isValid"}}]}}]}}]} as unknown as DocumentNode<GetOtpByUserIdQuery, GetOtpByUserIdQueryVariables>;