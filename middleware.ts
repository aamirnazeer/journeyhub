import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    console.log(req.nextUrl.pathname);
    const token = req.cookies.get('next-auth.session-token')?.value || '';
    if (['/signin', '/signup'].includes(req.nextUrl.pathname) && token) {
      return NextResponse.redirect(new URL('/', req.nextUrl));
    }
  },
  {
    pages: {
      signIn: '/signin',
    },
  }
);

export const config = {
  matcher: ['/client', '/server', '/api/:path*'],
};
