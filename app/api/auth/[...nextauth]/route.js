import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// const NextAuth = require("next-auth").default;
// const GoogleProvider = require("next-auth/providers/google").default;

import User from "@models/user";
import { connectToDB } from "@utils/database";

const handler = NextAuth({
  providers: [
    GoogleProvider({
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

        // Check if the user already exists in the database
        const userExists = await User.findOne({ email: profile.email });

        // If the user does not exist, create a new user in the database
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(/\s/g, "").toLowerCase(),
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
});

export { handler as GET, handler as POST };
