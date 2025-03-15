import NextAuth from "next-auth/next";

import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "@utils/database";

import User from "@models/user";

export const authOptions = {
  providers: [
    GoogleProvider.default({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async session({ session }) {
      try {
        const sessionUser = await User.findOne({ email: session.user.email });

        session.user.id = sessionUser._id.toString();

        return session;
      } catch (error) {
        console.log("Error during session callback:", error);
      }
    },

    async signIn({ profile }) {
      try {
        await connectToDB();

        const userExists = await User.findOne({ email: profile.email });

        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name,
            image: profile.picture,
          });
        }

        return true;
      } catch (error) {
        console.log("Error during sign-in:", error);
        return false;
      }
    },
  },
};

const handler = NextAuth.default(authOptions);

export { handler as GET, handler as POST };
