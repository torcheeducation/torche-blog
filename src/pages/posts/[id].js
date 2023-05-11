import Layout from "@/components/Layout";
import PostDetail from "@/components/posts-page/PostDetail";

export default function Posts({ postById, allPosts }) {
  const post = postById.post

  const month = [ "januari", "februari", "maret", "april", "mei", "juni", "juli", "agustus", "september", "oktober", "november", "desember" ]
  const date = `${new Date(post.createdAt).getDate()} ${month[new Date(post.createdAt).getMonth()]} ${new Date(post.createdAt).getFullYear()}`

  const postByCategory = allPosts.posts.filter((p) => p.category === post.category).slice(0, 2)
  const relatedPost = postByCategory.filter((r) => r.title !== post.title)
  console.log(relatedPost)

  return (
    <Layout title={post.title}>
      <div className="w-full px-4 py-6 xl:px-14">
        <PostDetail post={post} date={date} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const post = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/${context.params.id}`)
  const postById = await post.json()

  const posts = await fetch(`${process.env.NEXTAUTH_URL}/api/posts`)
  const allPosts = await posts.json()

  const addVisitor = await fetch(`${process.env.NEXTAUTH_URL}/api/visitor/${context.params.id}`, {
    method: "PUT"
  })
  const visitorResult = await addVisitor.json()
  console.log(visitorResult)

  return {
    props: {
      postById,
      allPosts
    }
  }
}
