import Layout from "@/components/admin-page/Layout"
import { hasToken } from "@/utils/checkUser"
import { signOut } from "next-auth/react"

export default function Admin({ data }) {
  return (
    <Layout title="Dashboard">
      <h1>This is Admin Page. Need login to access this page!</h1>
      <p>Login as <b>{data.name}</b></p>
      <button onClick={() => signOut()}>Sign Out</button>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const getToken = await hasToken(context.req)

  if (!getToken.isToken) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    }
  }

  return { 
    props: {
      data: getToken.data
    } 
  }
}