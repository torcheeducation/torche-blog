import mongoose from "mongoose"

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter your title"],
  },
  description: {
    type: String,
    required: [true, "Please enter your description"],
  },
  category: {
    type: String,
    required: [true, "Please enter your category"],
  },
  imageUrl: {
    type: String,
    required: [true, "Please enter your imageUrl"],
  },
  ownerId: {
    type: String,
    required: [true, "Please enter the owner of this post"]
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  editedAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.models.Post || mongoose.model("Post", postSchema)
