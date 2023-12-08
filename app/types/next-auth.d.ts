import NextAuth, { DefaultSession } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import { User } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string | unknown;
      organisation: string | unknown;
    } & DefaultSession['user'];
  }
  interface User {
    organisation: string?;
  }
}
