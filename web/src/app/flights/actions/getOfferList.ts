'use server'
import { ListOffersParams } from '@duffel/api/types'
import { duffelClient } from '@/app/lib/duffelClient'
import { ActionResponse } from '@/types/actions'
import { DuffelError } from '@duffel/api'
import { revalidatePath } from 'next/cache'

const getOfferList = async (
  params: ListOffersParams
): Promise<ActionResponse | void> => {
  try {
    const data = await duffelClient.offers.list(params)

    if (data.data) {
      revalidatePath('/flights/offers')

      return {
        success: true,
        message: 'Offers list found',
        data
      }
    } else {
      return {
        success: false,
        message: 'Failed to list offers'
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
      message: 'Failed to create offer request'
    }
  }
}

export { getOfferList }
