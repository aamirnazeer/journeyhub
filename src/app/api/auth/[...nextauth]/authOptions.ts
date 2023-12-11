import { NextAuthOptions, Session } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from '@/prisma/_base';
import bcrypt from 'bcrypt';
import { signinValidationSchema } from '@/src/helpers/validationSchema';
import { JWT } from 'next-auth/jwt';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'test@email.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        try {
          const validation = signinValidationSchema.safeParse(credentials);
          if (!validation.success) return null;
          const user = await prisma.users.findFirstOrThrow({
            where: {
              AND: [{ email: validation.data.email }],
            },
          });
          if (bcrypt.compareSync(validation.data.password, user.password)) {
            return user;
          }
          return null;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/signin',
  },
  callbacks: {
    async jwt({ token, user, session, trigger }) {
      if (user) {
        token.id = user.id;
        token.organisationId = user.organisationId;
        token.picture = user.image;
      }
      if (trigger === 'update' && session.name) {
        token.name = session.name;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.organisationId = token.organisationId;
      session.user.image = token.picture;
      return session;
    },
  },
};
