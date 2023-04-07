import Post from "@/models/post"
import dbConnect from "@/utils/dbConnect"
import handler from "@/utils/handler"

handler.post(createPost)
handler.get(getPosts)
handler.put(editPost)

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

async function editPost(req, res) {
  console.log(req.body)
  dbConnect()

  const { id, title, description, category, imageUrl } = req.body
  try {
    const post = await Post.findByIdAndUpdate(id, { title, description, category, imageUrl, editedAt: new Date() })
    console.log(post)
    res.status(200).json({
      status: "success",
      message: "Update image successfull",
      data: {
        id: post._id,
        title: post.title,
      },
    })
  } catch (error) {
    console.log(error)
    res.status(404).json({ error })
  }
}

export default handler
