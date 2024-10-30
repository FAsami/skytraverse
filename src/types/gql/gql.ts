/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation InsertUsers($object: users_insert_input!) {\n    insert_users_one(object: $object) {\n      id\n      emailVerified\n      email\n      created_at\n      image\n      name\n      password\n      phone\n      phoneVerified\n      updated_at\n    }\n  }\n": types.InsertUsersDocument,
    "\n  mutation INSERT_OTP($object: otp_insert_input!) {\n    insert_otp_one(object: $object) {\n      created_at\n    }\n  }\n": types.Insert_OtpDocument,
    "\n  mutation DeleteOTP($userId: uuid!, $tokenType: String = \"OTP\") {\n    delete_otp(\n      where: { userId: { _eq: $userId }, tokenType: { _eq: $tokenType } }\n    ) {\n      affected_rows\n    }\n  }\n": types.DeleteOtpDocument,
    "\n  mutation UpdateUser($_set: users_set_input!, $userId: uuid!) {\n    update_users_by_pk(_set: $_set, pk_columns: { id: $userId }) {\n      updated_at\n    }\n  }\n": types.UpdateUserDocument,
    "\n  query GetBrand($title: String!) {\n    brand(where: { title: { _eq: $title } }) {\n      id\n      title\n      logo\n      metaData\n      phone\n      email\n      location\n    }\n  }\n": types.GetBrandDocument,
    "\n  query GetUser($where: users_bool_exp!) {\n    users(where: $where, limit: 1) {\n      id\n      email\n      image\n      name\n      password\n      phone\n      emailVerified\n      phoneVerified\n      accounts {\n        provider\n      }\n    }\n  }\n": types.GetUserDocument,
    "\n  query SessionTokenByPk($sessionToken: String!) {\n    sessions_by_pk(sessionToken: $sessionToken) {\n      sessionToken\n      userId\n      expires\n    }\n  }\n": types.SessionTokenByPkDocument,
    "\n  query GetOtpByUserId($userId: uuid!, $tokenType: String = \"OTP\") {\n    otp(\n      where: {\n        userId: { _eq: $userId }\n        isValid: { _eq: true }\n        tokenType: { _eq: $tokenType }\n      }\n      order_by: { created_at: desc }\n    ) {\n      id\n      token\n      created_at\n      updated_at\n      userId\n      isValid\n    }\n  }\n": types.GetOtpByUserIdDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation InsertUsers($object: users_insert_input!) {\n    insert_users_one(object: $object) {\n      id\n      emailVerified\n      email\n      created_at\n      image\n      name\n      password\n      phone\n      phoneVerified\n      updated_at\n    }\n  }\n"): (typeof documents)["\n  mutation InsertUsers($object: users_insert_input!) {\n    insert_users_one(object: $object) {\n      id\n      emailVerified\n      email\n      created_at\n      image\n      name\n      password\n      phone\n      phoneVerified\n      updated_at\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation INSERT_OTP($object: otp_insert_input!) {\n    insert_otp_one(object: $object) {\n      created_at\n    }\n  }\n"): (typeof documents)["\n  mutation INSERT_OTP($object: otp_insert_input!) {\n    insert_otp_one(object: $object) {\n      created_at\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteOTP($userId: uuid!, $tokenType: String = \"OTP\") {\n    delete_otp(\n      where: { userId: { _eq: $userId }, tokenType: { _eq: $tokenType } }\n    ) {\n      affected_rows\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteOTP($userId: uuid!, $tokenType: String = \"OTP\") {\n    delete_otp(\n      where: { userId: { _eq: $userId }, tokenType: { _eq: $tokenType } }\n    ) {\n      affected_rows\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateUser($_set: users_set_input!, $userId: uuid!) {\n    update_users_by_pk(_set: $_set, pk_columns: { id: $userId }) {\n      updated_at\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateUser($_set: users_set_input!, $userId: uuid!) {\n    update_users_by_pk(_set: $_set, pk_columns: { id: $userId }) {\n      updated_at\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetBrand($title: String!) {\n    brand(where: { title: { _eq: $title } }) {\n      id\n      title\n      logo\n      metaData\n      phone\n      email\n      location\n    }\n  }\n"): (typeof documents)["\n  query GetBrand($title: String!) {\n    brand(where: { title: { _eq: $title } }) {\n      id\n      title\n      logo\n      metaData\n      phone\n      email\n      location\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetUser($where: users_bool_exp!) {\n    users(where: $where, limit: 1) {\n      id\n      email\n      image\n      name\n      password\n      phone\n      emailVerified\n      phoneVerified\n      accounts {\n        provider\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetUser($where: users_bool_exp!) {\n    users(where: $where, limit: 1) {\n      id\n      email\n      image\n      name\n      password\n      phone\n      emailVerified\n      phoneVerified\n      accounts {\n        provider\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SessionTokenByPk($sessionToken: String!) {\n    sessions_by_pk(sessionToken: $sessionToken) {\n      sessionToken\n      userId\n      expires\n    }\n  }\n"): (typeof documents)["\n  query SessionTokenByPk($sessionToken: String!) {\n    sessions_by_pk(sessionToken: $sessionToken) {\n      sessionToken\n      userId\n      expires\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetOtpByUserId($userId: uuid!, $tokenType: String = \"OTP\") {\n    otp(\n      where: {\n        userId: { _eq: $userId }\n        isValid: { _eq: true }\n        tokenType: { _eq: $tokenType }\n      }\n      order_by: { created_at: desc }\n    ) {\n      id\n      token\n      created_at\n      updated_at\n      userId\n      isValid\n    }\n  }\n"): (typeof documents)["\n  query GetOtpByUserId($userId: uuid!, $tokenType: String = \"OTP\") {\n    otp(\n      where: {\n        userId: { _eq: $userId }\n        isValid: { _eq: true }\n        tokenType: { _eq: $tokenType }\n      }\n      order_by: { created_at: desc }\n    ) {\n      id\n      token\n      created_at\n      updated_at\n      userId\n      isValid\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;