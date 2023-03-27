import AddPost from "@/components/admin-page/AddPost"
import AdminInfo from "@/components/admin-page/AdminInfo"
import Layout from "@/components/admin-page/Layout"
import { hasToken } from "@/utils/checkUser"
import { signOut } from "next-auth/react"

export default function Admin({ data }) {
  return (
    <Layout title="Dashboard">
      <div className="p-4 flex justify-between items-center">
        <p className="capitalize">Login Sebagai <b>{data.name}</b></p>
        <button className="mt-1 py-1 px-3 font-bold uppercase bg-red-500 text-white rounded-lg border border-red-500 hover:bg-white hover:text-red-500" onClick={() => signOut()}>Log Out</button>
      </div>
      <div className="p-4 md:px-8">
        <AdminInfo />
        <AddPost owner={data} />
      </div>
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