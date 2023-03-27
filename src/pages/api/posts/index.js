import Post from "@/models/post"
import dbConnect from "@/utils/dbConnect"
import handler from "@/utils/handler"

handler.post(createPost)
handler.get(getPosts)

async function createPost(req, res) {
  dbConnect()

  try {
    const post = await Post.create(req.body)
    res.status(201).json({
      message: "Created Post!",
      data: {
        id: post._id,
        title: post.title,
      },
    })
  } catch (error) {
    console.log(error)
  }
}

async function getPosts(req, res) {
  dbConnect()

  try {
    const posts = await Post.find()
    res.status(200).json({
      posts,
    })
  } catch (error) {
    console.log(error)
  }
}

export default handler
