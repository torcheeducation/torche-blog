import Post from "@/models/post"
import dbConnect from "@/utils/dbConnect"
import handler from "@/utils/handler"

handler.put(addVisitor)

async function addVisitor(req, res) {
  dbConnect()

  try {
    const getPost = await Post.findById(req.query.id)
    const { visitor } = getPost
    getPost.visitor = visitor + 1
    getPost.editedAt = new Date()
    await getPost.save()
    res.status(200).json({ message: "Update visitor success" })
  } catch (error) {
    console.log(error)
  }
}

export default handler
