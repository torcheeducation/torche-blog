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

      res.status(400).json({
        status: 'fail',
        message: error.message,
      });
    }
  } else if (req.method === "GET") {
    try {
      const posts = await Post.find()
      res.status(200).json({
        status: 'success',
        posts,
      })
    } catch (error) {
      console.log(error)

      res.status(404).json({
        status: "fail",
        message: error.message,
      });
    }
  } else if (req.method === "PUT") {
    const { id, title, shortText, description, category, imageUrl } = req.body
    try {
      if (!id || !title || !shortText || !description || !category || !imageUrl) {
        res.status(400).json({
          status: 'fail',
          message: "payload not contain needed property",
        });

        return
      }

      const post = await Post.findByIdAndUpdate(id, { title, shortText, description, category, imageUrl, editedAt: new Date() })
      res.status(200).json({
        status: "success",
        message: "Update post successful",
        data: {
          id: post._id,
          title: post.title,
        },
      })
    } catch (error) {
      console.log(error)
      res.status(400).json({ status: "fail", message: error.message })
    }
  } else if (req.method === "DELETE") {
    try {
      const post = await Post.findByIdAndDelete(req.body.id)

      if (!post) {
        res.status(400).json({
          status: "fail",
          message: "post not found",
        });

        return
      }

      res.status(200).json({
        status: "success",
        message: `Post ${req.body.id} delete successful`,
      })
    } catch (error) {
      console.log(error)
      res.status(404).json({ status: "fail", message: error.message })
    }
  } else {
    res.status(404).json({ status: "error", message: "Method not found!" })
  }
}
