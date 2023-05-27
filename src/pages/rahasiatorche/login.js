import Loading from "@/components/Loading";
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
        router.replace("/rahasiatorche")
      } else {
        setIsLoading(false)
      }
    })
  }, [router])

  if (isLoading) {
    return <Loading />
  }

  return (
    <Layout title="Login">
      <LoginForm />
    </Layout>
  )
}