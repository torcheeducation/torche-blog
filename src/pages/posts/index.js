import AllPosts from "@/components/posts-page/AllPosts";
import Layout from "@/components/Layout";
import NewPosts from "@/components/posts-page/NewPosts";

export default function Posts() {
  return (
    <Layout title="Postingan">
      <div className="w-full px-4 py-6 xl:px-14">
        <NewPosts />
        <AllPosts />
      </div>
    </Layout>
  );
}
