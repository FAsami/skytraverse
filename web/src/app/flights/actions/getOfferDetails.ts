'use server'
import { duffelClient } from '@/app/lib/duffelClient'
import { ActionResponse } from '@/types/actions'
import { DuffelError } from '@duffel/api'

const getOfferList = async (id: string): Promise<ActionResponse | void> => {
  try {
    const data = await duffelClient.offers.get(id, {
      return_available_services: true
    })

    if (data.data) {
      return {
        success: true,
        message: 'Offer  found',
        data
      }
    } else {
      return {
        success: false,
        message: 'Failed to get offer'
      }
    }
  } catch (error) {
    if (error instanceof DuffelError) {
      return {
        error: error,
        success: false,
        message: error.message
      }
    }
    return {
      error: error,
      success: false,
      message: 'Failed to get offer'
    }
  }
}

export { getOfferList }
