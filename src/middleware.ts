import { withAuth } from 'next-auth/middleware';

export default withAuth(function middleware(req) {}, {
  pages: {
    signIn: '/signin',
  },
});

export const config = {
  matcher: ['/dashboard', '/client', '/server'],
};
