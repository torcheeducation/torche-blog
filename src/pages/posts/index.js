import AllPosts from "@/components/posts-page/AllPosts";
import Layout from "@/components/Layout";
import NewPosts from "@/components/posts-page/NewPosts";

export default function Posts({ posts }) {
  const month = [ "januari", "februari", "maret", "april", "mei", "juni", "juli", "agustus", "september", "oktober", "november", "desember" ]

  const processData = () => {
    const result = []

    posts.posts.forEach((d) => {
      const date = `${new Date(d.createdAt).getDate()} ${month[new Date(d.createdAt).getMonth()]} ${new Date(d.createdAt).getFullYear()}`
      
      result.push({
        ...d,
        date,
      })
    })

    return result
  }

  return (
    <Layout title="Postingan">
      <div className="w-full px-4 py-6 xl:px-14">
        <NewPosts posts={processData()} />
        <AllPosts posts={processData()} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts`)
  const posts = await res.json()

  return {
    props: {
      posts,
    }
  }
}
