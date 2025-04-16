

import { session } from '@/app/lib/session'
import prisma  from '@/app/lib/prisma'
// import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET

export const authOption = {
    session: {
      strategy: 'jwt',
    },
    providers: [
      GoogleProvider({
        clientId: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
      }),
    ],
    callbacks: {
      async signIn({ account, profile }) {
        if (!profile?.email) {
          throw new Error('No profile')
        }
  
        await prisma.user.upsert({
          where: {
            email: profile.email,
          },
          create: {
            email: profile.email,
            name: profile.name,
          },
          update: {
            name: profile.name,
          },
        })
        return true
      },
      session,
      async jwt({ token, user, profile }) {
        // Only populate token.id during initial sign-in
        if (user) {
          token.id = user.id; // user.id comes from signIn upsert
        } else if (profile && !token.id) {
          // Fallback: query user if token.id is missing
          const dbUser = await prisma.user.findUnique({
            where: { email: profile.email },
          });
          if (dbUser) {
            token.id = dbUser.id;
          } else {
            console.error("No user found for email:", profile.email);
          }
        }
  
        return token;
      },
    },
  }