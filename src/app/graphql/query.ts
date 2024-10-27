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
