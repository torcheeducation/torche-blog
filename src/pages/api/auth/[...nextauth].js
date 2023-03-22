import { MongoClient } from "mongodb"
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"

export const authOptions = {
  session: {
    jwt: "true"
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_CLUSTER}.avbotnb.mongodb.net/?retryWrites=true&w=majority`
        const client = await MongoClient.connect(uri, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        })

        const users = client.db().collection("users")
        const result = await users.findOne({ username: credentials.username })
        if (!result) {
          client.close()
          throw new Error("No user found with this username")
        }

        const checkPassword = await bcrypt.compare(credentials.password, result.password)
        if (!checkPassword) {
          client.close()
          throw new Error("Password doesn't match!")
        }

        client.close()
        return { username: result.username }
      }
    })
  ],
}

export default NextAuth(authOptions)
