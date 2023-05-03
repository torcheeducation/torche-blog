import User from "@/models/user"
import dbConnect from "@/utils/dbConnect"

export default async function handler(req, res) {
  dbConnect()

  if (req.method === "POST") {
    try {
      const user = await User.create(req.body)
      res.status(201).json({ 
        message: "Created user!",
        data: {
          id: user._id,
          name: user.name,
          username: user.username,
        },
      })
    } catch (error) {
      console.log(error)
      res.status(400).json({ message: error })
    }
  } else if (req.method === "GET") {
    try {
      const user = await User.find()
      res.status(200).json({
        user,
      })
    } catch (error) {
      console.log(error)
      res.status(404).json({ message: error })
    }
  } else {
    res.status(404).json({ status: "error", message: "Method not found!" })
  }
}
