import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import ClientPromise from "../../../util/mongo";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../models/User";
import ConnectDB from "../../../util/dbConnect";
import { signIn } from "next-auth/react";
import bcrypt from "bcrypt";

ConnectDB();

export const AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        const email = credentials.email;
        const password = credentials.password;
        const user = await User.findOne({email : email});
        if (user) {
          return signInUser({ user, password });
        } else {
          throw new Error("Yo haven't registered yet");
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  database : process.env.MONGODB_URI,
  secret : "secret",
  // adapter: MongoDBAdapter(ClientPromise),
};

const signInUser = async ({ user, password }) => {
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Invalid password");
  }
  return user;
};

export default NextAuth(AuthOptions);
