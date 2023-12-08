import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    if (['/signin', '/signup'].includes(req.nextUrl.pathname)) {
      return NextResponse.redirect(new URL('/', req.nextUrl));
    }
  },
  {
    pages: {
      signIn: '/signin',
    },
  }
);

export const config = { matcher: ['/client', '/server', '/api/:path*'] };
