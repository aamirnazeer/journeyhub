import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';
import { jwtDecode } from 'jwt-decode';

export default withAuth(function middleware(req) {}, {
  callbacks: {
    authorized({ req, token }) {
      if (req.nextUrl.pathname.startsWith('/admin') && !token?.admin)
        return false;
      if (token) return true;
      return false;
    },
  },
  pages: {
    signIn: '/signin',
  },
});

export const config = {
  matcher: ['/dashboard', '/agents', '/admin'],
};
