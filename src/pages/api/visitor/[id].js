import Post from "@/models/post"
import Visitor from "@/models/visitor"
import dbConnect from "@/utils/dbConnect"

const month = [ "january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december" ]

export default async function handler(req, res) {
  if (req.method !== "PUT") {
    res.status(404).json({ status: "error", message: "Method not found!" })
    return
  }

  dbConnect()

  try {
    const today = new Date()

    const getPost = await Post.findById(req.query.id)
    const { visitor } = getPost
    getPost.visitor = visitor + 1
    getPost.editedAt = today
    await getPost.save()

    const todayTimestamp = new Date(`${today.getDate()} ${month[today.getMonth()]} ${today.getFullYear()}`).getTime()
    const getVisitor = await Visitor.findOne({ timestamp: todayTimestamp }).exec()
    if (!getVisitor) {
      await Visitor.create({ count: 1, timestamp: todayTimestamp })
    } else {
      const todayVisitor = getVisitor.count
      getVisitor.count = todayVisitor + 1
      await getVisitor.save()
    }
    
    res.status(200).json({ status: "success", message: "Update visitor success" })
  } catch (error) {
    res.status(500).json({ status: "error", message: error })
    console.log(error)
  }
}
