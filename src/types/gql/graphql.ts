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
  date: any;
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

/** This will store information about flight booking */
export type Booking_Flights = {
  __typename?: 'booking_flights';
  id: Scalars['uuid'];
  meta?: Maybe<Scalars['jsonb']>;
  /** An object relationship */
  paymentMethod?: Maybe<Payment_AvailablePaymentMethods>;
  paymentMethodId?: Maybe<Scalars['Int']>;
  provider: Scalars['String'];
  providerOfferDetails: Scalars['jsonb'];
  providerOfferId: Scalars['String'];
  status: Scalars['String'];
  /** An object relationship */
  user?: Maybe<Users>;
  userId: Scalars['uuid'];
};


/** This will store information about flight booking */
export type Booking_FlightsMetaArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** This will store information about flight booking */
export type Booking_FlightsProviderOfferDetailsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "booking.flights" */
export type Booking_Flights_Aggregate = {
  __typename?: 'booking_flights_aggregate';
  aggregate?: Maybe<Booking_Flights_Aggregate_Fields>;
  nodes: Array<Booking_Flights>;
};

/** aggregate fields of "booking.flights" */
export type Booking_Flights_Aggregate_Fields = {
  __typename?: 'booking_flights_aggregate_fields';
  avg?: Maybe<Booking_Flights_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Booking_Flights_Max_Fields>;
  min?: Maybe<Booking_Flights_Min_Fields>;
  stddev?: Maybe<Booking_Flights_Stddev_Fields>;
  stddev_pop?: Maybe<Booking_Flights_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Booking_Flights_Stddev_Samp_Fields>;
  sum?: Maybe<Booking_Flights_Sum_Fields>;
  var_pop?: Maybe<Booking_Flights_Var_Pop_Fields>;
  var_samp?: Maybe<Booking_Flights_Var_Samp_Fields>;
  variance?: Maybe<Booking_Flights_Variance_Fields>;
};


