import User from "@/models/user"
import dbConnect from "@/utils/dbConnect"
import handler from "@/utils/handler"

handler.post(createUser)

async function createUser(req, res) {
  dbConnect()

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
  }
}

export default handler
