'use server'
import { CreateOfferRequest as DuffelCreateOfferRequest } from '@duffel/api/types'
import { duffelClient } from '@/app/lib/duffelClient'
import { ActionResponse } from '@/types/actions'
import { redirect } from 'next/navigation'
import { DuffelError } from '@duffel/api'
import { encodeId } from '@/app/utils/IdUtils'
import { encrypt } from '@/app/utils/cryptography'

const createOfferRequest = async (
  offerRequest: DuffelCreateOfferRequest
): Promise<ActionResponse | void> => {
  let offerRequestId
  try {
    const { data } = await duffelClient.offerRequests.create(offerRequest)
    if (data.id) {
      offerRequestId = data.id
    } else {
      return {
        success: false,
        message: 'Failed to create offer request'
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
  if (offerRequestId) {
    redirect(
      `/flights/offers?id=${encodeId(
        offerRequestId
      )}&query=${encodeURIComponent(await encrypt(offerRequest))}`
    )
  }
}

export { createOfferRequest }
