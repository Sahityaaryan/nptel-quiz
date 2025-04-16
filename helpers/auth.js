import { authOption } from './auth.config'
import NextAuth from 'next-auth'



export const {
    handlers,
    auth,
    signIn,
    signOut,
} = NextAuth({...authOption})