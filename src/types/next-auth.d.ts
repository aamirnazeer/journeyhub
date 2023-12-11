import NextAuth, { DefaultSession, User } from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string | unknwon;
      organisationId: string | unknown;
    } & DefaultSession['user'];
  }
  interface User {
    organisationId: string?;
  }
}
