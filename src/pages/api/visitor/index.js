import Visitor from "@/models/visitor"
import dbConnect from "@/utils/dbConnect"
import handler from "@/utils/handler"

handler.get(getTodayVisitor)

const month = [ "january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december" ]

async function getTodayVisitor(req, res) {
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

export default handler
