import AddPost from "@/components/admin-page/AddPost"
import AdminInfo from "@/components/admin-page/AdminInfo"
import Layout from "@/components/admin-page/Layout"
import EditPost from "@/components/admin-page/editPost"
import { hasToken } from "@/utils/checkUser"
import { signOut } from "next-auth/react"
import Image from "next/image"

export default function Admin({ data }) {
  return (
    <Layout title="Dashboard">
      <div className="p-4 flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <Image
            src={data.user.imageUrl ? data.user.imageUrl : "/img/blank.webp"}
            alt={`${data.name} profile`}
            width={200}
            height={200}
            priority
            style={{
              objectFit: "cover"
            }}
            className="w-14 h-14 rounded-full"
          />
          <p className="capitalize text-lg">Selamat Datang, <b>{data.name}!</b></p>
        </div>
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
