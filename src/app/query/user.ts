import { GET_USER } from './../graphql/query'
import { apolloClient } from '../lib'
import { GetUserQuery } from '@/types/gql/graphql'
import { omit } from 'lodash'

const getUser = async ({
  id,
  phone,
  email
}: {
  id?: string
  phone?: string
  email?: string
}) => {
  try {
    const where: any = {
      _or: [
        id ? { id: { _eq: id } } : null,
        email ? { email: { _eq: email } } : null,
        phone ? { phone: { _eq: phone } } : null
      ].filter(Boolean)
    }

    if (!where._or.length) return null

    const {
      users: [user]
    } = await apolloClient.request<GetUserQuery>(GET_USER, { where })

    return user ? omit(user, '__typename') : null
  } catch (error) {
    console.log('[GET USER ERROR]', error)
    return null
  }
}

export { getUser }
