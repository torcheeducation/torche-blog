import Layout from "@/components/Layout";
import PostDetail from "@/components/PostDetail";

export default function Posts() {
  return (
    <Layout title="Postingan">
      <div className="w-full px-4 py-6 xl:px-14">
        <PostDetail />
      </div>
    </Layout>
  );
}
