export const dynamic = 'force-dynamic'
import { ApiResponse } from '@/types/api'
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
