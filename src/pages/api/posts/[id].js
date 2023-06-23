import Post from "@/models/post"
import dbConnect from "@/utils/dbConnect"

export default async function handler(req, res) {
  dbConnect()

  try {
    const post = await Post.findOne({ _id: req.query.id })
    res.status(200).json({
      status: 'success',
      post,
    })
  } catch (error) {
    console.log(error)
  }
}
