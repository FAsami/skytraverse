import { SESSION_TOKEN_BY_PK } from '@/app/graphql/query'
import { apolloClient } from '@/app/lib'
import { SessionTokenByPkQuery } from '@/types/gql/graphql'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const sessionId = request.headers.get('auth-token')

  if (!sessionId) {
    return NextResponse.json(
      {
        'X-Hasura-Role': 'guest-consumer',
        'X-Hasura-Allowed-Roles': ['guest-consumer', 'consumer'],
        'X-Hasura-brand-title': process.env.BRAND_TITLE
      },
      { status: 200 }
    )
  }

  const session = await validateSession(sessionId)

  if (!session) {
    return NextResponse.json(
      {
        'X-Hasura-Role': 'guest-consumer',
        'X-Hasura-Allowed-Roles': ['guest-consumer', 'consumer'],
        'X-Hasura-brand-title': process.env.BRAND_TITLE
      },
      { status: 200 }
    )
  }

  return NextResponse.json(
    {
      'X-Hasura-Role': 'consumer',
      'X-Hasura-User-Id': session.userId,
      'X-Hasura-Allowed-Roles': ['guest-consumer', 'consumer'],
      'X-Hasura-brand-title': process.env.BRAND_TITLE
    },
    { status: 200 }
  )
}

const validateSession = async (
  sessionToken: string
): Promise<SessionTokenByPkQuery['sessions_by_pk'] | null> => {
  try {
    const { sessions_by_pk: session } =
      await apolloClient.request<SessionTokenByPkQuery>(SESSION_TOKEN_BY_PK, {
        sessionToken
      })
    return session && new Date(session.expires) > new Date() ? session : null
  } catch (error) {
    console.error('Error validating session:', error)
    return null
  }
}
