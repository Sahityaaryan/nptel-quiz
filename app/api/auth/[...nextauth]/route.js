

import { session } from '@/app/lib/session'
import prisma from '@/app/lib/prisma'
// import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'
import NextAuth from 'next-auth'
// import { Role } from '@/generated/prisma'
import { Role } from '@/generated/prisma'




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


      const existingUser = await prisma.user.findUnique({
        where: { email: profile.email },
      });


      if (!existingUser) {
        // Create new user if none exists
        await prisma.user.create({
          data: {
            email: profile.email,
            name: profile.name,
            role: Role.public, // Default role for new users
          },
        });
      }
      // Allow sign-in without modifying existing user
      return true;
    },
    async jwt({ token, user, profile }) {
      // Only populate token.id during initial sign-in
      if (user) {
        // console.log("[authOptions profile jwt]: ", profile);
        token.id = user.id; // user.id comes from signIn upsert
        if (profile.email == 'sahityaaryansingh@gmail.com') token.role = Role.admin;
        else token.role = Role.public;

        // console.log("token jwt authOPtions if user: ", token);
      } else if (profile && !token.id) {
        // Fallback: query user if token.id is missing
        const dbUser = await prisma.user.findUnique({
          where: { email: profile.email },
        });
        // console.log("dbuser: ", dbUser);
        if (dbUser) {
          token.id = dbUser.id;
          token.role = dbUser.role;
        } else {
          console.error("No user found for email:", profile.email);
        }
      }

      return token;
    },

    session,
  },
}


const handler = NextAuth(authOption)


export { handler as GET, handler as POST };