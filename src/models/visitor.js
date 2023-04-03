import mongoose from "mongoose"

const visitorSchema = mongoose.Schema({
  count: {
    type: Number,
    required: [true, "Please insert the number of visitor"],
  },
  timestamp: {
    type: Number,
    required: [true, "Please insert the timestamp of this day visitor"],
  },
})

export default mongoose.models.Visitor || mongoose.model("Visitor", visitorSchema)
