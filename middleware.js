import { withAuth } from 'next-auth/middleware';





export default withAuth({
  callbacks: {
    authorized: ({ token, req }) => {
      // console.log("url: ", req.nextUrl.pathname);
      // console.log("token: ", token);
      if (!token) return false; 

      const url = req.nextUrl.pathname;


      // Admin-only routes
      if (url.startsWith('/admin')) {
        return token.role === 'admin';
      }

      // Authenticated-only routes (any role)
      return true;
    },
  },
  pages: {
    signIn: '/login',
  },
});

export const config = {
  matcher: ['/dashboard', '/my-courses', '/revision', '/checkout', '/admin/:path*'],
};