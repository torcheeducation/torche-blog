import Layout from "@/components/admin-page/Layout";
import LoginForm from "@/components/admin-page/login-page/LoginForm";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Login() {
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace("/admin")
      } else {
        setIsLoading(false)
      }
    })
  }, [router])

  if (isLoading) {
    return <h1 className="font-bold text-2xl">Loading...</h1>
  }

  return (
    <Layout title="Login">
      <LoginForm />
    </Layout>
  )
}