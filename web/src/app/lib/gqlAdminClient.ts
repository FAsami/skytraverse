import { GraphQLClient } from 'graphql-request'

const gqlAdminClient = new GraphQLClient(process.env.HASURA_GRAPHQL_URL!, {
  headers: {
    'x-hasura-admin-secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET!
  }
})

export { gqlAdminClient }
