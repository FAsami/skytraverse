import { getCustomerDetails } from '../actions/getCustomerDetails'
import { CustomerDetailsForm } from './CustomerDetailsForm'

const ProfilePage = async () => {
  try {
    const result = (await getCustomerDetails()) || {}
    if (result.success) {
      return <CustomerDetailsForm initialValues={result.data} />
    } else {
      throw new Error('Failed to fetch profile')
    }
  } catch (error) {
    console.log(error)
    throw new Error('Failed to fetch profile')
  }
}

export default ProfilePage
