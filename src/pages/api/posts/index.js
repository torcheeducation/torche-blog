import Post from "@/models/post"
import dbConnect from "@/utils/dbConnect"

export default async function handler(req, res) {
  dbConnect()
  if (req.method === "POST") {
    try {
      const post = await Post.create(req.body)
      res.status(201).json({
        status: "success",
        message: "Created Post!",
        data: {
          id: post._id,
          title: post.title,
        },
      })
    } catch (error) {
      console.log(error)
    }
  } else if (req.method === "GET") {
    try {
      const posts = await Post.find()
      res.status(200).json({
        posts,
      })
    } catch (error) {
      console.log(error)
    }
  } else if (req.method === "PUT") {
    const { id, title, shortText, description, category, imageUrl } = req.body
    try {
      const post = await Post.findByIdAndUpdate(id, { title, shortText, description, category, imageUrl, editedAt: new Date() })
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
  } else if (req.method === "DELETE") {
    try {
      await Post.findByIdAndDelete(req.body.id)
      res.status(200).json({
        status: "success",
        message: `Post ${req.body.id} delete successfull`,
      })
    } catch (error) {
      console.log(error)
      res.status(404).json({ error })
    }
  } else {
    res.status(404).json({ status: "error", message: "Method not found!" })
  }
}
