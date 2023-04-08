import User from "@/models/user"
import dbConnect from "@/utils/dbConnect"
import handler from "@/utils/handler"

handler.post(createUser)
handler.get(getUser)

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
    res.status(400).json({ message: error })
  }
}

async function getUser(req, res) {
  dbConnect()

  try {
    const user = await User.find()
    res.status(200).json({
      user,
    })
  } catch (error) {
    console.log(error)
    res.status(404).json({ message: error })
  }
}

export default handler
