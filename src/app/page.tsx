import { gql } from 'graphql-request'
import { apolloClient } from './lib/apolloClient'

const HomePage = async () => {
  try {
    const client = await apolloClient.request(gql`
      query GetProducts {
        products {
          id
          name
          price
        }
      }
    `)
    console.log(client)
    return <div>Hello</div>
  } catch (error) {
    console.log(error)
    throw new Error('Something went wrong !')
  }
}
export default HomePage
