import { cookies } from 'next/headers'
import { GraphQLClient } from 'graphql-request'

const gqlClient = async () => {
  const authToken = (await cookies()).get('authjs.session-token')?.value

  if (!authToken) {
    return null
  }
  return new GraphQLClient(process.env.HASURA_GRAPHQL_URL!, {
    headers: {
      'x-hasura-next-authjs-token': authToken
    }
  })
}
export { gqlClient }
