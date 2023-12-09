import { withAuth } from 'next-auth/middleware';

export default withAuth(function middleware(req) {}, {
  pages: {
    signIn: '/signin',
  },
  callbacks: {
    authorized({ req, token }) {
      return false;
    },
  },
});

export const config = {
  matcher: ['/client', '/server', '/api/:path*'],
};