/** aggregate fields of "booking.flights" */
export type Booking_Flights_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Booking_Flights_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Booking_Flights_Append_Input = {
  meta?: InputMaybe<Scalars['jsonb']>;
  providerOfferDetails?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Booking_Flights_Avg_Fields = {
  __typename?: 'booking_flights_avg_fields';
  paymentMethodId?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "booking.flights". All fields are combined with a logical 'AND'. */
export type Booking_Flights_Bool_Exp = {
  _and?: InputMaybe<Array<Booking_Flights_Bool_Exp>>;
  _not?: InputMaybe<Booking_Flights_Bool_Exp>;
  _or?: InputMaybe<Array<Booking_Flights_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  meta?: InputMaybe<Jsonb_Comparison_Exp>;
  paymentMethod?: InputMaybe<Payment_AvailablePaymentMethods_Bool_Exp>;
  paymentMethodId?: InputMaybe<Int_Comparison_Exp>;
  provider?: InputMaybe<String_Comparison_Exp>;
  providerOfferDetails?: InputMaybe<Jsonb_Comparison_Exp>;
  providerOfferId?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "booking.flights" */
export enum Booking_Flights_Constraint {
  /** unique or primary key constraint on columns "id" */
  FlightsPkey = 'flights_pkey',
  /** unique or primary key constraint on columns "userId", "providerOfferId" */
  FlightsProviderOfferIdUserIdKey = 'flights_providerOfferId_userId_key'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Booking_Flights_Delete_At_Path_Input = {
  meta?: InputMaybe<Array<Scalars['String']>>;
  providerOfferDetails?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Booking_Flights_Delete_Elem_Input = {
  meta?: InputMaybe<Scalars['Int']>;
  providerOfferDetails?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Booking_Flights_Delete_Key_Input = {
  meta?: InputMaybe<Scalars['String']>;
  providerOfferDetails?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "booking.flights" */
export type Booking_Flights_Inc_Input = {
  paymentMethodId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "booking.flights" */
export type Booking_Flights_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  meta?: InputMaybe<Scalars['jsonb']>;
  paymentMethod?: InputMaybe<Payment_AvailablePaymentMethods_Obj_Rel_Insert_Input>;
  paymentMethodId?: InputMaybe<Scalars['Int']>;
  provider?: InputMaybe<Scalars['String']>;
  providerOfferDetails?: InputMaybe<Scalars['jsonb']>;
  providerOfferId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Booking_Flights_Max_Fields = {
  __typename?: 'booking_flights_max_fields';
  id?: Maybe<Scalars['uuid']>;
  paymentMethodId?: Maybe<Scalars['Int']>;
  provider?: Maybe<Scalars['String']>;
  providerOfferId?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Booking_Flights_Min_Fields = {
  __typename?: 'booking_flights_min_fields';
  id?: Maybe<Scalars['uuid']>;
  paymentMethodId?: Maybe<Scalars['Int']>;
  provider?: Maybe<Scalars['String']>;
  providerOfferId?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "booking.flights" */
export type Booking_Flights_Mutation_Response = {
  __typename?: 'booking_flights_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Booking_Flights>;
};

/** on_conflict condition type for table "booking.flights" */
export type Booking_Flights_On_Conflict = {
  constraint: Booking_Flights_Constraint;
  update_columns?: Array<Booking_Flights_Update_Column>;
  where?: InputMaybe<Booking_Flights_Bool_Exp>;
};

/** Ordering options when selecting data from "booking.flights". */
export type Booking_Flights_Order_By = {
  id?: InputMaybe<Order_By>;
  meta?: InputMaybe<Order_By>;
  paymentMethod?: InputMaybe<Payment_AvailablePaymentMethods_Order_By>;
  paymentMethodId?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  providerOfferDetails?: InputMaybe<Order_By>;
  providerOfferId?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: booking.flights */
export type Booking_Flights_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Booking_Flights_Prepend_Input = {
  meta?: InputMaybe<Scalars['jsonb']>;
  providerOfferDetails?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "booking.flights" */
export enum Booking_Flights_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Meta = 'meta',
  /** column name */
  PaymentMethodId = 'paymentMethodId',
  /** column name */
  Provider = 'provider',
  /** column name */
  ProviderOfferDetails = 'providerOfferDetails',
  /** column name */
  ProviderOfferId = 'providerOfferId',
  /** column name */
  Status = 'status',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "booking.flights" */
export type Booking_Flights_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  meta?: InputMaybe<Scalars['jsonb']>;
  paymentMethodId?: InputMaybe<Scalars['Int']>;
  provider?: InputMaybe<Scalars['String']>;
  providerOfferDetails?: InputMaybe<Scalars['jsonb']>;
  providerOfferId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Booking_Flights_Stddev_Fields = {
  __typename?: 'booking_flights_stddev_fields';
  paymentMethodId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Booking_Flights_Stddev_Pop_Fields = {
  __typename?: 'booking_flights_stddev_pop_fields';
  paymentMethodId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Booking_Flights_Stddev_Samp_Fields = {
  __typename?: 'booking_flights_stddev_samp_fields';
  paymentMethodId?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "booking_flights" */
export type Booking_Flights_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Booking_Flights_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Booking_Flights_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  meta?: InputMaybe<Scalars['jsonb']>;
  paymentMethodId?: InputMaybe<Scalars['Int']>;
  provider?: InputMaybe<Scalars['String']>;
  providerOfferDetails?: InputMaybe<Scalars['jsonb']>;
  providerOfferId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Booking_Flights_Sum_Fields = {
  __typename?: 'booking_flights_sum_fields';
  paymentMethodId?: Maybe<Scalars['Int']>;
};

/** update columns of table "booking.flights" */
export enum Booking_Flights_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Meta = 'meta',
  /** column name */
  PaymentMethodId = 'paymentMethodId',
  /** column name */
  Provider = 'provider',
  /** column name */
  ProviderOfferDetails = 'providerOfferDetails',
  /** column name */
  ProviderOfferId = 'providerOfferId',
  /** column name */
  Status = 'status',
  /** column name */
  UserId = 'userId'
}

export type Booking_Flights_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Booking_Flights_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Booking_Flights_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Booking_Flights_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Booking_Flights_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Booking_Flights_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Booking_Flights_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Booking_Flights_Set_Input>;
  /** filter the rows which have to be updated */
  where: Booking_Flights_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Booking_Flights_Var_Pop_Fields = {
  __typename?: 'booking_flights_var_pop_fields';
  paymentMethodId?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Booking_Flights_Var_Samp_Fields = {
  __typename?: 'booking_flights_var_samp_fields';
  paymentMethodId?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Booking_Flights_Variance_Fields = {
  __typename?: 'booking_flights_variance_fields';
  paymentMethodId?: Maybe<Scalars['Float']>;
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

/** columns and relationships of "customer.details" */
export type Customer_Details = {
  __typename?: 'customer_details';
  avatar?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  dateOfBirth?: Maybe<Scalars['date']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  identityDocuments?: Maybe<Scalars['jsonb']>;
  lastName?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  userId: Scalars['uuid'];
};


/** columns and relationships of "customer.details" */
export type Customer_DetailsIdentityDocumentsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "customer.details" */
export type Customer_Details_Aggregate = {
  __typename?: 'customer_details_aggregate';
  aggregate?: Maybe<Customer_Details_Aggregate_Fields>;
  nodes: Array<Customer_Details>;
};

/** aggregate fields of "customer.details" */
export type Customer_Details_Aggregate_Fields = {
  __typename?: 'customer_details_aggregate_fields';
  avg?: Maybe<Customer_Details_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Customer_Details_Max_Fields>;
  min?: Maybe<Customer_Details_Min_Fields>;
  stddev?: Maybe<Customer_Details_Stddev_Fields>;
  stddev_pop?: Maybe<Customer_Details_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Customer_Details_Stddev_Samp_Fields>;
  sum?: Maybe<Customer_Details_Sum_Fields>;
  var_pop?: Maybe<Customer_Details_Var_Pop_Fields>;
  var_samp?: Maybe<Customer_Details_Var_Samp_Fields>;
  variance?: Maybe<Customer_Details_Variance_Fields>;
};


/** aggregate fields of "customer.details" */
export type Customer_Details_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Customer_Details_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Customer_Details_Append_Input = {
  identityDocuments?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Customer_Details_Avg_Fields = {
  __typename?: 'customer_details_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "customer.details". All fields are combined with a logical 'AND'. */
export type Customer_Details_Bool_Exp = {
  _and?: InputMaybe<Array<Customer_Details_Bool_Exp>>;
  _not?: InputMaybe<Customer_Details_Bool_Exp>;
  _or?: InputMaybe<Array<Customer_Details_Bool_Exp>>;
  avatar?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  dateOfBirth?: InputMaybe<Date_Comparison_Exp>;
  firstName?: InputMaybe<String_Comparison_Exp>;
  gender?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  identityDocuments?: InputMaybe<Jsonb_Comparison_Exp>;
  lastName?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "customer.details" */
export enum Customer_Details_Constraint {
  /** unique or primary key constraint on columns "id" */
  DetailsPkey = 'details_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Customer_Details_Delete_At_Path_Input = {
  identityDocuments?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Customer_Details_Delete_Elem_Input = {
  identityDocuments?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Customer_Details_Delete_Key_Input = {
  identityDocuments?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "customer.details" */
export type Customer_Details_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "customer.details" */
export type Customer_Details_Insert_Input = {
  avatar?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  dateOfBirth?: InputMaybe<Scalars['date']>;
  firstName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  identityDocuments?: InputMaybe<Scalars['jsonb']>;
  lastName?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Customer_Details_Max_Fields = {
  __typename?: 'customer_details_max_fields';
  avatar?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  dateOfBirth?: Maybe<Scalars['date']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Customer_Details_Min_Fields = {
  __typename?: 'customer_details_min_fields';
  avatar?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  dateOfBirth?: Maybe<Scalars['date']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "customer.details" */
export type Customer_Details_Mutation_Response = {
  __typename?: 'customer_details_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Customer_Details>;
};

/** input type for inserting object relation for remote table "customer.details" */
export type Customer_Details_Obj_Rel_Insert_Input = {
  data: Customer_Details_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Customer_Details_On_Conflict>;
};

/** on_conflict condition type for table "customer.details" */
export type Customer_Details_On_Conflict = {
  constraint: Customer_Details_Constraint;
  update_columns?: Array<Customer_Details_Update_Column>;
  where?: InputMaybe<Customer_Details_Bool_Exp>;
};

/** Ordering options when selecting data from "customer.details". */
export type Customer_Details_Order_By = {
  avatar?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  dateOfBirth?: InputMaybe<Order_By>;
  firstName?: InputMaybe<Order_By>;
  gender?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  identityDocuments?: InputMaybe<Order_By>;
  lastName?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: customer.details */
export type Customer_Details_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Customer_Details_Prepend_Input = {
  identityDocuments?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "customer.details" */
export enum Customer_Details_Select_Column {
  /** column name */
  Avatar = 'avatar',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DateOfBirth = 'dateOfBirth',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Gender = 'gender',
  /** column name */
  Id = 'id',
  /** column name */
  IdentityDocuments = 'identityDocuments',
  /** column name */
  LastName = 'lastName',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "customer.details" */
export type Customer_Details_Set_Input = {
  avatar?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  dateOfBirth?: InputMaybe<Scalars['date']>;
  firstName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  identityDocuments?: InputMaybe<Scalars['jsonb']>;
  lastName?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Customer_Details_Stddev_Fields = {
  __typename?: 'customer_details_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Customer_Details_Stddev_Pop_Fields = {
  __typename?: 'customer_details_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Customer_Details_Stddev_Samp_Fields = {
  __typename?: 'customer_details_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "customer_details" */
export type Customer_Details_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Customer_Details_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Customer_Details_Stream_Cursor_Value_Input = {
  avatar?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  dateOfBirth?: InputMaybe<Scalars['date']>;
  firstName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  identityDocuments?: InputMaybe<Scalars['jsonb']>;
  lastName?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Customer_Details_Sum_Fields = {
  __typename?: 'customer_details_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "customer.details" */
export enum Customer_Details_Update_Column {
  /** column name */
  Avatar = 'avatar',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DateOfBirth = 'dateOfBirth',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Gender = 'gender',
  /** column name */
  Id = 'id',
  /** column name */
  IdentityDocuments = 'identityDocuments',
  /** column name */
  LastName = 'lastName',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'userId'
}

export type Customer_Details_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Customer_Details_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Customer_Details_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Customer_Details_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Customer_Details_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Customer_Details_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Customer_Details_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Customer_Details_Set_Input>;
  /** filter the rows which have to be updated */
  where: Customer_Details_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Customer_Details_Var_Pop_Fields = {
  __typename?: 'customer_details_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Customer_Details_Var_Samp_Fields = {
  __typename?: 'customer_details_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Customer_Details_Variance_Fields = {
  __typename?: 'customer_details_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

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
  /** delete data from the table: "booking.flights" */
  delete_booking_flights?: Maybe<Booking_Flights_Mutation_Response>;
  /** delete single row from the table: "booking.flights" */
  delete_booking_flights_by_pk?: Maybe<Booking_Flights>;
  /** delete data from the table: "brand" */
  delete_brand?: Maybe<Brand_Mutation_Response>;
  /** delete single row from the table: "brand" */
  delete_brand_by_pk?: Maybe<Brand>;
  /** delete data from the table: "customer.details" */
  delete_customer_details?: Maybe<Customer_Details_Mutation_Response>;
  /** delete single row from the table: "customer.details" */
  delete_customer_details_by_pk?: Maybe<Customer_Details>;
  /** delete data from the table: "otp" */
  delete_otp?: Maybe<Otp_Mutation_Response>;
  /** delete single row from the table: "otp" */
  delete_otp_by_pk?: Maybe<Otp>;
  /** delete data from the table: "payment.availablePaymentMethods" */
  delete_payment_availablePaymentMethods?: Maybe<Payment_AvailablePaymentMethods_Mutation_Response>;
  /** delete single row from the table: "payment.availablePaymentMethods" */
  delete_payment_availablePaymentMethods_by_pk?: Maybe<Payment_AvailablePaymentMethods>;
  /** delete data from the table: "payment.refunds" */
  delete_payment_refunds?: Maybe<Payment_Refunds_Mutation_Response>;
  /** delete single row from the table: "payment.refunds" */
  delete_payment_refunds_by_pk?: Maybe<Payment_Refunds>;
  /** delete data from the table: "payment.transactionLogs" */
  delete_payment_transactionLogs?: Maybe<Payment_TransactionLogs_Mutation_Response>;
  /** delete single row from the table: "payment.transactionLogs" */
  delete_payment_transactionLogs_by_pk?: Maybe<Payment_TransactionLogs>;
  /** delete data from the table: "payment.transactions" */
  delete_payment_transactions?: Maybe<Payment_Transactions_Mutation_Response>;
  /** delete single row from the table: "payment.transactions" */
  delete_payment_transactions_by_pk?: Maybe<Payment_Transactions>;
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
  /** insert data into the table: "booking.flights" */
  insert_booking_flights?: Maybe<Booking_Flights_Mutation_Response>;
  /** insert a single row into the table: "booking.flights" */
  insert_booking_flights_one?: Maybe<Booking_Flights>;
  /** insert data into the table: "brand" */
  insert_brand?: Maybe<Brand_Mutation_Response>;
  /** insert a single row into the table: "brand" */
  insert_brand_one?: Maybe<Brand>;
  /** insert data into the table: "customer.details" */
  insert_customer_details?: Maybe<Customer_Details_Mutation_Response>;
  /** insert a single row into the table: "customer.details" */
  insert_customer_details_one?: Maybe<Customer_Details>;
  /** insert data into the table: "otp" */
  insert_otp?: Maybe<Otp_Mutation_Response>;
  /** insert a single row into the table: "otp" */
  insert_otp_one?: Maybe<Otp>;
  /** insert data into the table: "payment.availablePaymentMethods" */
  insert_payment_availablePaymentMethods?: Maybe<Payment_AvailablePaymentMethods_Mutation_Response>;
  /** insert a single row into the table: "payment.availablePaymentMethods" */
  insert_payment_availablePaymentMethods_one?: Maybe<Payment_AvailablePaymentMethods>;
  /** insert data into the table: "payment.refunds" */
  insert_payment_refunds?: Maybe<Payment_Refunds_Mutation_Response>;
  /** insert a single row into the table: "payment.refunds" */
  insert_payment_refunds_one?: Maybe<Payment_Refunds>;
  /** insert data into the table: "payment.transactionLogs" */
  insert_payment_transactionLogs?: Maybe<Payment_TransactionLogs_Mutation_Response>;
  /** insert a single row into the table: "payment.transactionLogs" */
  insert_payment_transactionLogs_one?: Maybe<Payment_TransactionLogs>;
  /** insert data into the table: "payment.transactions" */
  insert_payment_transactions?: Maybe<Payment_Transactions_Mutation_Response>;
  /** insert a single row into the table: "payment.transactions" */
  insert_payment_transactions_one?: Maybe<Payment_Transactions>;
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
  /** update data of the table: "booking.flights" */
  update_booking_flights?: Maybe<Booking_Flights_Mutation_Response>;
  /** update single row of the table: "booking.flights" */
  update_booking_flights_by_pk?: Maybe<Booking_Flights>;
  /** update multiples rows of table: "booking.flights" */
  update_booking_flights_many?: Maybe<Array<Maybe<Booking_Flights_Mutation_Response>>>;
  /** update data of the table: "brand" */
  update_brand?: Maybe<Brand_Mutation_Response>;
  /** update single row of the table: "brand" */
  update_brand_by_pk?: Maybe<Brand>;
  /** update multiples rows of table: "brand" */
  update_brand_many?: Maybe<Array<Maybe<Brand_Mutation_Response>>>;
  /** update data of the table: "customer.details" */
  update_customer_details?: Maybe<Customer_Details_Mutation_Response>;
  /** update single row of the table: "customer.details" */
  update_customer_details_by_pk?: Maybe<Customer_Details>;
  /** update multiples rows of table: "customer.details" */
  update_customer_details_many?: Maybe<Array<Maybe<Customer_Details_Mutation_Response>>>;
  /** update data of the table: "otp" */
  update_otp?: Maybe<Otp_Mutation_Response>;
  /** update single row of the table: "otp" */
  update_otp_by_pk?: Maybe<Otp>;
  /** update multiples rows of table: "otp" */
  update_otp_many?: Maybe<Array<Maybe<Otp_Mutation_Response>>>;
  /** update data of the table: "payment.availablePaymentMethods" */
  update_payment_availablePaymentMethods?: Maybe<Payment_AvailablePaymentMethods_Mutation_Response>;
  /** update single row of the table: "payment.availablePaymentMethods" */
  update_payment_availablePaymentMethods_by_pk?: Maybe<Payment_AvailablePaymentMethods>;
  /** update multiples rows of table: "payment.availablePaymentMethods" */
  update_payment_availablePaymentMethods_many?: Maybe<Array<Maybe<Payment_AvailablePaymentMethods_Mutation_Response>>>;
  /** update data of the table: "payment.refunds" */
  update_payment_refunds?: Maybe<Payment_Refunds_Mutation_Response>;
  /** update single row of the table: "payment.refunds" */
  update_payment_refunds_by_pk?: Maybe<Payment_Refunds>;
  /** update multiples rows of table: "payment.refunds" */
  update_payment_refunds_many?: Maybe<Array<Maybe<Payment_Refunds_Mutation_Response>>>;
  /** update data of the table: "payment.transactionLogs" */
  update_payment_transactionLogs?: Maybe<Payment_TransactionLogs_Mutation_Response>;
  /** update single row of the table: "payment.transactionLogs" */
  update_payment_transactionLogs_by_pk?: Maybe<Payment_TransactionLogs>;
  /** update multiples rows of table: "payment.transactionLogs" */
  update_payment_transactionLogs_many?: Maybe<Array<Maybe<Payment_TransactionLogs_Mutation_Response>>>;
  /** update data of the table: "payment.transactions" */
  update_payment_transactions?: Maybe<Payment_Transactions_Mutation_Response>;
  /** update single row of the table: "payment.transactions" */
  update_payment_transactions_by_pk?: Maybe<Payment_Transactions>;
  /** update multiples rows of table: "payment.transactions" */
  update_payment_transactions_many?: Maybe<Array<Maybe<Payment_Transactions_Mutation_Response>>>;
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
export type Mutation_RootDelete_Booking_FlightsArgs = {
  where: Booking_Flights_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Booking_Flights_By_PkArgs = {
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
export type Mutation_RootDelete_Customer_DetailsArgs = {
  where: Customer_Details_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Customer_Details_By_PkArgs = {
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
export type Mutation_RootDelete_Payment_AvailablePaymentMethodsArgs = {
  where: Payment_AvailablePaymentMethods_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Payment_AvailablePaymentMethods_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Payment_RefundsArgs = {
  where: Payment_Refunds_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Payment_Refunds_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Payment_TransactionLogsArgs = {
  where: Payment_TransactionLogs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Payment_TransactionLogs_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Payment_TransactionsArgs = {
  where: Payment_Transactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Payment_Transactions_By_PkArgs = {
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
export type Mutation_RootInsert_Booking_FlightsArgs = {
  objects: Array<Booking_Flights_Insert_Input>;
  on_conflict?: InputMaybe<Booking_Flights_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Booking_Flights_OneArgs = {
  object: Booking_Flights_Insert_Input;
  on_conflict?: InputMaybe<Booking_Flights_On_Conflict>;
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
export type Mutation_RootInsert_Customer_DetailsArgs = {
  objects: Array<Customer_Details_Insert_Input>;
  on_conflict?: InputMaybe<Customer_Details_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Customer_Details_OneArgs = {
  object: Customer_Details_Insert_Input;
  on_conflict?: InputMaybe<Customer_Details_On_Conflict>;
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
export type Mutation_RootInsert_Payment_AvailablePaymentMethodsArgs = {
  objects: Array<Payment_AvailablePaymentMethods_Insert_Input>;
  on_conflict?: InputMaybe<Payment_AvailablePaymentMethods_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Payment_AvailablePaymentMethods_OneArgs = {
  object: Payment_AvailablePaymentMethods_Insert_Input;
  on_conflict?: InputMaybe<Payment_AvailablePaymentMethods_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Payment_RefundsArgs = {
  objects: Array<Payment_Refunds_Insert_Input>;
  on_conflict?: InputMaybe<Payment_Refunds_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Payment_Refunds_OneArgs = {
  object: Payment_Refunds_Insert_Input;
  on_conflict?: InputMaybe<Payment_Refunds_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Payment_TransactionLogsArgs = {
  objects: Array<Payment_TransactionLogs_Insert_Input>;
  on_conflict?: InputMaybe<Payment_TransactionLogs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Payment_TransactionLogs_OneArgs = {
  object: Payment_TransactionLogs_Insert_Input;
  on_conflict?: InputMaybe<Payment_TransactionLogs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Payment_TransactionsArgs = {
  objects: Array<Payment_Transactions_Insert_Input>;
  on_conflict?: InputMaybe<Payment_Transactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Payment_Transactions_OneArgs = {
  object: Payment_Transactions_Insert_Input;
  on_conflict?: InputMaybe<Payment_Transactions_On_Conflict>;
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
export type Mutation_RootUpdate_Booking_FlightsArgs = {
  _append?: InputMaybe<Booking_Flights_Append_Input>;
  _delete_at_path?: InputMaybe<Booking_Flights_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Booking_Flights_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Booking_Flights_Delete_Key_Input>;
  _inc?: InputMaybe<Booking_Flights_Inc_Input>;
  _prepend?: InputMaybe<Booking_Flights_Prepend_Input>;
  _set?: InputMaybe<Booking_Flights_Set_Input>;
  where: Booking_Flights_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Booking_Flights_By_PkArgs = {
  _append?: InputMaybe<Booking_Flights_Append_Input>;
  _delete_at_path?: InputMaybe<Booking_Flights_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Booking_Flights_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Booking_Flights_Delete_Key_Input>;
  _inc?: InputMaybe<Booking_Flights_Inc_Input>;
  _prepend?: InputMaybe<Booking_Flights_Prepend_Input>;
  _set?: InputMaybe<Booking_Flights_Set_Input>;
  pk_columns: Booking_Flights_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Booking_Flights_ManyArgs = {
  updates: Array<Booking_Flights_Updates>;
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
export type Mutation_RootUpdate_Customer_DetailsArgs = {
  _append?: InputMaybe<Customer_Details_Append_Input>;
  _delete_at_path?: InputMaybe<Customer_Details_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Customer_Details_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Customer_Details_Delete_Key_Input>;
  _inc?: InputMaybe<Customer_Details_Inc_Input>;
  _prepend?: InputMaybe<Customer_Details_Prepend_Input>;
  _set?: InputMaybe<Customer_Details_Set_Input>;
  where: Customer_Details_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Customer_Details_By_PkArgs = {
  _append?: InputMaybe<Customer_Details_Append_Input>;
  _delete_at_path?: InputMaybe<Customer_Details_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Customer_Details_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Customer_Details_Delete_Key_Input>;
  _inc?: InputMaybe<Customer_Details_Inc_Input>;
  _prepend?: InputMaybe<Customer_Details_Prepend_Input>;
  _set?: InputMaybe<Customer_Details_Set_Input>;
  pk_columns: Customer_Details_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Customer_Details_ManyArgs = {
  updates: Array<Customer_Details_Updates>;
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
export type Mutation_RootUpdate_Payment_AvailablePaymentMethodsArgs = {
  _inc?: InputMaybe<Payment_AvailablePaymentMethods_Inc_Input>;
  _set?: InputMaybe<Payment_AvailablePaymentMethods_Set_Input>;
  where: Payment_AvailablePaymentMethods_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Payment_AvailablePaymentMethods_By_PkArgs = {
  _inc?: InputMaybe<Payment_AvailablePaymentMethods_Inc_Input>;
  _set?: InputMaybe<Payment_AvailablePaymentMethods_Set_Input>;
  pk_columns: Payment_AvailablePaymentMethods_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Payment_AvailablePaymentMethods_ManyArgs = {
  updates: Array<Payment_AvailablePaymentMethods_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Payment_RefundsArgs = {
  _inc?: InputMaybe<Payment_Refunds_Inc_Input>;
  _set?: InputMaybe<Payment_Refunds_Set_Input>;
  where: Payment_Refunds_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Payment_Refunds_By_PkArgs = {
  _inc?: InputMaybe<Payment_Refunds_Inc_Input>;
  _set?: InputMaybe<Payment_Refunds_Set_Input>;
  pk_columns: Payment_Refunds_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Payment_Refunds_ManyArgs = {
  updates: Array<Payment_Refunds_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Payment_TransactionLogsArgs = {
  _append?: InputMaybe<Payment_TransactionLogs_Append_Input>;
  _delete_at_path?: InputMaybe<Payment_TransactionLogs_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Payment_TransactionLogs_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Payment_TransactionLogs_Delete_Key_Input>;
  _inc?: InputMaybe<Payment_TransactionLogs_Inc_Input>;
  _prepend?: InputMaybe<Payment_TransactionLogs_Prepend_Input>;
  _set?: InputMaybe<Payment_TransactionLogs_Set_Input>;
  where: Payment_TransactionLogs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Payment_TransactionLogs_By_PkArgs = {
  _append?: InputMaybe<Payment_TransactionLogs_Append_Input>;
  _delete_at_path?: InputMaybe<Payment_TransactionLogs_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Payment_TransactionLogs_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Payment_TransactionLogs_Delete_Key_Input>;
  _inc?: InputMaybe<Payment_TransactionLogs_Inc_Input>;
  _prepend?: InputMaybe<Payment_TransactionLogs_Prepend_Input>;
  _set?: InputMaybe<Payment_TransactionLogs_Set_Input>;
  pk_columns: Payment_TransactionLogs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Payment_TransactionLogs_ManyArgs = {
  updates: Array<Payment_TransactionLogs_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Payment_TransactionsArgs = {
  _inc?: InputMaybe<Payment_Transactions_Inc_Input>;
  _set?: InputMaybe<Payment_Transactions_Set_Input>;
  where: Payment_Transactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Payment_Transactions_By_PkArgs = {
  _inc?: InputMaybe<Payment_Transactions_Inc_Input>;
  _set?: InputMaybe<Payment_Transactions_Set_Input>;
  pk_columns: Payment_Transactions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Payment_Transactions_ManyArgs = {
  updates: Array<Payment_Transactions_Updates>;
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

/** columns and relationships of "payment.availablePaymentMethods" */
export type Payment_AvailablePaymentMethods = {
  __typename?: 'payment_availablePaymentMethods';
  created_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  isActive: Scalars['Boolean'];
  label: Scalars['String'];
  logo: Scalars['String'];
  title: Scalars['String'];
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "payment.availablePaymentMethods" */
export type Payment_AvailablePaymentMethods_Aggregate = {
  __typename?: 'payment_availablePaymentMethods_aggregate';
  aggregate?: Maybe<Payment_AvailablePaymentMethods_Aggregate_Fields>;
  nodes: Array<Payment_AvailablePaymentMethods>;
};

/** aggregate fields of "payment.availablePaymentMethods" */
export type Payment_AvailablePaymentMethods_Aggregate_Fields = {
  __typename?: 'payment_availablePaymentMethods_aggregate_fields';
  avg?: Maybe<Payment_AvailablePaymentMethods_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Payment_AvailablePaymentMethods_Max_Fields>;
  min?: Maybe<Payment_AvailablePaymentMethods_Min_Fields>;
  stddev?: Maybe<Payment_AvailablePaymentMethods_Stddev_Fields>;
  stddev_pop?: Maybe<Payment_AvailablePaymentMethods_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Payment_AvailablePaymentMethods_Stddev_Samp_Fields>;
  sum?: Maybe<Payment_AvailablePaymentMethods_Sum_Fields>;
  var_pop?: Maybe<Payment_AvailablePaymentMethods_Var_Pop_Fields>;
  var_samp?: Maybe<Payment_AvailablePaymentMethods_Var_Samp_Fields>;
  variance?: Maybe<Payment_AvailablePaymentMethods_Variance_Fields>;
};


/** aggregate fields of "payment.availablePaymentMethods" */
export type Payment_AvailablePaymentMethods_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Payment_AvailablePaymentMethods_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Payment_AvailablePaymentMethods_Avg_Fields = {
  __typename?: 'payment_availablePaymentMethods_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "payment.availablePaymentMethods". All fields are combined with a logical 'AND'. */
export type Payment_AvailablePaymentMethods_Bool_Exp = {
  _and?: InputMaybe<Array<Payment_AvailablePaymentMethods_Bool_Exp>>;
  _not?: InputMaybe<Payment_AvailablePaymentMethods_Bool_Exp>;
  _or?: InputMaybe<Array<Payment_AvailablePaymentMethods_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  isActive?: InputMaybe<Boolean_Comparison_Exp>;
  label?: InputMaybe<String_Comparison_Exp>;
  logo?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "payment.availablePaymentMethods" */
export enum Payment_AvailablePaymentMethods_Constraint {
  /** unique or primary key constraint on columns "id" */
  AvailablePaymentMethodsPkey = 'availablePaymentMethods_pkey'
}

/** input type for incrementing numeric columns in table "payment.availablePaymentMethods" */
export type Payment_AvailablePaymentMethods_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "payment.availablePaymentMethods" */
export type Payment_AvailablePaymentMethods_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  label?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Payment_AvailablePaymentMethods_Max_Fields = {
  __typename?: 'payment_availablePaymentMethods_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Payment_AvailablePaymentMethods_Min_Fields = {
  __typename?: 'payment_availablePaymentMethods_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "payment.availablePaymentMethods" */
export type Payment_AvailablePaymentMethods_Mutation_Response = {
  __typename?: 'payment_availablePaymentMethods_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Payment_AvailablePaymentMethods>;
};

/** input type for inserting object relation for remote table "payment.availablePaymentMethods" */
export type Payment_AvailablePaymentMethods_Obj_Rel_Insert_Input = {
  data: Payment_AvailablePaymentMethods_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Payment_AvailablePaymentMethods_On_Conflict>;
};

/** on_conflict condition type for table "payment.availablePaymentMethods" */
export type Payment_AvailablePaymentMethods_On_Conflict = {
  constraint: Payment_AvailablePaymentMethods_Constraint;
  update_columns?: Array<Payment_AvailablePaymentMethods_Update_Column>;
  where?: InputMaybe<Payment_AvailablePaymentMethods_Bool_Exp>;
};

/** Ordering options when selecting data from "payment.availablePaymentMethods". */
export type Payment_AvailablePaymentMethods_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isActive?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  logo?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: payment.availablePaymentMethods */
export type Payment_AvailablePaymentMethods_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "payment.availablePaymentMethods" */
export enum Payment_AvailablePaymentMethods_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'isActive',
  /** column name */
  Label = 'label',
  /** column name */
  Logo = 'logo',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "payment.availablePaymentMethods" */
export type Payment_AvailablePaymentMethods_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  label?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Payment_AvailablePaymentMethods_Stddev_Fields = {
  __typename?: 'payment_availablePaymentMethods_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Payment_AvailablePaymentMethods_Stddev_Pop_Fields = {
  __typename?: 'payment_availablePaymentMethods_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Payment_AvailablePaymentMethods_Stddev_Samp_Fields = {
  __typename?: 'payment_availablePaymentMethods_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "payment_availablePaymentMethods" */
export type Payment_AvailablePaymentMethods_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Payment_AvailablePaymentMethods_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Payment_AvailablePaymentMethods_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  label?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Payment_AvailablePaymentMethods_Sum_Fields = {
  __typename?: 'payment_availablePaymentMethods_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "payment.availablePaymentMethods" */
export enum Payment_AvailablePaymentMethods_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'isActive',
  /** column name */
  Label = 'label',
  /** column name */
  Logo = 'logo',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Payment_AvailablePaymentMethods_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Payment_AvailablePaymentMethods_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Payment_AvailablePaymentMethods_Set_Input>;
  /** filter the rows which have to be updated */
  where: Payment_AvailablePaymentMethods_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Payment_AvailablePaymentMethods_Var_Pop_Fields = {
  __typename?: 'payment_availablePaymentMethods_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Payment_AvailablePaymentMethods_Var_Samp_Fields = {
  __typename?: 'payment_availablePaymentMethods_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Payment_AvailablePaymentMethods_Variance_Fields = {
  __typename?: 'payment_availablePaymentMethods_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "payment.refunds" */
export type Payment_Refunds = {
  __typename?: 'payment_refunds';
  amout: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  status: Scalars['String'];
  transactionId: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "payment.refunds" */
export type Payment_Refunds_Aggregate = {
  __typename?: 'payment_refunds_aggregate';
  aggregate?: Maybe<Payment_Refunds_Aggregate_Fields>;
  nodes: Array<Payment_Refunds>;
};

/** aggregate fields of "payment.refunds" */
export type Payment_Refunds_Aggregate_Fields = {
  __typename?: 'payment_refunds_aggregate_fields';
  avg?: Maybe<Payment_Refunds_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Payment_Refunds_Max_Fields>;
  min?: Maybe<Payment_Refunds_Min_Fields>;
  stddev?: Maybe<Payment_Refunds_Stddev_Fields>;
  stddev_pop?: Maybe<Payment_Refunds_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Payment_Refunds_Stddev_Samp_Fields>;
  sum?: Maybe<Payment_Refunds_Sum_Fields>;
  var_pop?: Maybe<Payment_Refunds_Var_Pop_Fields>;
  var_samp?: Maybe<Payment_Refunds_Var_Samp_Fields>;
  variance?: Maybe<Payment_Refunds_Variance_Fields>;
};


/** aggregate fields of "payment.refunds" */
export type Payment_Refunds_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Payment_Refunds_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Payment_Refunds_Avg_Fields = {
  __typename?: 'payment_refunds_avg_fields';
  amout?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  transactionId?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "payment.refunds". All fields are combined with a logical 'AND'. */
export type Payment_Refunds_Bool_Exp = {
  _and?: InputMaybe<Array<Payment_Refunds_Bool_Exp>>;
  _not?: InputMaybe<Payment_Refunds_Bool_Exp>;
  _or?: InputMaybe<Array<Payment_Refunds_Bool_Exp>>;
  amout?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  transactionId?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "payment.refunds" */
export enum Payment_Refunds_Constraint {
  /** unique or primary key constraint on columns "id" */
  RefundsPkey = 'refunds_pkey'
}

/** input type for incrementing numeric columns in table "payment.refunds" */
export type Payment_Refunds_Inc_Input = {
  amout?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  transactionId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "payment.refunds" */
export type Payment_Refunds_Insert_Input = {
  amout?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  transactionId?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Payment_Refunds_Max_Fields = {
  __typename?: 'payment_refunds_max_fields';
  amout?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  transactionId?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Payment_Refunds_Min_Fields = {
  __typename?: 'payment_refunds_min_fields';
  amout?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  transactionId?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "payment.refunds" */
export type Payment_Refunds_Mutation_Response = {
  __typename?: 'payment_refunds_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Payment_Refunds>;
};

/** on_conflict condition type for table "payment.refunds" */
export type Payment_Refunds_On_Conflict = {
  constraint: Payment_Refunds_Constraint;
  update_columns?: Array<Payment_Refunds_Update_Column>;
  where?: InputMaybe<Payment_Refunds_Bool_Exp>;
};

/** Ordering options when selecting data from "payment.refunds". */
export type Payment_Refunds_Order_By = {
  amout?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  transactionId?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: payment.refunds */
export type Payment_Refunds_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "payment.refunds" */
export enum Payment_Refunds_Select_Column {
  /** column name */
  Amout = 'amout',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  TransactionId = 'transactionId',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "payment.refunds" */
export type Payment_Refunds_Set_Input = {
  amout?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  transactionId?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Payment_Refunds_Stddev_Fields = {
  __typename?: 'payment_refunds_stddev_fields';
  amout?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  transactionId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Payment_Refunds_Stddev_Pop_Fields = {
  __typename?: 'payment_refunds_stddev_pop_fields';
  amout?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  transactionId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Payment_Refunds_Stddev_Samp_Fields = {
  __typename?: 'payment_refunds_stddev_samp_fields';
  amout?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  transactionId?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "payment_refunds" */
export type Payment_Refunds_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Payment_Refunds_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Payment_Refunds_Stream_Cursor_Value_Input = {
  amout?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  transactionId?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Payment_Refunds_Sum_Fields = {
  __typename?: 'payment_refunds_sum_fields';
  amout?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  transactionId?: Maybe<Scalars['Int']>;
};

/** update columns of table "payment.refunds" */
export enum Payment_Refunds_Update_Column {
  /** column name */
  Amout = 'amout',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  TransactionId = 'transactionId',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Payment_Refunds_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Payment_Refunds_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Payment_Refunds_Set_Input>;
  /** filter the rows which have to be updated */
  where: Payment_Refunds_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Payment_Refunds_Var_Pop_Fields = {
  __typename?: 'payment_refunds_var_pop_fields';
  amout?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  transactionId?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Payment_Refunds_Var_Samp_Fields = {
  __typename?: 'payment_refunds_var_samp_fields';
  amout?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  transactionId?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Payment_Refunds_Variance_Fields = {
  __typename?: 'payment_refunds_variance_fields';
  amout?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  transactionId?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "payment.transactionLogs" */
export type Payment_TransactionLogs = {
  __typename?: 'payment_transactionLogs';
  created_at: Scalars['timestamptz'];
  details: Scalars['jsonb'];
  id: Scalars['Int'];
  status: Scalars['String'];
  transactionId: Scalars['Int'];
};


/** columns and relationships of "payment.transactionLogs" */
export type Payment_TransactionLogsDetailsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "payment.transactionLogs" */
export type Payment_TransactionLogs_Aggregate = {
  __typename?: 'payment_transactionLogs_aggregate';
  aggregate?: Maybe<Payment_TransactionLogs_Aggregate_Fields>;
  nodes: Array<Payment_TransactionLogs>;
};

/** aggregate fields of "payment.transactionLogs" */
export type Payment_TransactionLogs_Aggregate_Fields = {
  __typename?: 'payment_transactionLogs_aggregate_fields';
  avg?: Maybe<Payment_TransactionLogs_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Payment_TransactionLogs_Max_Fields>;
  min?: Maybe<Payment_TransactionLogs_Min_Fields>;
  stddev?: Maybe<Payment_TransactionLogs_Stddev_Fields>;
  stddev_pop?: Maybe<Payment_TransactionLogs_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Payment_TransactionLogs_Stddev_Samp_Fields>;
  sum?: Maybe<Payment_TransactionLogs_Sum_Fields>;
  var_pop?: Maybe<Payment_TransactionLogs_Var_Pop_Fields>;
  var_samp?: Maybe<Payment_TransactionLogs_Var_Samp_Fields>;
  variance?: Maybe<Payment_TransactionLogs_Variance_Fields>;
};


/** aggregate fields of "payment.transactionLogs" */
export type Payment_TransactionLogs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Payment_TransactionLogs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Payment_TransactionLogs_Append_Input = {
  details?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Payment_TransactionLogs_Avg_Fields = {
  __typename?: 'payment_transactionLogs_avg_fields';
  id?: Maybe<Scalars['Float']>;
  transactionId?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "payment.transactionLogs". All fields are combined with a logical 'AND'. */
export type Payment_TransactionLogs_Bool_Exp = {
  _and?: InputMaybe<Array<Payment_TransactionLogs_Bool_Exp>>;
  _not?: InputMaybe<Payment_TransactionLogs_Bool_Exp>;
  _or?: InputMaybe<Array<Payment_TransactionLogs_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  details?: InputMaybe<Jsonb_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  transactionId?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "payment.transactionLogs" */
export enum Payment_TransactionLogs_Constraint {
  /** unique or primary key constraint on columns "id" */
  TransactionLogsPkey = 'transactionLogs_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Payment_TransactionLogs_Delete_At_Path_Input = {
  details?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Payment_TransactionLogs_Delete_Elem_Input = {
  details?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Payment_TransactionLogs_Delete_Key_Input = {
  details?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "payment.transactionLogs" */
export type Payment_TransactionLogs_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  transactionId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "payment.transactionLogs" */
export type Payment_TransactionLogs_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  details?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  transactionId?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Payment_TransactionLogs_Max_Fields = {
  __typename?: 'payment_transactionLogs_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  transactionId?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Payment_TransactionLogs_Min_Fields = {
  __typename?: 'payment_transactionLogs_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  transactionId?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "payment.transactionLogs" */
export type Payment_TransactionLogs_Mutation_Response = {
  __typename?: 'payment_transactionLogs_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Payment_TransactionLogs>;
};

/** on_conflict condition type for table "payment.transactionLogs" */
export type Payment_TransactionLogs_On_Conflict = {
  constraint: Payment_TransactionLogs_Constraint;
  update_columns?: Array<Payment_TransactionLogs_Update_Column>;
  where?: InputMaybe<Payment_TransactionLogs_Bool_Exp>;
};

/** Ordering options when selecting data from "payment.transactionLogs". */
export type Payment_TransactionLogs_Order_By = {
  created_at?: InputMaybe<Order_By>;
  details?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  transactionId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: payment.transactionLogs */
export type Payment_TransactionLogs_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Payment_TransactionLogs_Prepend_Input = {
  details?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "payment.transactionLogs" */
export enum Payment_TransactionLogs_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Details = 'details',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  TransactionId = 'transactionId'
}

/** input type for updating data in table "payment.transactionLogs" */
export type Payment_TransactionLogs_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  details?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  transactionId?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Payment_TransactionLogs_Stddev_Fields = {
  __typename?: 'payment_transactionLogs_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  transactionId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Payment_TransactionLogs_Stddev_Pop_Fields = {
  __typename?: 'payment_transactionLogs_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  transactionId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Payment_TransactionLogs_Stddev_Samp_Fields = {
  __typename?: 'payment_transactionLogs_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  transactionId?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "payment_transactionLogs" */
export type Payment_TransactionLogs_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Payment_TransactionLogs_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Payment_TransactionLogs_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  details?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  transactionId?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Payment_TransactionLogs_Sum_Fields = {
  __typename?: 'payment_transactionLogs_sum_fields';
  id?: Maybe<Scalars['Int']>;
  transactionId?: Maybe<Scalars['Int']>;
};

/** update columns of table "payment.transactionLogs" */
export enum Payment_TransactionLogs_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Details = 'details',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  TransactionId = 'transactionId'
}

export type Payment_TransactionLogs_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Payment_TransactionLogs_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Payment_TransactionLogs_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Payment_TransactionLogs_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Payment_TransactionLogs_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Payment_TransactionLogs_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Payment_TransactionLogs_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Payment_TransactionLogs_Set_Input>;
  /** filter the rows which have to be updated */
  where: Payment_TransactionLogs_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Payment_TransactionLogs_Var_Pop_Fields = {
  __typename?: 'payment_transactionLogs_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  transactionId?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Payment_TransactionLogs_Var_Samp_Fields = {
  __typename?: 'payment_transactionLogs_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  transactionId?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Payment_TransactionLogs_Variance_Fields = {
  __typename?: 'payment_transactionLogs_variance_fields';
  id?: Maybe<Scalars['Float']>;
  transactionId?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "payment.transactions" */
export type Payment_Transactions = {
  __typename?: 'payment_transactions';
  amount: Scalars['Int'];
  bookingId: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  providerId?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "payment.transactions" */
export type Payment_Transactions_Aggregate = {
  __typename?: 'payment_transactions_aggregate';
  aggregate?: Maybe<Payment_Transactions_Aggregate_Fields>;
  nodes: Array<Payment_Transactions>;
};

/** aggregate fields of "payment.transactions" */
export type Payment_Transactions_Aggregate_Fields = {
  __typename?: 'payment_transactions_aggregate_fields';
  avg?: Maybe<Payment_Transactions_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Payment_Transactions_Max_Fields>;
  min?: Maybe<Payment_Transactions_Min_Fields>;
  stddev?: Maybe<Payment_Transactions_Stddev_Fields>;
  stddev_pop?: Maybe<Payment_Transactions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Payment_Transactions_Stddev_Samp_Fields>;
  sum?: Maybe<Payment_Transactions_Sum_Fields>;
  var_pop?: Maybe<Payment_Transactions_Var_Pop_Fields>;
  var_samp?: Maybe<Payment_Transactions_Var_Samp_Fields>;
  variance?: Maybe<Payment_Transactions_Variance_Fields>;
};


/** aggregate fields of "payment.transactions" */
export type Payment_Transactions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Payment_Transactions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Payment_Transactions_Avg_Fields = {
  __typename?: 'payment_transactions_avg_fields';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "payment.transactions". All fields are combined with a logical 'AND'. */
export type Payment_Transactions_Bool_Exp = {
  _and?: InputMaybe<Array<Payment_Transactions_Bool_Exp>>;
  _not?: InputMaybe<Payment_Transactions_Bool_Exp>;
  _or?: InputMaybe<Array<Payment_Transactions_Bool_Exp>>;
  amount?: InputMaybe<Int_Comparison_Exp>;
  bookingId?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  providerId?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "payment.transactions" */
export enum Payment_Transactions_Constraint {
  /** unique or primary key constraint on columns "bookingId" */
  TransactionsBookingIdKey = 'transactions_bookingId_key',
  /** unique or primary key constraint on columns "id" */
  TransactionsPkey = 'transactions_pkey'
}

/** input type for incrementing numeric columns in table "payment.transactions" */
export type Payment_Transactions_Inc_Input = {
  amount?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "payment.transactions" */
export type Payment_Transactions_Insert_Input = {
  amount?: InputMaybe<Scalars['Int']>;
  bookingId?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  providerId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Payment_Transactions_Max_Fields = {
  __typename?: 'payment_transactions_max_fields';
  amount?: Maybe<Scalars['Int']>;
  bookingId?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  providerId?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Payment_Transactions_Min_Fields = {
  __typename?: 'payment_transactions_min_fields';
  amount?: Maybe<Scalars['Int']>;
  bookingId?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  providerId?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "payment.transactions" */
export type Payment_Transactions_Mutation_Response = {
  __typename?: 'payment_transactions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Payment_Transactions>;
};

/** on_conflict condition type for table "payment.transactions" */
export type Payment_Transactions_On_Conflict = {
  constraint: Payment_Transactions_Constraint;
  update_columns?: Array<Payment_Transactions_Update_Column>;
  where?: InputMaybe<Payment_Transactions_Bool_Exp>;
};

/** Ordering options when selecting data from "payment.transactions". */
export type Payment_Transactions_Order_By = {
  amount?: InputMaybe<Order_By>;
  bookingId?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  providerId?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: payment.transactions */
export type Payment_Transactions_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "payment.transactions" */
export enum Payment_Transactions_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  BookingId = 'bookingId',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "payment.transactions" */
export type Payment_Transactions_Set_Input = {
  amount?: InputMaybe<Scalars['Int']>;
  bookingId?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  providerId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Payment_Transactions_Stddev_Fields = {
  __typename?: 'payment_transactions_stddev_fields';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Payment_Transactions_Stddev_Pop_Fields = {
  __typename?: 'payment_transactions_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Payment_Transactions_Stddev_Samp_Fields = {
  __typename?: 'payment_transactions_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "payment_transactions" */
export type Payment_Transactions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Payment_Transactions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Payment_Transactions_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['Int']>;
  bookingId?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  providerId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Payment_Transactions_Sum_Fields = {
  __typename?: 'payment_transactions_sum_fields';
  amount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "payment.transactions" */
export enum Payment_Transactions_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  BookingId = 'bookingId',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Payment_Transactions_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Payment_Transactions_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Payment_Transactions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Payment_Transactions_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Payment_Transactions_Var_Pop_Fields = {
  __typename?: 'payment_transactions_var_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Payment_Transactions_Var_Samp_Fields = {
  __typename?: 'payment_transactions_var_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Payment_Transactions_Variance_Fields = {
  __typename?: 'payment_transactions_variance_fields';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
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
  /** fetch data from the table: "booking.flights" */
  booking_flights: Array<Booking_Flights>;
  /** fetch aggregated fields from the table: "booking.flights" */
  booking_flights_aggregate: Booking_Flights_Aggregate;
  /** fetch data from the table: "booking.flights" using primary key columns */
  booking_flights_by_pk?: Maybe<Booking_Flights>;
  /** fetch data from the table: "brand" */
  brand: Array<Brand>;
  /** fetch aggregated fields from the table: "brand" */
  brand_aggregate: Brand_Aggregate;
  /** fetch data from the table: "brand" using primary key columns */
  brand_by_pk?: Maybe<Brand>;
  /** fetch data from the table: "customer.details" */
  customer_details: Array<Customer_Details>;
  /** fetch aggregated fields from the table: "customer.details" */
  customer_details_aggregate: Customer_Details_Aggregate;
  /** fetch data from the table: "customer.details" using primary key columns */
  customer_details_by_pk?: Maybe<Customer_Details>;
  /** fetch data from the table: "otp" */
  otp: Array<Otp>;
  /** fetch aggregated fields from the table: "otp" */
  otp_aggregate: Otp_Aggregate;
  /** fetch data from the table: "otp" using primary key columns */
  otp_by_pk?: Maybe<Otp>;
  /** fetch data from the table: "payment.availablePaymentMethods" */
  payment_availablePaymentMethods: Array<Payment_AvailablePaymentMethods>;
  /** fetch aggregated fields from the table: "payment.availablePaymentMethods" */
  payment_availablePaymentMethods_aggregate: Payment_AvailablePaymentMethods_Aggregate;
  /** fetch data from the table: "payment.availablePaymentMethods" using primary key columns */
  payment_availablePaymentMethods_by_pk?: Maybe<Payment_AvailablePaymentMethods>;
  /** fetch data from the table: "payment.refunds" */
  payment_refunds: Array<Payment_Refunds>;
  /** fetch aggregated fields from the table: "payment.refunds" */
  payment_refunds_aggregate: Payment_Refunds_Aggregate;
  /** fetch data from the table: "payment.refunds" using primary key columns */
  payment_refunds_by_pk?: Maybe<Payment_Refunds>;
  /** fetch data from the table: "payment.transactionLogs" */
  payment_transactionLogs: Array<Payment_TransactionLogs>;
  /** fetch aggregated fields from the table: "payment.transactionLogs" */
  payment_transactionLogs_aggregate: Payment_TransactionLogs_Aggregate;
  /** fetch data from the table: "payment.transactionLogs" using primary key columns */
  payment_transactionLogs_by_pk?: Maybe<Payment_TransactionLogs>;
  /** fetch data from the table: "payment.transactions" */
  payment_transactions: Array<Payment_Transactions>;
  /** fetch aggregated fields from the table: "payment.transactions" */
  payment_transactions_aggregate: Payment_Transactions_Aggregate;
  /** fetch data from the table: "payment.transactions" using primary key columns */
  payment_transactions_by_pk?: Maybe<Payment_Transactions>;
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


export type Query_RootBooking_FlightsArgs = {
  distinct_on?: InputMaybe<Array<Booking_Flights_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Booking_Flights_Order_By>>;
  where?: InputMaybe<Booking_Flights_Bool_Exp>;
};


export type Query_RootBooking_Flights_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Booking_Flights_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Booking_Flights_Order_By>>;
  where?: InputMaybe<Booking_Flights_Bool_Exp>;
};


export type Query_RootBooking_Flights_By_PkArgs = {
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


export type Query_RootCustomer_DetailsArgs = {
  distinct_on?: InputMaybe<Array<Customer_Details_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customer_Details_Order_By>>;
  where?: InputMaybe<Customer_Details_Bool_Exp>;
};


export type Query_RootCustomer_Details_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customer_Details_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customer_Details_Order_By>>;
  where?: InputMaybe<Customer_Details_Bool_Exp>;
};


export type Query_RootCustomer_Details_By_PkArgs = {
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


export type Query_RootPayment_AvailablePaymentMethodsArgs = {
  distinct_on?: InputMaybe<Array<Payment_AvailablePaymentMethods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Payment_AvailablePaymentMethods_Order_By>>;
  where?: InputMaybe<Payment_AvailablePaymentMethods_Bool_Exp>;
};


export type Query_RootPayment_AvailablePaymentMethods_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payment_AvailablePaymentMethods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Payment_AvailablePaymentMethods_Order_By>>;
  where?: InputMaybe<Payment_AvailablePaymentMethods_Bool_Exp>;
};


export type Query_RootPayment_AvailablePaymentMethods_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootPayment_RefundsArgs = {
  distinct_on?: InputMaybe<Array<Payment_Refunds_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Payment_Refunds_Order_By>>;
  where?: InputMaybe<Payment_Refunds_Bool_Exp>;
};


export type Query_RootPayment_Refunds_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payment_Refunds_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Payment_Refunds_Order_By>>;
  where?: InputMaybe<Payment_Refunds_Bool_Exp>;
};


export type Query_RootPayment_Refunds_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootPayment_TransactionLogsArgs = {
  distinct_on?: InputMaybe<Array<Payment_TransactionLogs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Payment_TransactionLogs_Order_By>>;
  where?: InputMaybe<Payment_TransactionLogs_Bool_Exp>;
};


export type Query_RootPayment_TransactionLogs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payment_TransactionLogs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Payment_TransactionLogs_Order_By>>;
  where?: InputMaybe<Payment_TransactionLogs_Bool_Exp>;
};


export type Query_RootPayment_TransactionLogs_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootPayment_TransactionsArgs = {
  distinct_on?: InputMaybe<Array<Payment_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Payment_Transactions_Order_By>>;
  where?: InputMaybe<Payment_Transactions_Bool_Exp>;
};


export type Query_RootPayment_Transactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payment_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Payment_Transactions_Order_By>>;
  where?: InputMaybe<Payment_Transactions_Bool_Exp>;
};


export type Query_RootPayment_Transactions_By_PkArgs = {
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
  /** fetch data from the table: "booking.flights" */
  booking_flights: Array<Booking_Flights>;
  /** fetch aggregated fields from the table: "booking.flights" */
  booking_flights_aggregate: Booking_Flights_Aggregate;
  /** fetch data from the table: "booking.flights" using primary key columns */
  booking_flights_by_pk?: Maybe<Booking_Flights>;
  /** fetch data from the table in a streaming manner: "booking.flights" */
  booking_flights_stream: Array<Booking_Flights>;
  /** fetch data from the table: "brand" */
  brand: Array<Brand>;
  /** fetch aggregated fields from the table: "brand" */
  brand_aggregate: Brand_Aggregate;
  /** fetch data from the table: "brand" using primary key columns */
  brand_by_pk?: Maybe<Brand>;
  /** fetch data from the table in a streaming manner: "brand" */
  brand_stream: Array<Brand>;
  /** fetch data from the table: "customer.details" */
  customer_details: Array<Customer_Details>;
  /** fetch aggregated fields from the table: "customer.details" */
  customer_details_aggregate: Customer_Details_Aggregate;
  /** fetch data from the table: "customer.details" using primary key columns */
  customer_details_by_pk?: Maybe<Customer_Details>;
  /** fetch data from the table in a streaming manner: "customer.details" */
  customer_details_stream: Array<Customer_Details>;
  /** fetch data from the table: "otp" */
  otp: Array<Otp>;
  /** fetch aggregated fields from the table: "otp" */
  otp_aggregate: Otp_Aggregate;
  /** fetch data from the table: "otp" using primary key columns */
  otp_by_pk?: Maybe<Otp>;
  /** fetch data from the table in a streaming manner: "otp" */
  otp_stream: Array<Otp>;
  /** fetch data from the table: "payment.availablePaymentMethods" */
  payment_availablePaymentMethods: Array<Payment_AvailablePaymentMethods>;
  /** fetch aggregated fields from the table: "payment.availablePaymentMethods" */
  payment_availablePaymentMethods_aggregate: Payment_AvailablePaymentMethods_Aggregate;
  /** fetch data from the table: "payment.availablePaymentMethods" using primary key columns */
  payment_availablePaymentMethods_by_pk?: Maybe<Payment_AvailablePaymentMethods>;
  /** fetch data from the table in a streaming manner: "payment.availablePaymentMethods" */
  payment_availablePaymentMethods_stream: Array<Payment_AvailablePaymentMethods>;
  /** fetch data from the table: "payment.refunds" */
  payment_refunds: Array<Payment_Refunds>;
  /** fetch aggregated fields from the table: "payment.refunds" */
  payment_refunds_aggregate: Payment_Refunds_Aggregate;
  /** fetch data from the table: "payment.refunds" using primary key columns */
  payment_refunds_by_pk?: Maybe<Payment_Refunds>;
  /** fetch data from the table in a streaming manner: "payment.refunds" */
  payment_refunds_stream: Array<Payment_Refunds>;
  /** fetch data from the table: "payment.transactionLogs" */
  payment_transactionLogs: Array<Payment_TransactionLogs>;
  /** fetch aggregated fields from the table: "payment.transactionLogs" */
  payment_transactionLogs_aggregate: Payment_TransactionLogs_Aggregate;
  /** fetch data from the table: "payment.transactionLogs" using primary key columns */
  payment_transactionLogs_by_pk?: Maybe<Payment_TransactionLogs>;
  /** fetch data from the table in a streaming manner: "payment.transactionLogs" */
  payment_transactionLogs_stream: Array<Payment_TransactionLogs>;
  /** fetch data from the table: "payment.transactions" */
  payment_transactions: Array<Payment_Transactions>;
  /** fetch aggregated fields from the table: "payment.transactions" */
  payment_transactions_aggregate: Payment_Transactions_Aggregate;
  /** fetch data from the table: "payment.transactions" using primary key columns */
  payment_transactions_by_pk?: Maybe<Payment_Transactions>;
  /** fetch data from the table in a streaming manner: "payment.transactions" */
  payment_transactions_stream: Array<Payment_Transactions>;
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


export type Subscription_RootBooking_FlightsArgs = {
  distinct_on?: InputMaybe<Array<Booking_Flights_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Booking_Flights_Order_By>>;
  where?: InputMaybe<Booking_Flights_Bool_Exp>;
};


export type Subscription_RootBooking_Flights_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Booking_Flights_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Booking_Flights_Order_By>>;
  where?: InputMaybe<Booking_Flights_Bool_Exp>;
};


export type Subscription_RootBooking_Flights_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootBooking_Flights_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Booking_Flights_Stream_Cursor_Input>>;
  where?: InputMaybe<Booking_Flights_Bool_Exp>;
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


export type Subscription_RootCustomer_DetailsArgs = {
  distinct_on?: InputMaybe<Array<Customer_Details_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customer_Details_Order_By>>;
  where?: InputMaybe<Customer_Details_Bool_Exp>;
};


export type Subscription_RootCustomer_Details_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customer_Details_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customer_Details_Order_By>>;
  where?: InputMaybe<Customer_Details_Bool_Exp>;
};


export type Subscription_RootCustomer_Details_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootCustomer_Details_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Customer_Details_Stream_Cursor_Input>>;
  where?: InputMaybe<Customer_Details_Bool_Exp>;
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


export type Subscription_RootPayment_AvailablePaymentMethodsArgs = {
  distinct_on?: InputMaybe<Array<Payment_AvailablePaymentMethods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Payment_AvailablePaymentMethods_Order_By>>;
  where?: InputMaybe<Payment_AvailablePaymentMethods_Bool_Exp>;
};


export type Subscription_RootPayment_AvailablePaymentMethods_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payment_AvailablePaymentMethods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Payment_AvailablePaymentMethods_Order_By>>;
  where?: InputMaybe<Payment_AvailablePaymentMethods_Bool_Exp>;
};


export type Subscription_RootPayment_AvailablePaymentMethods_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootPayment_AvailablePaymentMethods_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Payment_AvailablePaymentMethods_Stream_Cursor_Input>>;
  where?: InputMaybe<Payment_AvailablePaymentMethods_Bool_Exp>;
};


export type Subscription_RootPayment_RefundsArgs = {
  distinct_on?: InputMaybe<Array<Payment_Refunds_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Payment_Refunds_Order_By>>;
  where?: InputMaybe<Payment_Refunds_Bool_Exp>;
};


export type Subscription_RootPayment_Refunds_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payment_Refunds_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Payment_Refunds_Order_By>>;
  where?: InputMaybe<Payment_Refunds_Bool_Exp>;
};


export type Subscription_RootPayment_Refunds_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootPayment_Refunds_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Payment_Refunds_Stream_Cursor_Input>>;
  where?: InputMaybe<Payment_Refunds_Bool_Exp>;
};


export type Subscription_RootPayment_TransactionLogsArgs = {
  distinct_on?: InputMaybe<Array<Payment_TransactionLogs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Payment_TransactionLogs_Order_By>>;
  where?: InputMaybe<Payment_TransactionLogs_Bool_Exp>;
};


export type Subscription_RootPayment_TransactionLogs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payment_TransactionLogs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Payment_TransactionLogs_Order_By>>;
  where?: InputMaybe<Payment_TransactionLogs_Bool_Exp>;
};


export type Subscription_RootPayment_TransactionLogs_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootPayment_TransactionLogs_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Payment_TransactionLogs_Stream_Cursor_Input>>;
  where?: InputMaybe<Payment_TransactionLogs_Bool_Exp>;
};


export type Subscription_RootPayment_TransactionsArgs = {
  distinct_on?: InputMaybe<Array<Payment_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Payment_Transactions_Order_By>>;
  where?: InputMaybe<Payment_Transactions_Bool_Exp>;
};


export type Subscription_RootPayment_Transactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payment_Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Payment_Transactions_Order_By>>;
  where?: InputMaybe<Payment_Transactions_Bool_Exp>;
};


export type Subscription_RootPayment_Transactions_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootPayment_Transactions_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Payment_Transactions_Stream_Cursor_Input>>;
  where?: InputMaybe<Payment_Transactions_Bool_Exp>;
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
  /** An object relationship */
  default?: Maybe<Customer_Details>;
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
  default?: InputMaybe<Customer_Details_Bool_Exp>;
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
  default?: InputMaybe<Customer_Details_Obj_Rel_Insert_Input>;
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
  default?: InputMaybe<Customer_Details_Order_By>;
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

export type CreateFlightBookingMutationVariables = Exact<{
  object?: InputMaybe<Booking_Flights_Insert_Input>;
}>;


export type CreateFlightBookingMutation = { __typename?: 'mutation_root', insert_booking_flights_one?: { __typename?: 'booking_flights', id: any, meta?: any | null, status: string } | null };

export type UpdateFlightBookingMutationVariables = Exact<{
  where?: InputMaybe<Booking_Flights_Bool_Exp>;
  _set?: InputMaybe<Booking_Flights_Set_Input>;
}>;


export type UpdateFlightBookingMutation = { __typename?: 'mutation_root', update_booking_flights?: { __typename?: 'booking_flights_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'booking_flights', id: any }> } | null };

export type CreatePaymentTransactionMutationVariables = Exact<{
  object: Payment_Transactions_Insert_Input;
}>;


export type CreatePaymentTransactionMutation = { __typename?: 'mutation_root', insert_payment_transactions_one?: { __typename?: 'payment_transactions', id: number } | null };

export type UpdatePaymentTransactionByIdMutationVariables = Exact<{
  _set: Payment_Transactions_Set_Input;
  id: Scalars['Int'];
}>;


export type UpdatePaymentTransactionByIdMutation = { __typename?: 'mutation_root', update_payment_transactions_by_pk?: { __typename?: 'payment_transactions', id: number } | null };

export type CreatePaymentTransactionLogMutationVariables = Exact<{
  object: Payment_TransactionLogs_Insert_Input;
}>;


export type CreatePaymentTransactionLogMutation = { __typename?: 'mutation_root', insert_payment_transactionLogs_one?: { __typename?: 'payment_transactionLogs', id: number } | null };

export type UpdateCustomerDetailsMutationVariables = Exact<{
  where?: InputMaybe<Customer_Details_Bool_Exp>;
  _set?: InputMaybe<Customer_Details_Set_Input>;
}>;


export type UpdateCustomerDetailsMutation = { __typename?: 'mutation_root', update_customer_details?: { __typename?: 'customer_details_mutation_response', affected_rows: number } | null };

export type CreateCustomerDetailsMutationVariables = Exact<{
  object: Customer_Details_Insert_Input;
}>;


export type CreateCustomerDetailsMutation = { __typename?: 'mutation_root', insert_customer_details_one?: { __typename?: 'customer_details', firstName?: string | null, dateOfBirth?: any | null, gender?: string | null, lastName?: string | null, userId: any } | null };

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

export type GetFlightBookingsQueryVariables = Exact<{
  where?: InputMaybe<Booking_Flights_Bool_Exp>;
}>;


export type GetFlightBookingsQuery = { __typename?: 'query_root', booking_flights: Array<{ __typename?: 'booking_flights', id: any, provider: string, providerOfferId: string, providerOfferDetails: any, status: string, meta?: any | null, userId: any, paymentMethod?: { __typename?: 'payment_availablePaymentMethods', id: number, logo: string, label: string } | null }> };

export type GetAvailablePaymentMethodsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAvailablePaymentMethodsQuery = { __typename?: 'query_root', payment_availablePaymentMethods: Array<{ __typename?: 'payment_availablePaymentMethods', isActive: boolean, id: number, label: string, logo: string, title: string }> };

export type GetCustomerDetailsQueryVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type GetCustomerDetailsQuery = { __typename?: 'query_root', customer_details: Array<{ __typename?: 'customer_details', dateOfBirth?: any | null, id: number, identityDocuments?: any | null, firstName?: string | null, lastName?: string | null }> };


export const InsertUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertUsers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"users_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_users_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"phoneVerified"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<InsertUsersMutation, InsertUsersMutationVariables>;
export const Insert_OtpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"INSERT_OTP"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"otp_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_otp_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}}]}}]} as unknown as DocumentNode<Insert_OtpMutation, Insert_OtpMutationVariables>;
export const DeleteOtpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteOTP"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tokenType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"OTP","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_otp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"tokenType"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tokenType"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}}]} as unknown as DocumentNode<DeleteOtpMutation, DeleteOtpMutationVariables>;
export const UpdateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_set"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"users_set_input"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_users_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_set"}}},{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const CreateFlightBookingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateFlightBooking"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"booking_flights_insert_input"}},"defaultValue":{"kind":"ObjectValue","fields":[]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_booking_flights_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"meta"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<CreateFlightBookingMutation, CreateFlightBookingMutationVariables>;
export const UpdateFlightBookingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateFlightBooking"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"booking_flights_bool_exp"}},"defaultValue":{"kind":"ObjectValue","fields":[]}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_set"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"booking_flights_set_input"}},"defaultValue":{"kind":"ObjectValue","fields":[]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_booking_flights"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_set"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateFlightBookingMutation, UpdateFlightBookingMutationVariables>;
export const CreatePaymentTransactionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePaymentTransaction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"payment_transactions_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_payment_transactions_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreatePaymentTransactionMutation, CreatePaymentTransactionMutationVariables>;
export const UpdatePaymentTransactionByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePaymentTransactionById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_set"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"payment_transactions_set_input"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_payment_transactions_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_set"}}},{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdatePaymentTransactionByIdMutation, UpdatePaymentTransactionByIdMutationVariables>;
export const CreatePaymentTransactionLogDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePaymentTransactionLog"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"payment_transactionLogs_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_payment_transactionLogs_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreatePaymentTransactionLogMutation, CreatePaymentTransactionLogMutationVariables>;
export const UpdateCustomerDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateCustomerDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"customer_details_bool_exp"}},"defaultValue":{"kind":"ObjectValue","fields":[]}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_set"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"customer_details_set_input"}},"defaultValue":{"kind":"ObjectValue","fields":[]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_customer_details"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_set"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}}]} as unknown as DocumentNode<UpdateCustomerDetailsMutation, UpdateCustomerDetailsMutationVariables>;
export const CreateCustomerDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateCustomerDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"customer_details_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_customer_details_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"dateOfBirth"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]} as unknown as DocumentNode<CreateCustomerDetailsMutation, CreateCustomerDetailsMutationVariables>;
export const GetBrandDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBrand"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brand"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"metaData"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"location"}}]}}]}}]} as unknown as DocumentNode<GetBrandQuery, GetBrandQueryVariables>;
export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"users_bool_exp"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"phoneVerified"}},{"kind":"Field","name":{"kind":"Name","value":"accounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"provider"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;
export const SessionTokenByPkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SessionTokenByPk"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sessionToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sessions_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sessionToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sessionToken"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sessionToken"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"expires"}}]}}]}}]} as unknown as DocumentNode<SessionTokenByPkQuery, SessionTokenByPkQueryVariables>;
export const GetOtpByUserIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOtpByUserId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tokenType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"OTP","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"otp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"isValid"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"tokenType"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tokenType"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"desc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"isValid"}}]}}]}}]} as unknown as DocumentNode<GetOtpByUserIdQuery, GetOtpByUserIdQueryVariables>;
export const GetFlightBookingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFlightBookings"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"booking_flights_bool_exp"}},"defaultValue":{"kind":"ObjectValue","fields":[]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"booking_flights"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"providerOfferId"}},{"kind":"Field","name":{"kind":"Name","value":"providerOfferDetails"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"meta"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}}]} as unknown as DocumentNode<GetFlightBookingsQuery, GetFlightBookingsQueryVariables>;
export const GetAvailablePaymentMethodsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAvailablePaymentMethods"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"payment_availablePaymentMethods"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isActive"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<GetAvailablePaymentMethodsQuery, GetAvailablePaymentMethodsQueryVariables>;
export const GetCustomerDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCustomerDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customer_details"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dateOfBirth"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"identityDocuments"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]} as unknown as DocumentNode<GetCustomerDetailsQuery, GetCustomerDetailsQueryVariables>;