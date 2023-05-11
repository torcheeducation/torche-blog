import Layout from "@/components/Layout";
import PostDetail from "@/components/posts-page/PostDetail";
import ScrollToTopButton from "@/utils/ScrollToTopButton";

export default function Posts({ postById, allPosts, user }) {
  const post = postById.post

  const month = [ "januari", "februari", "maret", "april", "mei", "juni", "juli", "agustus", "september", "oktober", "november", "desember" ]
  const date = `${new Date(post.createdAt).getDate()} ${month[new Date(post.createdAt).getMonth()]} ${new Date(post.createdAt).getFullYear()}`

  const postByCategory = allPosts.posts.filter((p) => p.category === post.category)
  const relatedPost = postByCategory.filter((r) => r.title !== post.title)
  const shuffled = relatedPost
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .slice(0, 2)

  return (
    <Layout title={post.title}>
      <div className="w-full px-4 py-6 xl:px-14">
        <PostDetail post={post} relatedPost={shuffled} date={date} owner={user} url={process.env.NEXT_PUBLIC_URL} />
      </div>
      <ScrollToTopButton />
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

  const ownerId = postById.post.ownerId
  const getOwner = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/signup`)
  const dataOwner = await getOwner.json()
  if (!getOwner.ok) {
    throw new Error(data.message || "Something went wrong!")
  }
  const user = dataOwner.user.filter((d) => d._id === ownerId)[0]

  return {
    props: {
      postById,
      allPosts,
      user,
    }
  }
}
