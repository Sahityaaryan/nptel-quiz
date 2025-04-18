import { User, getServerSession } from 'next-auth'

export const session = async ({ session, token }) => {
  // session.user.id = token.id

  // console.log("[session]: ", token);

  if (token.id) {
    session.user = session.user || {};
    session.user.id = token.id;
    session.user.role = token.role;
  }

  return session
}

export const getUserSession = async () => {
  const authUserSession = await getServerSession({
    callbacks: {
      session,
    },
  })

  // console.log("authsession: ", authUserSession);
  // if (!authUserSession) throw new Error('unauthorized')
  return authUserSession?.user
}