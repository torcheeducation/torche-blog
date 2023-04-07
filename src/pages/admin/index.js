import AddPost from "@/components/admin-page/AddPost";
import AdminInfo from "@/components/admin-page/AdminInfo";
import PostAdmin from "../../components/admin-page/AllPostAdmin";
import Layout from "@/components/admin-page/Layout";
import { hasToken } from "@/utils/checkUser";
import { signOut } from "next-auth/react";
import Image from "next/image";

export default function Admin({ data }) {
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
        <AdminInfo />
        <AddPost owner={data} />
        <PostAdmin />
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const getToken = await hasToken(context.req);

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
    },
  };
}
