import Visitor from "@/models/visitor"
import dbConnect from "@/utils/dbConnect"

const month = [ "january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december" ]

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(404).json({ status: "error", message: "Method not found!" })
    return
  }

  dbConnect()

  try {
    const today = new Date()

    const todayTimestamp = new Date(`${today.getDate()} ${month[today.getMonth()]} ${today.getFullYear()}`).getTime()
    const getVisitor = await Visitor.findOne({ timestamp: todayTimestamp }).exec()

    res.status(200).json({
      status: "success",
      data: getVisitor,
    })
  } catch (error) {
    console.log(error)
  }
}
