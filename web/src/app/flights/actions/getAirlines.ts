'use server'
import { duffelClient } from '@/app/lib/duffelClient'
import { ActionResponse } from '@/types/actions'
import { DuffelError } from '@duffel/api'

const getAirlines = async (): Promise<ActionResponse | void> => {
  try {
    const data = await duffelClient.airlines.list({ limit: 40 })

    if (data.data) {
      return {
        success: true,
        message: 'Arilines list found',
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
      message: 'Failed to fetch airlines'
    }
  }
}

export { getAirlines }
