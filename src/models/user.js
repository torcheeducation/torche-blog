import mongoose from "mongoose"
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: [true, "Please enter your Username"],
    unique: [true, "Account already exists"],
  },
  password: {
    type: String,
    required: [true, "Please enter your Password"],
    minLength: [6, "Your password must be at least 6 characters"],
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

userSchema.pre("save", async function(next) {
  if (!this.isModified("password")) {
    next()
  }
  this.password = await bcrypt.hash(this.password, 10)
  next()
})

userSchema.methods.comparePassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

export default mongoose.models.User || mongoose.model("User", userSchema)
