import User from "@/models/user"
import dbConnect from "@/utils/dbConnect"

export default async function handler(req, res) {
  dbConnect()

  if (req.method === "POST") {
    try {
      const user = await User.create(req.body)
      res.status(201).json({
        status: "success",
        message: "Created user!",
        data: {
          id: user._id,
          name: user.name,
          username: user.username,
        },
      })
    } catch (error) {
      if (error.keyValue.username) {
        res.status(400).json({
          status: "fail",
          message: "username already used",
        });
        return
      }

      console.log(error)
      res.status(400).json({ status: "fail", message: error })
    }
  } else if (req.method === "GET") {
    try {
      const user = await User.find()
      res.status(200).json({
        status: "success",
        user,
      })
    } catch (error) {
      console.log(error)
      res.status(404).json({ status: "fail", message: error })
    }
  } else if (req.method === "DELETE") {
    try {
      const id = req.body.id;

      if (!id) {
        res.status(400).json({
          status: "fail",
          message: "id payload needed"
        });
        return
      }

      const user = await User.findByIdAndDelete(id);
      
      if (!user) {
        res.status(404).json({
          status: "fail",
          message: "user not found"
        });
        return
      }

      res.status(200).json({
        status: "success",
        message: `Delete User ${id} success`,
      });
    } catch (error) {
      console.log(error);
      res.status(404).json({ status: "fail", message: error });
    }
  } else {
    res.status(404).json({ status: "error", message: "Method not found!" })
  }
}
