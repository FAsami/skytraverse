import { gql } from 'graphql-request'

export const GET_BRAND_INFO = gql`
  query GetBrand($title: String!) {
    brand(where: { title: { _eq: $title } }) {
      id
      title
      logo
      metaData
      phone
      email
      location
    }
  }
`

export const GET_USER = gql`
  query GetUser($where: users_bool_exp!) {
    users(where: $where, limit: 1) {
      id
      email
      image
      name
      password
      phone
      emailVerified
      phoneVerified
    }
  }
`

export const SESSION_TOKEN_BY_PK = gql`
  query SessionTokenByPk($sessionToken: String!) {
    sessions_by_pk(sessionToken: $sessionToken) {
      sessionToken
      userId
      expires
    }
  }
`
