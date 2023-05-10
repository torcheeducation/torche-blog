import Layout from "@/components/Layout";
import PostDetail from "@/components/posts-page/PostDetail";
import { useEffect, useState } from "react";

async function addVisitor(id) {
  const res = await fetch(`/api/visitor/${id}`, {
    method: "PUT",
  });
  const data = res.json();

  return data;
}

export default function Posts({ id, data, category }) {
  const [isVisitor, setIsVisitor] = useState(false);
  const post = data.posts.filter((d) => d._id === id)[0];

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

  const date = `${new Date(post.createdAt).getDate()} ${
    month[new Date(post.createdAt).getMonth()]
  } ${new Date(post.createdAt).getFullYear()}`;

  useEffect(() => {
    const addNewVisitor = async () => {
      const visitor = await addVisitor(id);
      setIsVisitor(true);
    };

    if (!isVisitor) {
      addNewVisitor();
      setIsVisitor(true);
    }
  }, [id, isVisitor]);

  return (
    <Layout title={post.title}>
      <div className="w-full px-4 py-6 xl:px-14">
        <PostDetail post={post} date={date} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts`);
  const data = await res.json();

  return {
    props: {
      id: context.params.id,
      data,
    },
  };
}
