import AddPost from "@/components/admin-page/AddPost";
import AdminInfo from "@/components/admin-page/AdminInfo";
import PostAdmin from "../../components/admin-page/AllPostAdmin";
import Layout from "@/components/admin-page/Layout";
import { hasToken } from "@/utils/checkUser";
import { signOut } from "next-auth/react";
import Image from "next/image";

export default function Admin({ data, allPost, visitor }) {
  const month = [ "januari", "februari", "maret", "april", "mei", "juni", "juli", "agustus", "september", "oktober", "november", "desember" ]
      
  const processData = () => {
    const result = []
    if (allPost) {
      allPost.forEach((d) => {
        const date = `${new Date(d.createdAt).getDate()} ${month[new Date(d.createdAt).getMonth()]} ${new Date(d.createdAt).getFullYear()}`
          
        result.push({
          ...d,
          date,
        })
      })
    }

    return result
  }

  return (
    <Layout title="Dashboard">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <Image
            src={data.user.imageUrl ? data.user.imageUrl : "/img/blank.webp"}
            alt={`${data.name} profile`}
            width={200}
            height={200}
            priority
            style={{
              objectFit: "cover",
            }}
            className="h-14 w-14 rounded-full"
          />
          <p className="text-lg capitalize">
            Selamat Datang, <b>{data.name}!</b>
          </p>
        </div>
        <button
          className="mt-1 rounded-lg border border-red-500 bg-red-500 py-1 px-3 font-bold uppercase text-white hover:bg-white hover:text-red-500"
          onClick={() => signOut()}
        >
          Log Out
        </button>
      </div>
      <div className="p-4 md:px-8">
        <AdminInfo posts={processData()} visitor={visitor ? visitor : 0} />
        <AddPost owner={data} />
        <PostAdmin posts={processData()} owner={data} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const getToken = await hasToken(context.req)

  const visitorRes = await fetch(`${process.env.NEXTAUTH_URL}/api/visitor`)
  const visitorData = await visitorRes.json()
  const todayVisitor = visitorData.data || null
  
  const postRes = await fetch(`${process.env.NEXTAUTH_URL}/api/posts`)
  const postData = await postRes.json()
  const allPost = postData.posts || null


  if (!getToken.isToken) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      data: getToken.data,
      allPost,
      visitor: todayVisitor,
    },
  };
}
