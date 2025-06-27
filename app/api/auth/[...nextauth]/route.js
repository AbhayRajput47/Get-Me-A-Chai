
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials"
import mongoose from "mongoose";
import connectDb from "@/db/connectDb";
import User from "@/models/User";
import Payment from "@/models/Payment";
import bcrypt from "bcryptjs"

export const authOptions = {
   debug: true,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      httpTimeout: 10000,
    }),
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
      }),

       CredentialsProvider({
      name: "Login with Username",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectDb();
        const user = await User.findOne({ username: credentials.username }).select('+password');

        if (!user) throw new Error("No user found");

         const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
        if (!isPasswordValid) throw new Error("Invalid password");

        return { id: user._id, name: user.username, email: user.email
          , provider: 'credentials'
         };
      },
    }),

  
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
       await connectDb();

if(account.provider == 'github'){

        // connect to database
        const currentUser = await User.findOne({email: user.email})

        if(!currentUser){
          const newUser = await User.create({
          email: user.email,
            username: user.email.split('@')[0],  
            name: user.name    
          })
        }
     
        return true
      }
      if (account.provider === "google") {
        const currentUser = await User.findOne({email: user.email})

        if(!currentUser){
          const newUser = await User.create({
          email: user.email,
            username: user.email.split('@')[0], 
            name: user.name     
          })
        }
        return profile.email_verified && profile.email.endsWith("@gmail.com")
      }
      return true // Do different verification for other providers that don't have `email_verified`
    
  },

   async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.username = user.name;
      }
      return token;
    },
    async session({ session, user, token }) {
      await connectDb()
      const dbUser = await User.findOne({email: session.user.email})
      session.user.name = dbUser.username
      return session
    },
  }
}


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }