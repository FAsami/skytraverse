export const dynamic = 'force-dynamic'
import { ApiResponse } from '@/types/api'
/**
 * This TypeScript function handles GET requests to fetch suggestions based on a query parameter using
 * the Duffel API and returns a JSON response with success status and data or error message.
 * @param {NextRequest} request - The `request` parameter in the `GET` function is of type
 * `NextRequest`, which represents the incoming HTTP request. It contains information about the request
 * such as the URL, headers, method, and query parameters. In this code snippet, the `request`
 * parameter is used to extract the query
 * @returns The code snippet provided is a Next.js API route handler function that handles GET
 * requests. It tries to fetch suggestions based on a query parameter "query" from the request URL
 * using the Duffel API client.
 */

import { NextRequest, NextResponse } from 'next/server'
import { duffelClient } from '@/app/lib/duffelClient'

export const GET = async (request: NextRequest): Promise<NextResponse> => {
  try {
    const url = new URL(request.url)
    const place = url.searchParams.get('query')

    if (!place) {
      return NextResponse.json<ApiResponse<null>>(
        {
          success: false,
          error: 'Query parameter "query" is required.'
        },
        { status: 400 }
      )
    }

    const suggestions = await duffelClient.suggestions.list({
      query: place
    })

    return NextResponse.json<ApiResponse<typeof suggestions>>(
      {
        success: true,
        data: suggestions
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error fetching suggestions:', error)
    return NextResponse.json<ApiResponse<null>>(
      {
        success: false,
        error: 'Failed to fetch suggestions.'
      },
      { status: 500 }
    )
  }
}
