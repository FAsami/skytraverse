import bcrypt from 'bcryptjs'
import type { NextAuthConfig } from 'next-auth'
import NextAuth from 'next-auth'
import { encode as jwtEncode } from 'next-auth/jwt'
import Credentials from 'next-auth/providers/credentials'
import { v4 as uuid } from 'uuid'
import { HasuraAdapter } from '@auth/hasura-adapter'
import Google from 'next-auth/providers/google'
import { getUser } from './app/query'
import { LoginSchema } from './app/(auth)/authSchema'

if (
  !process.env.HASURA_GRAPHQL_URL ||
  !process.env.HASURA_GRAPHQL_ADMIN_SECRET
) {
  console.log('[HASURA CREDENTIAL ERROR]')
  throw new Error('Credential for hasura is missing!')
}

const adapter = HasuraAdapter({
  endpoint: process.env.HASURA_GRAPHQL_URL!,
  adminSecret: process.env.HASURA_GRAPHQL_ADMIN_SECRET!
})

const authConfig: NextAuthConfig = {
  pages: {
    signIn: '/login',
    error: '/error'
  },
  adapter,
  debug: false,
  providers: [
    Google({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!
    }),
    Credentials({
      id: 'phone_password',
      async authorize(credential) {
        const { data, success } = LoginSchema.safeParse(credential)
        if (success) {
          const user = await getUser({
            phone: credential.phone as string
          })
          if (!user || !user.password) return null
          if (user?.id) {
            const isMatched = await bcrypt.compare(data.password, user.password)
            if (isMatched) {
              return user
            }
          }
        }
        return null
      }
    }),
    Credentials({
      id: 'email_password',
      async authorize(credential) {
        const { data, success } = LoginSchema.safeParse(credential)
        if (success) {
          const user = await getUser({
            email: data.email
          })
          if (!user || !user.password) return null
          if (user?.id) {
            const isMatched = await bcrypt.compare(data.password, user.password)
            if (isMatched) {
              return user
            }
          }
        }
        return null
      }
    }),
    Credentials({
      id: 'verify_otp',
      async authorize(credential) {
        const user = await getUser({
          email: credential.email as string
        })
        return user
      }
    })
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (
        account?.provider === 'email_password' ||
        account?.provider === 'phone_password' ||
        account?.provider === 'verify_otp'
      ) {
        token.credentials = true
      }
      return token
    }
  },
  jwt: {
    encode: async function (params) {
      if (params.token?.credentials) {
        const sessionToken = uuid()
        if (!params.token.sub) {
          throw new Error('No user is associated with this token')
        }
        const session = await adapter?.createSession?.({
          sessionToken: sessionToken,
          userId: params.token.sub,
          expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
        })
        if (!session) {
          throw new Error('Something went wrong while trying to create session')
        }
        return sessionToken
      }
      return jwtEncode(params)
    }
  },
  secret: process.env.AUTH_SECRET!
}

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig)
