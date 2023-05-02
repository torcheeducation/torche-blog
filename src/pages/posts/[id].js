import Layout from "@/components/Layout";
import PostDetail from "@/components/posts-page/PostDetail";
import { useEffect } from "react";

async function addVisitor(id) {
  const res = await fetch(`/api/visitor/${id}`, {
    method: "PUT",
  });
  const data = res.json();

  return data;
}

export default function Posts({ id, data }) {
  const month = [
    "januari",
    "februari",
    "maret",
    "april",
    "mei",
    "juni",
    "juli",
    "agustus",
    "september",
    "oktober",
    "november",
    "desember",
  ];

  const date = `${new Date(data.post.createdAt).getDate()} ${
    month[new Date(data.post.createdAt).getMonth()]
  } ${new Date(data.post.createdAt).getFullYear()}`;

  useEffect(() => {
    const addNewVisitor = async () => {
      const visitor = await addVisitor(id);
      console.log(visitor);
    };

    addNewVisitor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout title="Postingan">
      <div className="w-full px-4 py-6 xl:px-14">
        <PostDetail post={data.post} date={date} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/posts/${context.params.id}`
  );
  const data = await res.json();

  return {
    props: {
      id: context.params.id,
      data,
    },
  };
}
