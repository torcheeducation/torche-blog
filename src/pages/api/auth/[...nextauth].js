import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"

import User from "@/models/user";
import dbConnect from "@/utils/dbConnect";

export default NextAuth({
  session: {
    jwt: true
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        dbConnect()

        const user = await User.findOne({ username: credentials.username }).select("+password")
        if (!user) {
          throw new Error("Tidak ditemukan User dengan username tersebut, pastikan Anda memasukkan username dan password yang benar!")
        }

        const passwordValid = await user.comparePassword(credentials.password)
        if (!passwordValid) {
          throw new Error("Password Anda salah!")
        }
        
        return user
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = {
          _id: user._id,
          username: user.username,
          imageUrl: user.imageUrl
        }
      }
      return token
    },
    session: async({ session, token }) => {
      if (token) {
        session.user = token.user
      }
      return session
    }
  },
  pages: {
    signIn: "/admin/login"
  },
})
