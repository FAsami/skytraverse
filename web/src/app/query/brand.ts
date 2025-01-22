import { GetBrandQuery } from '@/types/gql/graphql'
import { GET_BRAND_INFO } from '../graphql/query'
import { gqlAdminClient } from '../lib'

const getBrandInfo = async () => {
  const { brand_brands: brands } = await gqlAdminClient.request<GetBrandQuery>(
    GET_BRAND_INFO,
    {
      title: process.env.BRAND_TITLE
    }
  )
  if (brands[0]) {
    return brands[0]
  }
}

export { getBrandInfo }
