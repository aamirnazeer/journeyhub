import NextAuth, { DefaultSession, User } from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string | unknwon;
      organisationId: string | unknown;
      admin: boolean;
      image: string | undefined | null;
    };
  }
  interface User {
    organisationId: string?;
  }
}
