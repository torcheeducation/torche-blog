import { getToken } from "next-auth/jwt";

const secret = process.env.NEXTAUTH_SECRET

export const hasToken = async (req) => {
  const token = await getToken({ req, secret })
  if (!token) {
    return false
  }
  return {
    isToken: true,
    data: token,
  }
}
