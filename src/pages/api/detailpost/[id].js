import Post from "@/models/post"
import dbConnect from "@/utils/dbConnect"
import handler from "@/utils/handler"

handler.get(getPostById)

async function getPostById(req, res) {
  dbConnect()

  try {
    const post = await Post.findOne({ _id: req.query.id })
    res.status(200).json({
      post,
    })
  } catch (error) {
    console.log(error)
  }
}

export default handler
