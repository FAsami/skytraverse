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
    "\n  query GetBrand($title: String!) {\n    brand(where: { title: { _eq: $title } }) {\n      id\n      title\n      logo\n      metaData\n      phone\n      email\n      location\n    }\n  }\n": types.GetBrandDocument,
    "\n  query GetUser($where: users_bool_exp!) {\n    users(where: $where, limit: 1) {\n      id\n      email\n      image\n      name\n      password\n      phone\n      emailVerified\n      phoneVerified\n    }\n  }\n": types.GetUserDocument,
    "\n  query SessionTokenByPk($sessionToken: String!) {\n    sessions_by_pk(sessionToken: $sessionToken) {\n      sessionToken\n      userId\n      expires\n    }\n  }\n": types.SessionTokenByPkDocument,
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
export function gql(source: "\n  query GetBrand($title: String!) {\n    brand(where: { title: { _eq: $title } }) {\n      id\n      title\n      logo\n      metaData\n      phone\n      email\n      location\n    }\n  }\n"): (typeof documents)["\n  query GetBrand($title: String!) {\n    brand(where: { title: { _eq: $title } }) {\n      id\n      title\n      logo\n      metaData\n      phone\n      email\n      location\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetUser($where: users_bool_exp!) {\n    users(where: $where, limit: 1) {\n      id\n      email\n      image\n      name\n      password\n      phone\n      emailVerified\n      phoneVerified\n    }\n  }\n"): (typeof documents)["\n  query GetUser($where: users_bool_exp!) {\n    users(where: $where, limit: 1) {\n      id\n      email\n      image\n      name\n      password\n      phone\n      emailVerified\n      phoneVerified\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SessionTokenByPk($sessionToken: String!) {\n    sessions_by_pk(sessionToken: $sessionToken) {\n      sessionToken\n      userId\n      expires\n    }\n  }\n"): (typeof documents)["\n  query SessionTokenByPk($sessionToken: String!) {\n    sessions_by_pk(sessionToken: $sessionToken) {\n      sessionToken\n      userId\n      expires\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;