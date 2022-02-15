import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { verifyPassword } from '../../../lib/auth';
import { connectToDatabase } from '../../../lib/db';

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  secret: process.env.SECRET,
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      async authorize(credentials) {
        const client = await connectToDatabase();

        const usersCollection = client.db().collection('users');

        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        if (!user) {
          client.close();
          throw new Error('No user found!');
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          client.close();
          throw new Error('Could not log you in!');
        }

        client.close();
        return { id: user._id.toString(), email: user.email, username: user.username, profileImage: user.profileImage };
      },
    }),
  ],
  callbacks: {
    jwt: async ( { token, user }) => {
      user && (token.user = user)
      return token
    },
    session: async ({ session, token }) => {
      token?.user && (session.user = token.user)
      return session
    },
  }
});